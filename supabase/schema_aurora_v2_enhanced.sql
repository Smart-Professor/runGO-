-- =========================================================
-- Aurora AI Image Studio — V2 增强版数据库脚本 (Postgres / Supabase / Neon)
-- 在 Supabase SQL Editor 或 Neon Console SQL Editor 中执行即可
-- 相比 V1 新增：社交互动、点赞评论、分享链接、推荐返利、API Key 管理
-- =========================================================

-- =========================================================
-- 0. 前置：扩展 & 通用函数
-- =========================================================
create extension if not exists "pgcrypto";
create extension if not exists "uuid-ossp";

-- 通用 updated_at 触发器函数
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;

-- =========================================================
-- 1. user_points (用户积分账户)
-- =========================================================
create table if not exists public.user_points (
  user_id          uuid primary key references auth.users(id) on delete cascade,
  balance          bigint not null default 0 check (balance >= 0),
  total_earned     bigint not null default 0,
  total_spent      bigint not null default 0,
  total_recharged  bigint not null default 0,  -- 累计充值金额(分 CNY)
  total_referrals  integer not null default 0, -- 累计邀请成功人数
  lifetime_rank    text not null default 'rookie' check (lifetime_rank in ('rookie','creator','pro','master','legend')),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- =========================================================
-- 2. point_transactions (积分交易流水)
-- =========================================================
create table if not exists public.point_transactions (
  id            bigint primary key generated always as identity,
  user_id       uuid not null references auth.users(id) on delete cascade,
  related_user  uuid references auth.users(id) on delete set null, -- 关联用户(如推荐人/被推荐人)
  type          text not null check (type in ('recharge','generate','bonus','refund','referral','like','share','daily')),
  points_delta  bigint not null,
  amount_cents  integer not null default 0,
  package_id    text,
  image_id      uuid references public.generated_images(id) on delete set null,
  description   text,
  metadata      jsonb not null default '{}'::jsonb,
  created_at    timestamptz not null default now()
);
create index if not exists idx_pt_user_created on public.point_transactions(user_id, created_at desc);
create index if not exists idx_pt_type on public.point_transactions(type);

-- =========================================================
-- 3. generated_images (核心作品表)
-- =========================================================
create table if not exists public.generated_images (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  prompt        text not null,
  negative_prompt text,
  image_url     text not null,
  thumbnail_url text,
  storage_path  text,                            -- 对象存储路径(Supabase Storage/S3)
  quality       text not null check (quality in ('standard','hd','ultra')),
  aspect_ratio  text not null default '1:1',
  width         integer,
  height        integer,
  file_size_kb  integer,
  style         text,
  seed          bigint,
  cost_points   integer not null default 0,
  is_favorite   boolean not null default false,
  is_public     boolean not null default false,
  is_nsfw       boolean not null default false,  -- 内容审核标记
  view_count    integer not null default 0,
  like_count    integer not null default 0,
  comment_count integer not null default 0,
  share_count   integer not null default 0,
  download_count integer not null default 0,
  model_name    text default 'seedream-v3',
  model_version text,
  generation_ms integer,                          -- 生成耗时(毫秒，用于优化)
  deleted_at    timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists idx_gi_user_created on public.generated_images(user_id, created_at desc) where deleted_at is null;
create index if not exists idx_gi_favorite    on public.generated_images(user_id, is_favorite) where deleted_at is null;
create index if not exists idx_gi_public      on public.generated_images(is_public, created_at desc) where deleted_at is null and is_public = true;
create index if not exists idx_gi_style       on public.generated_images(style) where deleted_at is null;

-- 热门作品视图（公共画廊用）
create or replace view public.v_popular_images as
  select
    gi.id, gi.user_id, gi.prompt, gi.thumbnail_url as image_url,
    gi.quality, gi.aspect_ratio, gi.style, gi.cost_points,
    gi.like_count, gi.view_count, gi.share_count, gi.comment_count,
    gi.created_at, u.raw_user_meta_data->>'full_name' as author_name,
    u.raw_user_meta_data->>'avatar_url' as author_avatar
  from public.generated_images gi
  left join auth.users u on u.id = gi.user_id
  where gi.deleted_at is null and gi.is_public = true and gi.is_nsfw = false
  order by (gi.like_count * 3 + gi.view_count + gi.share_count * 5) desc, gi.created_at desc
  limit 500;

-- =========================================================
-- 4. recharge_packages (充值套餐)
-- =========================================================
create table if not exists public.recharge_packages (
  id             text primary key,
  name           text not null,
  subtitle       text,
  points         integer not null,
  bonus_points   integer not null default 0,
  price_cents    integer not null,
  currency       text not null default 'CNY',
  popular        boolean not null default false,
  badge_text     text,                 -- "限时特惠" / "赠10%积分"
  sort_order     integer not null default 0,
  active         boolean not null default true,
  created_at     timestamptz not null default now()
);

-- =========================================================
-- 5. recharge_orders (真实充值订单，对接支付回调)
-- =========================================================
create table if not exists public.recharge_orders (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users(id) on delete cascade,
  package_id     text not null references public.recharge_packages(id),
  package_snapshot jsonb not null default '{}'::jsonb, -- 下单时套餐快照(防止后续改价)
  amount_cents   integer not null,
  currency       text not null default 'CNY',
  status         text not null default 'pending' check (status in ('pending','paid','failed','refunded','cancelled')),
  pay_provider   text check (pay_provider in ('stripe','alipay','wechat','apple','google','other')),
  pay_order_id   text,                              -- 第三方支付单号
  paid_at        timestamptz,
  refunded_at    timestamptz,
  failure_reason text,
  metadata       jsonb not null default '{}'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
create index if not exists idx_ro_user_created on public.recharge_orders(user_id, created_at desc);
create index if not exists idx_ro_status on public.recharge_orders(status);

-- =========================================================
-- 6. image_likes (作品点赞，防重复点赞)
-- =========================================================
create table if not exists public.image_likes (
  image_id   uuid not null references public.generated_images(id) on delete cascade,
  user_id    uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (image_id, user_id)
);

-- 点赞触发器 → 同步 like_count
create or replace function public.sync_image_like_count()
returns trigger language plpgsql as $$
begin
  if tg_op = 'INSERT' then
    update public.generated_images set like_count = like_count + 1 where id = new.image_id;
    return new;
  elsif tg_op = 'DELETE' then
    update public.generated_images set like_count = greatest(like_count - 1, 0) where id = old.image_id;
    return old;
  end if;
  return null;
end; $$;

drop trigger if exists trg_sync_like_count on public.image_likes;
create trigger trg_sync_like_count after insert or delete on public.image_likes
  for each row execute function public.sync_image_like_count();

-- =========================================================
-- 7. image_comments (作品评论)
-- =========================================================
create table if not exists public.image_comments (
  id         uuid primary key default gen_random_uuid(),
  image_id   uuid not null references public.generated_images(id) on delete cascade,
  user_id    uuid not null references auth.users(id) on delete cascade,
  parent_id  uuid references public.image_comments(id) on delete set null, -- 回复某条评论
  content    text not null check (char_length(content) between 1 and 500),
  is_deleted boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_ic_image_created on public.image_comments(image_id, created_at desc);

-- 评论数同步触发器
create or replace function public.sync_image_comment_count()
returns trigger language plpgsql as $$
begin
  if tg_op = 'INSERT' and new.is_deleted = false then
    update public.generated_images set comment_count = comment_count + 1 where id = new.image_id;
  elsif tg_op = 'UPDATE' and old.is_deleted <> new.is_deleted then
    if new.is_deleted then
      update public.generated_images set comment_count = greatest(comment_count - 1, 0) where id = new.image_id;
    else
      update public.generated_images set comment_count = comment_count + 1 where id = new.image_id;
    end if;
  elsif tg_op = 'DELETE' and old.is_deleted = false then
    update public.generated_images set comment_count = greatest(comment_count - 1, 0) where id = old.image_id;
  end if;
  return null;
end; $$;

drop trigger if exists trg_sync_comment_count on public.image_comments;
create trigger trg_sync_comment_count after insert or update or delete on public.image_comments
  for each row execute function public.sync_image_comment_count();

-- =========================================================
-- 8. shared_links (作品分享链接，可带访问密码/有效期)
-- =========================================================
create table if not exists public.shared_links (
  id            uuid primary key default gen_random_uuid(),
  short_code    text unique,                              -- 短码，用于 URL: /s/{short_code}
  image_id      uuid not null references public.generated_images(id) on delete cascade,
  owner_id      uuid not null references auth.users(id) on delete cascade,
  access_password text,                                    -- bcrypt hash，空 = 免密
  max_views     integer,                                   -- 最大访问次数，null=无限
  view_count    integer not null default 0,
  expires_at    timestamptz,                               -- 过期时间，null=永久
  is_active     boolean not null default true,
  created_at    timestamptz not null default now()
);
create index if not exists idx_sl_shortcode on public.shared_links(short_code);
create index if not exists idx_sl_owner on public.shared_links(owner_id, created_at desc);

-- =========================================================
-- 9. referrals (推荐返利)
-- =========================================================
create table if not exists public.referrals (
  referrer_id   uuid not null references auth.users(id) on delete cascade,   -- 推荐人
  referee_id    uuid unique not null references auth.users(id) on delete cascade, -- 被推荐人(一人只能被一人推荐)
  reward_points integer not null default 0,  -- 奖励给推荐人的积分
  status        text not null default 'pending' check (status in ('pending','completed','cancelled')),
  completed_at  timestamptz,                 -- 被推荐人首次充值后完成
  created_at    timestamptz not null default now()
);
create index if not exists idx_ref_referrer on public.referrals(referrer_id, created_at desc);

-- =========================================================
-- 10. daily_checkins (每日签到)
-- =========================================================
create table if not exists public.daily_checkins (
  user_id    uuid not null references auth.users(id) on delete cascade,
  checkin_date date not null,
  reward_points integer not null default 5,
  streak_days integer not null default 1,
  created_at timestamptz not null default now(),
  primary key (user_id, checkin_date)
);

-- =========================================================
-- 11. user_api_keys (个人 API Key，支持第三方调用图像生成)
-- =========================================================
create table if not exists public.user_api_keys (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  key_name      text not null,
  key_prefix    text not null,                     -- 前缀(sk_live_****abcd 展示用)
  key_hash      text not null unique,              -- bcrypt 或 sha256，从不存明文
  permissions   text[] not null default '{image.generate}'::text[],
  monthly_quota integer,                           -- 每月额度(null=无限)
  used_this_month integer not null default 0,
  last_used_at  timestamptz,
  is_active     boolean not null default true,
  expires_at    timestamptz,
  created_at    timestamptz not null default now()
);
create index if not exists idx_uak_user on public.user_api_keys(user_id, created_at desc);

-- =========================================================
-- 12. user_gallery_folders + folder_images (作品集文件夹)
-- =========================================================
create table if not exists public.user_gallery_folders (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  name       text not null check (char_length(name) between 1 and 50),
  cover_url  text,
  item_count integer not null default 0,
  is_default boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.folder_images (
  folder_id  uuid not null references public.user_gallery_folders(id) on delete cascade,
  image_id   uuid not null references public.generated_images(id) on delete cascade,
  added_at   timestamptz not null default now(),
  primary key (folder_id, image_id)
);

-- 文件夹 item_count 同步
create or replace function public.sync_folder_item_count()
returns trigger language plpgsql as $$
begin
  if tg_op = 'INSERT' then
    update public.user_gallery_folders set item_count = item_count + 1 where id = new.folder_id;
    return new;
  elsif tg_op = 'DELETE' then
    update public.user_gallery_folders set item_count = greatest(item_count - 1, 0) where id = old.folder_id;
    return old;
  end if;
  return null;
end; $$;

drop trigger if exists trg_sync_folder_count on public.folder_images;
create trigger trg_sync_folder_count after insert or delete on public.folder_images
  for each row execute function public.sync_folder_item_count();

-- =========================================================
-- 13. user_preferences (用户偏好设置)
-- =========================================================
create table if not exists public.user_preferences (
  user_id                uuid primary key references auth.users(id) on delete cascade,
  default_quality        text not null default 'standard' check (default_quality in ('standard','hd','ultra')),
  default_aspect_ratio   text not null default '1:1',
  default_style          text default 'auto',
  auto_save_to_gallery   boolean not null default true,
  notify_on_complete     boolean not null default true,
  auto_public_new        boolean not null default false,   -- 新作品自动公开
  watermark_enabled      boolean not null default false,   -- 水印开关
  watermark_text         text default 'Aurora AI',
  ui_language            text not null default 'zh-CN',
  ui_theme               text not null default 'light' check (ui_theme in ('light','dark','auto')),
  email_promotions       boolean not null default true,    -- 营销邮件许可
  referral_code          text unique,                      -- 自定义邀请码
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);

-- =========================================================
-- 14. audit_logs (安全审计日志，关键操作留痕)
-- =========================================================
create table if not exists public.audit_logs (
  id         bigint primary key generated always as identity,
  user_id    uuid references auth.users(id) on delete set null,
  action     text not null,                              -- login / logout / recharge / generate / delete_image / export_data ...
  target     text,
  ip_address inet,
  user_agent text,
  metadata   jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists idx_audit_user_created on public.audit_logs(user_id, created_at desc);
create index if not exists idx_audit_action on public.audit_logs(action, created_at desc);

-- =========================================================
-- updated_at 触发器
-- =========================================================
create trigger set_updated_at before update on public.user_points              for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.recharge_orders         for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.generated_images        for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.user_gallery_folders    for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.user_preferences        for each row execute function public.set_updated_at();
create trigger set_updated_at before update on public.image_comments          for each row execute function public.set_updated_at();

-- =========================================================
-- RLS 行级安全策略 (生产环境强烈建议开启)
-- =========================================================
alter table public.user_points              enable row level security;
alter table public.point_transactions       enable row level security;
alter table public.generated_images         enable row level security;
alter table public.recharge_packages        enable row level security;
alter table public.recharge_orders          enable row level security;
alter table public.image_likes              enable row level security;
alter table public.image_comments           enable row level security;
alter table public.shared_links             enable row level security;
alter table public.referrals                enable row level security;
alter table public.daily_checkins           enable row level security;
alter table public.user_api_keys            enable row level security;
alter table public.user_gallery_folders     enable row level security;
alter table public.folder_images            enable row level security;
alter table public.user_preferences         enable row level security;
alter table public.audit_logs               enable row level security;

-- 视图 v_popular_images 不需要 RLS (已在 where 条件中过滤公开作品)

-- 1. user_points: 只看/改自己的
create policy points_self on public.user_points
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- 2. point_transactions: 看自己的
create policy tx_self on public.point_transactions
  for select using (user_id = auth.uid());
create policy tx_self_insert on public.point_transactions
  for insert with check (user_id = auth.uid());

-- 3. generated_images: 看自己的 + 别人公开的，写自己的
create policy gi_select on public.generated_images
  for select using (user_id = auth.uid() or (is_public = true and deleted_at is null));
create policy gi_write on public.generated_images
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- 4. recharge_packages: 所有人可读
create policy packages_public on public.recharge_packages for select using (true);

-- 5. recharge_orders: 看自己的
create policy ro_self on public.recharge_orders
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- 6. image_likes: 看所有人(用于点赞状态)，写自己的
create policy il_select on public.image_likes for select using (true);
create policy il_write on public.image_likes for all with check (user_id = auth.uid());

-- 7. image_comments: 看作品下的评论，写自己的
create policy ic_select on public.image_comments
  for select using (is_deleted = false or user_id = auth.uid());
create policy ic_write on public.image_comments
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- 8. shared_links: 看自己的
create policy sl_self on public.shared_links
  for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());

-- 9. referrals: 看自己的推荐关系
create policy ref_self on public.referrals
  for select using (referrer_id = auth.uid() or referee_id = auth.uid());

-- 10. daily_checkins / 11. api_keys / 12. folders / 13. prefs / 14. audit: 自己的
create policy ci_self on public.daily_checkins for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy ak_self on public.user_api_keys  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy fo_self on public.user_gallery_folders for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy fi_self on public.folder_images for all using (
  exists (select 1 from public.user_gallery_folders f where f.id = folder_images.folder_id and f.user_id = auth.uid())
) with check (
  exists (select 1 from public.user_gallery_folders f where f.id = folder_images.folder_id and f.user_id = auth.uid())
);
create policy prefs_self on public.user_preferences for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy audit_self on public.audit_logs for select using (user_id = auth.uid());

-- =========================================================
-- Seed Data — 初始数据
-- =========================================================

-- 4 档充值套餐 (和前端 POINTS_PACKAGES 保持一致)
insert into public.recharge_packages (id, name, subtitle, points, bonus_points, price_cents, currency, popular, badge_text, sort_order) values
  ('starter',    '入门包',   '轻度体验 · 新手首选',        100,    0,    990, 'CNY', false, null,          1),
  ('basic',      '基础包',   '日常创作 · 高性价比',        500,   50,   3990, 'CNY', true,  '最受欢迎',    2),
  ('pro',        '专业包',   '高频创作 · 立省 ¥150',      2000,  300,  12990, 'CNY', false, '限时 +15%',   3),
  ('enterprise', '企业包',   '团队/商用 · 最优单价',     10000, 2000,  49990, 'CNY', false, '最佳单价',    4)
on conflict (id) do nothing;

-- 为现有 auth.users 补建账户 (首次迁移执行，幂等安全)
insert into public.user_points (user_id, balance, total_earned)
select id, 100, 100
from auth.users
where id not in (select user_id from public.user_points)
on conflict do nothing;

insert into public.point_transactions (user_id, type, points_delta, description)
select id, 'bonus', 100, '新用户注册奖励'
from auth.users u
where not exists (select 1 from public.point_transactions t where t.user_id = u.id limit 1)
on conflict do nothing;

insert into public.user_preferences (user_id)
select id from auth.users
where id not in (select user_id from public.user_preferences)
on conflict do nothing;

-- =========================================================
-- 新用户注册触发器：自动建积分账户 + 偏好 + 默认文件夹 + 注册奖励流水
-- =========================================================
create or replace function public.handle_new_user_aurora_setup()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  v_code text;
begin
  -- 1) 积分账户 + 100 奖励
  insert into public.user_points (user_id, balance, total_earned)
  values (new.id, 100, 100) on conflict do nothing;

  insert into public.point_transactions (user_id, type, points_delta, description)
  values (new.id, 'bonus', 100, '新用户注册奖励') on conflict do nothing;

  -- 2) 偏好设置 (默认中文、标准画质、正方形)
  insert into public.user_preferences (user_id, referral_code)
  values (
    new.id,
    lower(substr(encode(gen_random_bytes(5), 'hex'), 1, 8))
  ) on conflict do nothing;

  -- 3) 默认作品集文件夹 "我的作品"
  insert into public.user_gallery_folders (user_id, name, is_default)
  values (new.id, '我的作品', true) on conflict do nothing;

  -- 4) 审计日志
  insert into public.audit_logs (user_id, action, metadata)
  values (new.id, 'signup', jsonb_build_object('email', new.email, 'provider', new.raw_app_meta_data->>'provider'));

  return new;
end; $$;

drop trigger if exists on_auth_user_created_aurora_setup on auth.users;
create trigger on_auth_user_created_aurora_setup
  after insert on auth.users
  for each row execute function public.handle_new_user_aurora_setup();

-- =========================================================
-- 每日签到奖励函数 (供后端 RPC 调用)
-- 连续签到奖励梯度：1天5分，3天10分，7天25分，30天100分
-- =========================================================
create or replace function public.do_daily_checkin(p_user_id uuid default auth.uid())
returns table (success boolean, reward integer, streak integer, message text)
language plpgsql security definer set search_path = public as $$
declare
  v_today       date := current_date;
  v_yesterday   date := current_date - 1;
  v_last        date;
  v_streak      integer := 1;
  v_reward      integer := 5;
  v_exists      boolean;
begin
  -- 今日已签到
  select exists(
    select 1 from public.daily_checkins where user_id = p_user_id and checkin_date = v_today
  ) into v_exists;
  if v_exists then
    success := false; reward := 0; streak := 0; message := '今日已签到，明天再来吧～';
    return next; return;
  end if;

  -- 计算连续天数
  select max(checkin_date) into v_last
  from public.daily_checkins where user_id = p_user_id;

  if v_last = v_yesterday then
    select coalesce(max(streak_days), 0) + 1 into v_streak
    from public.daily_checkins where user_id = p_user_id and checkin_date = v_yesterday;
  end if;

  -- 奖励梯度
  if    v_streak >= 30 then v_reward := 100;
  elsif v_streak >= 7  then v_reward := 25;
  elsif v_streak >= 3  then v_reward := 10;
  else                      v_reward := 5;
  end if;

  -- 写签到表
  insert into public.daily_checkins (user_id, checkin_date, reward_points, streak_days)
  values (p_user_id, v_today, v_reward, v_streak);

  -- 加积分
  update public.user_points
  set balance = balance + v_reward, total_earned = total_earned + v_reward
  where user_id = p_user_id;

  insert into public.point_transactions (user_id, type, points_delta, description, metadata)
  values (p_user_id, 'daily', v_reward, format('每日签到 · 连续%s天', v_streak),
          jsonb_build_object('streak', v_streak));

  success := true; reward := v_reward; streak := v_streak;
  message := format('签到成功！连续%s天，获得%s积分', v_streak, v_reward);
  return next;
end; $$;

-- 给 authenticated 角色执行权限
revoke all on function public.do_daily_checkin(uuid) from public;
grant  execute on function public.do_daily_checkin(uuid) to authenticated, service_role;

-- =========================================================
-- Storage Bucket 建议 (Supabase Storage)
-- 如果使用 Supabase Storage 存图片，请在控制台创建以下 bucket:
--   name: aurora-images    -- public 关闭(作品私密，走签名URL或走代理)
--   name: aurora-avatars   -- public 开启
--   name: aurora-share     -- public 关闭
-- =========================================================

-- =========================================================
-- Aurora AI Image Studio — 核心业务数据表 (Postgres / Supabase)
-- 在 Supabase SQL Editor 中执行此脚本即可完成初始化
-- 目标：将本地 localStorage 中的积分/生成记录/收藏迁移到云端 Postgres
-- =========================================================

-- ---------- 1. user_points (用户积分账户) ----------
create table if not exists public.user_points (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  balance        bigint not null default 0 check (balance >= 0),
  total_earned   bigint not null default 0,   -- 累计获得积分(含奖励)
  total_spent    bigint not null default 0,   -- 累计消耗积分
  total_recharged bigint not null default 0,  -- 累计充值金额(分)
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

-- ---------- 2. point_transactions (积分交易流水) ----------
create table if not exists public.point_transactions (
  id            bigint primary key generated always as identity,
  user_id       uuid not null references auth.users(id) on delete cascade,
  type          text not null check (type in ('recharge','generate','bonus','refund','referral')),
  points_delta  bigint not null,        -- 正数=增加 负数=减少
  amount_cents  integer not null default 0,   -- 真实金额(分)，充值用
  package_id    text,                    -- 充值套餐: starter/basic/pro/enterprise
  description   text,
  metadata      jsonb not null default '{}'::jsonb,
  created_at    timestamptz not null default now()
);
create index if not exists idx_pt_user_created on public.point_transactions (user_id, created_at desc);

-- ---------- 3. generated_images (用户生成的图片作品) ----------
create table if not exists public.generated_images (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  prompt        text not null,
  image_url     text not null,
  thumbnail_url text,
  quality       text not null check (quality in ('standard','hd','ultra')),
  aspect_ratio  text not null default '1:1',
  width         integer,
  height        integer,
  style         text,                           -- 风格标签
  cost_points   integer not null default 0,
  is_favorite   boolean not null default false,
  is_public     boolean not null default false,
  view_count    integer not null default 0,
  like_count    integer not null default 0,
  model_version text,                           -- AI 模型版本
  deleted_at    timestamptz,                    -- 软删除
  created_at    timestamptz not null default now()
);
create index if not exists idx_gi_user_created on public.generated_images (user_id, created_at desc) where deleted_at is null;
create index if not exists idx_gi_favorite on public.generated_images (user_id, is_favorite) where deleted_at is null;

-- ---------- 4. recharge_packages (充值套餐配置表) ----------
create table if not exists public.recharge_packages (
  id             text primary key,              -- starter/basic/pro/enterprise
  name           text not null,
  points         integer not null,
  bonus_points   integer not null default 0,
  price_cents    integer not null,              -- 人民币分
  currency       text not null default 'CNY',
  popular        boolean not null default false,
  sort_order     integer not null default 0,
  active         boolean not null default true,
  created_at     timestamptz not null default now()
);

-- ---------- 5. user_gallery_folders (作品集文件夹) ----------
create table if not exists public.user_gallery_folders (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  name        text not null,
  cover_url   text,
  item_count  integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ---------- 6. folder_images (文件夹-图片关联) ----------
create table if not exists public.folder_images (
  folder_id   uuid not null references public.user_gallery_folders(id) on delete cascade,
  image_id    uuid not null references public.generated_images(id) on delete cascade,
  added_at    timestamptz not null default now(),
  primary key (folder_id, image_id)
);

-- ---------- 7. user_preferences (用户偏好设置) ----------
create table if not exists public.user_preferences (
  user_id                uuid primary key references auth.users(id) on delete cascade,
  default_quality        text not null default 'standard' check (default_quality in ('standard','hd','ultra')),
  default_aspect_ratio   text not null default '1:1',
  auto_save_to_gallery   boolean not null default true,
  notify_on_complete     boolean not null default true,
  ui_language            text not null default 'zh-CN',
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);

-- =========================================================
-- Updated-at triggers
-- =========================================================
drop trigger if exists set_updated_at on public.user_points;
create trigger set_updated_at before update on public.user_points
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.user_gallery_folders;
create trigger set_updated_at before update on public.user_gallery_folders
  for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at on public.user_preferences;
create trigger set_updated_at before update on public.user_preferences
  for each row execute function public.set_updated_at();

-- =========================================================
-- Row Level Security (RLS)
-- =========================================================
alter table public.user_points              enable row level security;
alter table public.point_transactions       enable row level security;
alter table public.generated_images         enable row level security;
alter table public.recharge_packages        enable row level security;
alter table public.user_gallery_folders     enable row level security;
alter table public.folder_images            enable row level security;
alter table public.user_preferences         enable row level security;

-- user_points: user 只能看/改自己的
drop policy if exists points_self on public.user_points;
create policy points_self on public.user_points
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- point_transactions: 只能看自己的
drop policy if exists tx_self on public.point_transactions;
create policy tx_self on public.point_transactions
  for select using (user_id = auth.uid());

drop policy if exists tx_self_insert on public.point_transactions;
create policy tx_self_insert on public.point_transactions
  for insert with check (user_id = auth.uid());

-- generated_images: 看自己的 + 别人公开的；写自己的
drop policy if exists gi_owner_or_public on public.generated_images;
create policy gi_owner_or_public on public.generated_images
  for select using (user_id = auth.uid() or is_public = true);

drop policy if exists gi_owner_write on public.generated_images;
create policy gi_owner_write on public.generated_images
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- recharge_packages: 公开读
drop policy if exists packages_public on public.recharge_packages;
create policy packages_public on public.recharge_packages
  for select using (true);

-- folders: 自己的
drop policy if exists folders_self on public.user_gallery_folders;
create policy folders_self on public.user_gallery_folders
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- folder_images: 自己的
drop policy if exists fi_self on public.folder_images;
create policy fi_self on public.folder_images
  for all using (
    exists (select 1 from public.user_gallery_folders f where f.id = folder_images.folder_id and f.user_id = auth.uid())
  ) with check (
    exists (select 1 from public.user_gallery_folders f where f.id = folder_images.folder_id and f.user_id = auth.uid())
  );

-- user_preferences: 自己的
drop policy if exists prefs_self on public.user_preferences;
create policy prefs_self on public.user_preferences
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- =========================================================
-- Seed data
-- =========================================================

-- 充值套餐(与前端 POINTS_PACKAGES 保持一致)
insert into public.recharge_packages (id, name, points, bonus_points, price_cents, currency, popular, sort_order) values
  ('starter',    '入门包',    100,    0,     990,   'CNY', false, 1),
  ('basic',      '基础包',    500,    50,   3990,   'CNY', true,  2),
  ('pro',        '专业包',   2000,   300,  12990,   'CNY', false, 3),
  ('enterprise', '企业包',  10000,  2000,  49990,   'CNY', false, 4)
on conflict (id) do nothing;

-- 自动为现有 auth.users 创建积分账户 + 偏好(迁移时一次性执行)
insert into public.user_points (user_id, balance, total_earned)
select id, 100, 100
from auth.users
where id not in (select user_id from public.user_points)
on conflict do nothing;

-- 同步生成奖励流水(用于上面的初始 100 积分)
insert into public.point_transactions (user_id, type, points_delta, description)
select id, 'bonus', 100, '新用户注册奖励'
from auth.users
where id not in (select user_id from public.point_transactions limit 1)
on conflict do nothing;

insert into public.user_preferences (user_id)
select id from auth.users
where id not in (select user_id from public.user_preferences)
on conflict do nothing;

-- =========================================================
-- 自动为新注册用户建积分账户+偏好的 Trigger (推荐)
-- 每次有 auth.users 插入时，自动生成配套账户
-- =========================================================
create or replace function public.handle_new_user_image_setup()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.user_points (user_id, balance, total_earned)
  values (new.id, 100, 100)
  on conflict do nothing;

  insert into public.point_transactions (user_id, type, points_delta, description)
  values (new.id, 'bonus', 100, '新用户注册奖励')
  on conflict do nothing;

  insert into public.user_preferences (user_id)
  values (new.id)
  on conflict do nothing;

  return new;
end; $$;

drop trigger if exists on_auth_user_created_image_setup on auth.users;
create trigger on_auth_user_created_image_setup
  after insert on auth.users
  for each row execute function public.handle_new_user_image_setup();

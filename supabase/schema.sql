-- =========================================================
-- Aurora SaaS — Database schema migration
-- Target: Supabase project hnbkayonseorszuaxqiu
-- =========================================================

-- ---------- 1. profiles (extends auth.users) ----------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text,
  full_name   text,
  avatar_url  text,
  role        text not null default 'user' check (role in ('user','admin','owner')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ---------- 2. organizations (Settings → General) ----------
create table if not exists public.organizations (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  website     text,
  timezone    text not null default 'UTC',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ---------- 3. organization_members ----------
create table if not exists public.organization_members (
  id              uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id         uuid not null references auth.users(id) on delete cascade,
  role            text not null default 'member' check (role in ('owner','admin','member')),
  created_at      timestamptz not null default now(),
  unique (organization_id, user_id)
);

-- ---------- 4. user_activities (Admin Dashboard → Recent Activity) ----------
create table if not exists public.user_activities (
  id          bigint primary key generated always as identity,
  user_id     uuid references auth.users(id) on delete set null,
  user_email  text,
  action      text not null,
  metadata    jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now()
);
create index if not exists idx_user_activities_created_at on public.user_activities (created_at desc);

-- ---------- 5. subscriptions (Settings → Billing) ----------
create table if not exists public.subscriptions (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid references auth.users(id) on delete cascade,
  organization_id     uuid references public.organizations(id) on delete cascade,
  plan                text not null check (plan in ('starter','pro','enterprise')),
  status              text not null default 'active' check (status in ('active','trialing','canceled','expired')),
  amount_cents        integer not null default 0,
  currency            text not null default 'usd',
  interval            text check (interval in ('month','year')),
  current_period_end  timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- ---------- 6. api_keys (Settings → Security) ----------
create table if not exists public.api_keys (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  name          text not null,
  type          text not null check (type in ('publishable','secret')),
  key_prefix    text not null,
  key_hash      text not null,
  last_used_at  timestamptz,
  created_at    timestamptz not null default now(),
  revoked_at    timestamptz
);

-- ---------- 7. notification_preferences (Settings → Notifications) ----------
create table if not exists public.notification_preferences (
  user_id           uuid primary key references auth.users(id) on delete cascade,
  new_user_signups  boolean not null default true,
  weekly_reports    boolean not null default true,
  security_alerts   boolean not null default true,
  product_updates   boolean not null default false,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- ---------- 8. pricing_plans (Home → Pricing) ----------
create table if not exists public.pricing_plans (
  id          bigint primary key generated always as identity,
  name        text not null,
  price       text not null,
  period      text,
  description text,
  features    jsonb not null default '[]'::jsonb,
  cta         text,
  featured    boolean not null default false,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ---------- 9. testimonials (Home → Testimonials) ----------
create table if not exists public.testimonials (
  id          bigint primary key generated always as identity,
  quote       text not null,
  name        text not null,
  role        text,
  initials    text,
  avatar_url  text,
  sort_order  integer not null default 0,
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- ---------- 10. faqs (Home → FAQ) ----------
create table if not exists public.faqs (
  id          bigint primary key generated always as identity,
  question    text not null,
  answer      text not null,
  sort_order  integer not null default 0,
  published   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- ---------- 11. dashboard_metrics (Admin Dashboard → stat cards) ----------
create table if not exists public.dashboard_metrics (
  id            bigint primary key generated always as identity,
  metric_key    text not null unique,
  metric_value  text not null,
  change        text,
  change_type   text check (change_type in ('positive','negative','neutral')),
  updated_at    timestamptz not null default now()
);

-- =========================================================
-- Updated-at trigger function (shared)
-- =========================================================
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;

do $$
declare t text;
begin
  for t in select unnest(array['profiles','organizations','subscriptions','notification_preferences'])
  loop
    execute format('drop trigger if exists set_updated_at on public.%I;', t);
    execute format('create trigger set_updated_at before update on public.%I for each row execute function public.set_updated_at();', t);
  end loop;
end $$;

-- =========================================================
-- Row Level Security
-- =========================================================
alter table public.profiles                  enable row level security;
alter table public.organizations            enable row level security;
alter table public.organization_members     enable row level security;
alter table public.user_activities          enable row level security;
alter table public.subscriptions            enable row level security;
alter table public.api_keys                 enable row level security;
alter table public.notification_preferences enable row level security;
alter table public.pricing_plans            enable row level security;
alter table public.testimonials             enable row level security;
alter table public.faqs                      enable row level security;
alter table public.dashboard_metrics         enable row level security;

-- helper: is current user admin? (checks profiles.role OR organization_members.role)
create or replace function public.is_admin()
returns boolean language sql stable security definer as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin','owner')
  )
  or exists (
    select 1 from public.organization_members
    where user_id = auth.uid() and role in ('admin','owner')
  );
$$;

-- profiles: own row readable/writable; admins read all
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists profiles_insert on public.profiles;
create policy profiles_insert on public.profiles
  for insert with check (id = auth.uid());

drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- organizations: members can read, owners can modify
drop policy if exists orgs_select on public.organizations;
create policy orgs_select on public.organizations
  for select using (
    exists (select 1 from public.organization_members m
            where m.organization_id = organizations.id and m.user_id = auth.uid())
    or public.is_admin()
  );

drop policy if exists orgs_insert on public.organizations;
create policy orgs_insert on public.organizations
  for insert with check (public.is_admin() or auth.uid() is not null);

drop policy if exists orgs_update on public.organizations;
create policy orgs_update on public.organizations
  for update using (public.is_admin()) with check (public.is_admin());

-- organization_members: members of the org can read; admins/owners can manage
drop policy if exists members_select on public.organization_members;
create policy members_select on public.organization_members
  for select using (
    user_id = auth.uid()
    or exists (select 1 from public.organization_members m
               where m.organization_id = organization_members.organization_id
                 and m.user_id = auth.uid())
    or public.is_admin()
  );

drop policy if exists members_insert on public.organization_members;
create policy members_insert on public.organization_members
  for insert with check (
    user_id = auth.uid()
    or public.is_admin()
  );

-- user_activities: admins read all; users read own
drop policy if exists activities_select on public.user_activities;
create policy activities_select on public.user_activities
  for select using (user_id = auth.uid() or public.is_admin());

-- subscriptions: user reads own; admin reads all
drop policy if exists subs_select on public.subscriptions;
create policy subs_select on public.subscriptions
  for select using (user_id = auth.uid() or public.is_admin());

-- api_keys: only owner
drop policy if exists keys_select on public.api_keys;
create policy keys_select on public.api_keys
  for select using (user_id = auth.uid());

drop policy if exists keys_insert on public.api_keys;
create policy keys_insert on public.api_keys
  for insert with check (user_id = auth.uid());

drop policy if exists keys_update on public.api_keys;
create policy keys_update on public.api_keys
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists keys_delete on public.api_keys;
create policy keys_delete on public.api_keys
  for delete using (user_id = auth.uid());

-- notification_preferences: only owner
drop policy if exists prefs_select on public.notification_preferences;
create policy prefs_select on public.notification_preferences
  for select using (user_id = auth.uid());

drop policy if exists prefs_upsert on public.notification_preferences;
create policy prefs_upsert on public.notification_preferences
  for insert with check (user_id = auth.uid());

drop policy if exists prefs_update on public.notification_preferences;
create policy prefs_update on public.notification_preferences
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());

-- public content tables: read for everyone (anon ok)
drop policy if exists plans_public_read on public.pricing_plans;
create policy plans_public_read on public.pricing_plans for select using (true);

drop policy if exists testimonials_public_read on public.testimonials;
create policy testimonials_public_read on public.testimonials for select using (true);

drop policy if exists faqs_public_read on public.faqs;
create policy faqs_public_read on public.faqs for select using (true);

drop policy if exists metrics_public_read on public.dashboard_metrics;
create policy metrics_public_read on public.dashboard_metrics for select using (true);

-- admin-only writes for content
drop policy if exists plans_admin_write on public.pricing_plans;
create policy plans_admin_write on public.pricing_plans
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists testimonials_admin_write on public.testimonials;
create policy testimonials_admin_write on public.testimonials
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists faqs_admin_write on public.faqs;
create policy faqs_admin_write on public.faqs
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists metrics_admin_write on public.dashboard_metrics;
create policy metrics_admin_write on public.dashboard_metrics
  for all using (public.is_admin()) with check (public.is_admin());

-- =========================================================
-- Seed data
-- =========================================================

-- pricing_plans (mirrors home page pricing section)
insert into public.pricing_plans (name, price, period, description, features, cta, featured, sort_order) values
  ('Starter', '$0', 'forever', 'For small teams getting started.',
   '["3 dashboards","1M events / month","7-day data retention","Community support","1 data source"]'::jsonb,
   'Get started', false, 1),
  ('Pro', '$49', 'per month', 'For growing teams that need more.',
   '["Unlimited dashboards","50M events / month","90-day retention","AI-powered insights","10 data sources","Priority support"]'::jsonb,
   'Start free trial', true, 2),
  ('Enterprise', 'Custom', '', 'For organizations at scale.',
   '["Everything in Pro","Unlimited events","Unlimited retention","SSO / SAML","Dedicated infra","On-prem option"]'::jsonb,
   'Contact sales', false, 3)
on conflict do nothing;

-- testimonials (mirrors home page testimonials section)
insert into public.testimonials (quote, name, role, initials, sort_order) values
  ('We replaced three tools with Aurora. Our incident response time dropped from 30 minutes to under 5.',
   'Sarah Chen', 'VP Engineering, Flowbase', 'SC', 1),
  ('The AI insights caught a revenue dip 12 hours before our weekly review. That alone paid for the year.',
   'Marcus Webb', 'Head of Data, Nimbus', 'MW', 2),
  ('Aurora''s dashboards are the first thing my team opens every morning. It''s become our single source of truth.',
   'Priya Patel', 'CTO, Stratos', 'PP', 3)
on conflict do nothing;

-- faqs (mirrors FAQ.tsx)
insert into public.faqs (question, answer, sort_order) values
  ('How does Aurora handle data sources?',
   'Connect any source in minutes — PostgreSQL, MySQL, Kafka, S3, Snowflake, or any REST API. Aurora auto-detects schemas and starts streaming within seconds. No agents, no ETL pipelines to maintain.',
   1),
  ('What''s the difference between Pro and Enterprise?',
   'Pro includes unlimited dashboards, AI insights, and 90-day retention for teams up to 25 users. Enterprise adds SSO/SAML, audit logs, dedicated infrastructure, on-prem deployment options, and a dedicated success manager.',
   2),
  ('Is my data secure?',
   'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Aurora is SOC 2 Type II certified and GDPR compliant. We never store your raw data — only aggregated metrics and metadata.',
   3),
  ('Can I export my dashboards or embed them?',
   'Yes. Every dashboard can be shared via public link, embedded as an iframe, or exported as PDF/CSV. Pro and Enterprise plans support white-label embedding with custom domains.',
   4),
  ('How does the AI anomaly detection work?',
   'Aurora trains baseline models on your historical data and continuously evaluates new metrics in real time. When a metric deviates beyond a learned threshold, you get an alert with context — not just a number, but an explanation of what changed and why.',
   5),
  ('Do you offer a free trial?',
   'The Starter plan is free forever — no credit card required. Pro plans come with a 14-day free trial with full access to all features, including AI insights and unlimited dashboards.',
   6)
on conflict do nothing;

-- dashboard_metrics (mirrors Admin Dashboard stat cards)
insert into public.dashboard_metrics (metric_key, metric_value, change, change_type, updated_at) values
  ('total_users',      '1,234',    '+12%', 'positive', now()),
  ('active_sessions',  '89',       '+5%',  'positive', now()),
  ('revenue',           '$48,290', '+18%', 'positive', now()),
  ('uptime',            '99.99%',  '0%',    'neutral',  now())
on conflict (metric_key) do nothing;

-- auto-backfill profiles + notification_preferences for existing auth.users
insert into public.profiles (id, email, role)
select id, email, 'admin'
from auth.users
where id not in (select id from public.profiles)
on conflict do nothing;

insert into public.notification_preferences (user_id)
select id from auth.users
where id not in (select user_id from public.notification_preferences)
on conflict do nothing;

-- backfill some recent activities referencing existing users (best-effort)
insert into public.user_activities (user_email, action, created_at)
select 'Sarah Chen', 'Signed up',              now() - interval '2 minutes'
where not exists (select 1 from public.user_activities limit 1)
union all
select 'Marcus Webb', 'Upgraded to Pro',       now() - interval '15 minutes'
where not exists (select 1 from public.user_activities limit 1)
union all
select 'Priya Patel', 'Created dashboard',     now() - interval '1 hour'
where not exists (select 1 from public.user_activities limit 1)
union all
select 'Alex Kim', 'Connected data source',    now() - interval '2 hours'
where not exists (select 1 from public.user_activities limit 1)
union all
select 'Jordan Lee', 'Invited team member',     now() - interval '3 hours'
where not exists (select 1 from public.user_activities limit 1);

-- =========================================================
-- Aurora SaaS — Drop marketing/operational content tables
-- Keeps only user/business tables (auth.users, profiles,
-- notification_preferences, organizations, organization_members,
-- subscriptions, api_keys, user_activities).
-- =========================================================

-- Drop in dependency-safe order (children first)

-- 1. Marketing content (from schema_marketing.sql)
drop table if exists public.site_features          cascade;
drop table if exists public.site_logos            cascade;
drop table if exists public.site_stats             cascade;
drop table if exists public.site_product_sections cascade;
drop table if exists public.site_footer_links      cascade;
drop table if exists public.site_integrations     cascade;

-- 2. Operational content (from schema.sql)
drop table if exists public.pricing_plans          cascade;
drop table if exists public.testimonials          cascade;
drop table if exists public.faqs                  cascade;
drop table if exists public.dashboard_metrics     cascade;

-- 3. Helper function is_admin() — no longer needed by any policy
--     (only referenced site_* policies, which are gone).
--     Keep if you still want role-based checks elsewhere; drop if not.
drop function if exists public.is_admin()         cascade;

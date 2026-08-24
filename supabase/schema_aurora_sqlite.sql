-- =========================================================
-- Aurora AI Image Studio — SQLite 备用版数据库脚本
-- 适用场景：本地 Demo / 单机部署 / 无法使用 Supabase Postgres 时
-- 使用方式：sqlite3 aurora_local.db < schema_aurora_sqlite.sql
-- =========================================================

-- ---------- 1. users (用户表 - 简化版) ----------
CREATE TABLE IF NOT EXISTS users (
  id            TEXT PRIMARY KEY,          -- uuid 字符串
  email         TEXT UNIQUE,
  full_name     TEXT,
  avatar_url    TEXT,
  password_hash TEXT,                       -- 生产请用 bcrypt/argon2
  role          TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user','admin','owner')),
  created_at    INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at    INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- ---------- 2. user_points ----------
CREATE TABLE IF NOT EXISTS user_points (
  user_id         TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  balance         INTEGER NOT NULL DEFAULT 0 CHECK (balance >= 0),
  total_earned    INTEGER NOT NULL DEFAULT 0,
  total_spent     INTEGER NOT NULL DEFAULT 0,
  total_recharged INTEGER NOT NULL DEFAULT 0,
  created_at      INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at      INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- ---------- 3. point_transactions ----------
CREATE TABLE IF NOT EXISTS point_transactions (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type         TEXT NOT NULL CHECK (type IN ('recharge','generate','bonus','refund','referral')),
  points_delta INTEGER NOT NULL,
  amount_cents INTEGER NOT NULL DEFAULT 0,
  package_id   TEXT,
  description  TEXT,
  metadata     TEXT NOT NULL DEFAULT '{}',   -- JSON string
  created_at   INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_pt_user_created ON point_transactions(user_id, created_at DESC);

-- ---------- 4. generated_images ----------
CREATE TABLE IF NOT EXISTS generated_images (
  id            TEXT PRIMARY KEY,            -- uuid
  user_id       TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  prompt        TEXT NOT NULL,
  image_url     TEXT NOT NULL,
  thumbnail_url TEXT,
  quality       TEXT NOT NULL CHECK (quality IN ('standard','hd','ultra')),
  aspect_ratio  TEXT NOT NULL DEFAULT '1:1',
  width         INTEGER,
  height        INTEGER,
  style         TEXT,
  cost_points   INTEGER NOT NULL DEFAULT 0,
  is_favorite   INTEGER NOT NULL DEFAULT 0 CHECK (is_favorite IN (0,1)),
  is_public     INTEGER NOT NULL DEFAULT 0 CHECK (is_public IN (0,1)),
  view_count    INTEGER NOT NULL DEFAULT 0,
  like_count    INTEGER NOT NULL DEFAULT 0,
  model_version TEXT,
  deleted_at    INTEGER,
  created_at    INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_gi_user_created ON generated_images(user_id, created_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_gi_favorite    ON generated_images(user_id, is_favorite) WHERE deleted_at IS NULL;

-- ---------- 5. recharge_packages ----------
CREATE TABLE IF NOT EXISTS recharge_packages (
  id           TEXT PRIMARY KEY,
  name         TEXT NOT NULL,
  points       INTEGER NOT NULL,
  bonus_points INTEGER NOT NULL DEFAULT 0,
  price_cents  INTEGER NOT NULL,
  currency     TEXT NOT NULL DEFAULT 'CNY',
  popular      INTEGER NOT NULL DEFAULT 0,
  sort_order   INTEGER NOT NULL DEFAULT 0,
  active       INTEGER NOT NULL DEFAULT 1,
  created_at   INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- ---------- 6. user_gallery_folders ----------
CREATE TABLE IF NOT EXISTS user_gallery_folders (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL,
  cover_url  TEXT,
  item_count INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- ---------- 7. folder_images ----------
CREATE TABLE IF NOT EXISTS folder_images (
  folder_id TEXT NOT NULL REFERENCES user_gallery_folders(id) ON DELETE CASCADE,
  image_id  TEXT NOT NULL REFERENCES generated_images(id) ON DELETE CASCADE,
  added_at  INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY (folder_id, image_id)
);

-- ---------- 8. user_preferences ----------
CREATE TABLE IF NOT EXISTS user_preferences (
  user_id              TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  default_quality      TEXT NOT NULL DEFAULT 'standard' CHECK (default_quality IN ('standard','hd','ultra')),
  default_aspect_ratio TEXT NOT NULL DEFAULT '1:1',
  auto_save_to_gallery INTEGER NOT NULL DEFAULT 1,
  notify_on_complete   INTEGER NOT NULL DEFAULT 1,
  ui_language          TEXT NOT NULL DEFAULT 'zh-CN',
  created_at           INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at           INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- =========================================================
-- Seed data
-- =========================================================
INSERT OR IGNORE INTO recharge_packages (id, name, points, bonus_points, price_cents, currency, popular, sort_order)
VALUES
  ('starter',    '入门包',    100,    0,    990, 'CNY', 0, 1),
  ('basic',      '基础包',    500,   50,   3990, 'CNY', 1, 2),
  ('pro',        '专业包',   2000,  300,  12990, 'CNY', 0, 3),
  ('enterprise', '企业包',  10000, 2000,  49990, 'CNY', 0, 4);

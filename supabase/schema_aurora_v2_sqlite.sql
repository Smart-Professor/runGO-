-- =========================================================
-- Aurora AI Image Studio — V2 增强版 SQLite 脚本
-- 适用场景：本地 Demo / 单机部署 / 无 Supabase 时
-- 使用：sqlite3 aurora_local.db < schema_aurora_v2_sqlite.sql
-- =========================================================

PRAGMA foreign_keys = ON;

-- 1. users
CREATE TABLE IF NOT EXISTS users (
  id            TEXT PRIMARY KEY,
  email         TEXT UNIQUE,
  full_name     TEXT,
  avatar_url    TEXT,
  password_hash TEXT,
  role          TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user','admin','owner')),
  lifetime_rank TEXT NOT NULL DEFAULT 'rookie' CHECK (lifetime_rank IN ('rookie','creator','pro','master','legend')),
  created_at    INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at    INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- 2. user_points
CREATE TABLE IF NOT EXISTS user_points (
  user_id         TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  balance         INTEGER NOT NULL DEFAULT 0 CHECK (balance >= 0),
  total_earned    INTEGER NOT NULL DEFAULT 0,
  total_spent     INTEGER NOT NULL DEFAULT 0,
  total_recharged INTEGER NOT NULL DEFAULT 0,
  total_referrals INTEGER NOT NULL DEFAULT 0,
  lifetime_rank   TEXT NOT NULL DEFAULT 'rookie' CHECK (lifetime_rank IN ('rookie','creator','pro','master','legend')),
  created_at      INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at      INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- 3. point_transactions
CREATE TABLE IF NOT EXISTS point_transactions (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  related_user TEXT REFERENCES users(id) ON DELETE SET NULL,
  type         TEXT NOT NULL CHECK (type IN ('recharge','generate','bonus','refund','referral','like','share','daily')),
  points_delta INTEGER NOT NULL,
  amount_cents INTEGER NOT NULL DEFAULT 0,
  package_id   TEXT,
  image_id     TEXT REFERENCES generated_images(id) ON DELETE SET NULL,
  description  TEXT,
  metadata     TEXT NOT NULL DEFAULT '{}',
  created_at   INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_pt_user_created ON point_transactions(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pt_type         ON point_transactions(type);

-- 4. generated_images
CREATE TABLE IF NOT EXISTS generated_images (
  id             TEXT PRIMARY KEY,
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  prompt         TEXT NOT NULL,
  negative_prompt TEXT,
  image_url      TEXT NOT NULL,
  thumbnail_url  TEXT,
  storage_path   TEXT,
  quality        TEXT NOT NULL CHECK (quality IN ('standard','hd','ultra')),
  aspect_ratio   TEXT NOT NULL DEFAULT '1:1',
  width          INTEGER,
  height         INTEGER,
  file_size_kb   INTEGER,
  style          TEXT,
  seed           INTEGER,
  cost_points    INTEGER NOT NULL DEFAULT 0,
  is_favorite    INTEGER NOT NULL DEFAULT 0 CHECK (is_favorite IN (0,1)),
  is_public      INTEGER NOT NULL DEFAULT 0 CHECK (is_public IN (0,1)),
  is_nsfw        INTEGER NOT NULL DEFAULT 0 CHECK (is_nsfw IN (0,1)),
  view_count     INTEGER NOT NULL DEFAULT 0,
  like_count     INTEGER NOT NULL DEFAULT 0,
  comment_count  INTEGER NOT NULL DEFAULT 0,
  share_count    INTEGER NOT NULL DEFAULT 0,
  download_count INTEGER NOT NULL DEFAULT 0,
  model_name     TEXT DEFAULT 'seedream-v3',
  model_version  TEXT,
  generation_ms  INTEGER,
  deleted_at     INTEGER,
  created_at     INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at     INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_gi_user_created ON generated_images(user_id, created_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_gi_favorite    ON generated_images(user_id, is_favorite) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_gi_public      ON generated_images(is_public, created_at DESC) WHERE deleted_at IS NULL AND is_public = 1;
CREATE INDEX IF NOT EXISTS idx_gi_style       ON generated_images(style) WHERE deleted_at IS NULL;

-- 5. recharge_packages
CREATE TABLE IF NOT EXISTS recharge_packages (
  id           TEXT PRIMARY KEY,
  name         TEXT NOT NULL,
  subtitle     TEXT,
  points       INTEGER NOT NULL,
  bonus_points INTEGER NOT NULL DEFAULT 0,
  price_cents  INTEGER NOT NULL,
  currency     TEXT NOT NULL DEFAULT 'CNY',
  popular      INTEGER NOT NULL DEFAULT 0,
  badge_text   TEXT,
  sort_order   INTEGER NOT NULL DEFAULT 0,
  active       INTEGER NOT NULL DEFAULT 1,
  created_at   INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- 6. recharge_orders
CREATE TABLE IF NOT EXISTS recharge_orders (
  id             TEXT PRIMARY KEY,
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  package_id     TEXT NOT NULL REFERENCES recharge_packages(id),
  package_snapshot TEXT NOT NULL DEFAULT '{}',
  amount_cents   INTEGER NOT NULL,
  currency       TEXT NOT NULL DEFAULT 'CNY',
  status         TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','paid','failed','refunded','cancelled')),
  pay_provider   TEXT CHECK (pay_provider IN ('stripe','alipay','wechat','apple','google','other')),
  pay_order_id   TEXT,
  paid_at        INTEGER,
  refunded_at    INTEGER,
  failure_reason TEXT,
  metadata       TEXT NOT NULL DEFAULT '{}',
  created_at     INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at     INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_ro_user_created ON recharge_orders(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ro_status       ON recharge_orders(status);

-- 7. image_likes
CREATE TABLE IF NOT EXISTS image_likes (
  image_id   TEXT NOT NULL REFERENCES generated_images(id) ON DELETE CASCADE,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY (image_id, user_id)
);

-- 8. image_comments
CREATE TABLE IF NOT EXISTS image_comments (
  id         TEXT PRIMARY KEY,
  image_id   TEXT NOT NULL REFERENCES generated_images(id) ON DELETE CASCADE,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_id  TEXT REFERENCES image_comments(id) ON DELETE SET NULL,
  content    TEXT NOT NULL CHECK (length(content) BETWEEN 1 AND 500),
  is_deleted INTEGER NOT NULL DEFAULT 0 CHECK (is_deleted IN (0,1)),
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_ic_image_created ON image_comments(image_id, created_at DESC);

-- 9. shared_links
CREATE TABLE IF NOT EXISTS shared_links (
  id              TEXT PRIMARY KEY,
  short_code      TEXT UNIQUE,
  image_id        TEXT NOT NULL REFERENCES generated_images(id) ON DELETE CASCADE,
  owner_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  access_password TEXT,
  max_views       INTEGER,
  view_count      INTEGER NOT NULL DEFAULT 0,
  expires_at      INTEGER,
  is_active       INTEGER NOT NULL DEFAULT 1,
  created_at      INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_sl_shortcode ON shared_links(short_code);
CREATE INDEX IF NOT EXISTS idx_sl_owner     ON shared_links(owner_id, created_at DESC);

-- 10. referrals
CREATE TABLE IF NOT EXISTS referrals (
  referrer_id   TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  referee_id    TEXT UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reward_points INTEGER NOT NULL DEFAULT 0,
  status        TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','completed','cancelled')),
  completed_at  INTEGER,
  created_at    INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_ref_referrer ON referrals(referrer_id, created_at DESC);

-- 11. daily_checkins
CREATE TABLE IF NOT EXISTS daily_checkins (
  user_id       TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  checkin_date  TEXT NOT NULL,   -- YYYY-MM-DD
  reward_points INTEGER NOT NULL DEFAULT 5,
  streak_days   INTEGER NOT NULL DEFAULT 1,
  created_at    INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY (user_id, checkin_date)
);

-- 12. user_api_keys
CREATE TABLE IF NOT EXISTS user_api_keys (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  key_name        TEXT NOT NULL,
  key_prefix      TEXT NOT NULL,
  key_hash        TEXT NOT NULL UNIQUE,
  permissions     TEXT NOT NULL DEFAULT '["image.generate"]',
  monthly_quota   INTEGER,
  used_this_month INTEGER NOT NULL DEFAULT 0,
  last_used_at    INTEGER,
  is_active       INTEGER NOT NULL DEFAULT 1,
  expires_at      INTEGER,
  created_at      INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_uak_user ON user_api_keys(user_id, created_at DESC);

-- 13. folders + folder_images
CREATE TABLE IF NOT EXISTS user_gallery_folders (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL CHECK (length(name) BETWEEN 1 AND 50),
  cover_url  TEXT,
  item_count INTEGER NOT NULL DEFAULT 0,
  is_default INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

CREATE TABLE IF NOT EXISTS folder_images (
  folder_id TEXT NOT NULL REFERENCES user_gallery_folders(id) ON DELETE CASCADE,
  image_id  TEXT NOT NULL REFERENCES generated_images(id) ON DELETE CASCADE,
  added_at  INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  PRIMARY KEY (folder_id, image_id)
);

-- 14. user_preferences
CREATE TABLE IF NOT EXISTS user_preferences (
  user_id              TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  default_quality      TEXT NOT NULL DEFAULT 'standard' CHECK (default_quality IN ('standard','hd','ultra')),
  default_aspect_ratio TEXT NOT NULL DEFAULT '1:1',
  default_style        TEXT DEFAULT 'auto',
  auto_save_to_gallery INTEGER NOT NULL DEFAULT 1,
  notify_on_complete   INTEGER NOT NULL DEFAULT 1,
  auto_public_new      INTEGER NOT NULL DEFAULT 0,
  watermark_enabled    INTEGER NOT NULL DEFAULT 0,
  watermark_text       TEXT DEFAULT 'Aurora AI',
  ui_language          TEXT NOT NULL DEFAULT 'zh-CN',
  ui_theme             TEXT NOT NULL DEFAULT 'light' CHECK (ui_theme IN ('light','dark','auto')),
  email_promotions     INTEGER NOT NULL DEFAULT 1,
  referral_code        TEXT UNIQUE,
  created_at           INTEGER NOT NULL DEFAULT (strftime('%s','now')),
  updated_at           INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);

-- 15. audit_logs
CREATE TABLE IF NOT EXISTS audit_logs (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    TEXT REFERENCES users(id) ON DELETE SET NULL,
  action     TEXT NOT NULL,
  target     TEXT,
  ip_address TEXT,
  user_agent TEXT,
  metadata   TEXT NOT NULL DEFAULT '{}',
  created_at INTEGER NOT NULL DEFAULT (strftime('%s','now'))
);
CREATE INDEX IF NOT EXISTS idx_audit_user_created ON audit_logs(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_action       ON audit_logs(action, created_at DESC);

-- =========================================================
-- Seed Data
-- =========================================================
INSERT OR IGNORE INTO recharge_packages (id, name, subtitle, points, bonus_points, price_cents, currency, popular, badge_text, sort_order)
VALUES
  ('starter',    '入门包',   '轻度体验 · 新手首选',        100,    0,    990, 'CNY', 0, NULL,       1),
  ('basic',      '基础包',   '日常创作 · 高性价比',        500,   50,   3990, 'CNY', 1, '最受欢迎', 2),
  ('pro',        '专业包',   '高频创作 · 立省 ¥150',      2000,  300,  12990, 'CNY', 0, '限时+15%', 3),
  ('enterprise', '企业包',   '团队/商用 · 最优单价',     10000, 2000,  49990, 'CNY', 0, '最佳单价', 4);

-- =========================================================
-- Triggers — SQLite 版本用 AFTER 触发器模拟 updated_at / 计数同步
-- =========================================================

-- updated_at: user_points
CREATE TRIGGER IF NOT EXISTS trg_up_updated_at
AFTER UPDATE ON user_points FOR EACH ROW
BEGIN UPDATE user_points SET updated_at = strftime('%s','now') WHERE user_id = old.user_id; END;

-- updated_at: generated_images
CREATE TRIGGER IF NOT EXISTS trg_gi_updated_at
AFTER UPDATE ON generated_images FOR EACH ROW
BEGIN UPDATE generated_images SET updated_at = strftime('%s','now') WHERE id = old.id; END;

-- updated_at: user_preferences
CREATE TRIGGER IF NOT EXISTS trg_prefs_updated_at
AFTER UPDATE ON user_preferences FOR EACH ROW
BEGIN UPDATE user_preferences SET updated_at = strftime('%s','now') WHERE user_id = old.user_id; END;

-- like_count 同步
CREATE TRIGGER IF NOT EXISTS trg_like_inc
AFTER INSERT ON image_likes FOR EACH ROW
BEGIN UPDATE generated_images SET like_count = like_count + 1 WHERE id = new.image_id; END;

CREATE TRIGGER IF NOT EXISTS trg_like_dec
AFTER DELETE ON image_likes FOR EACH ROW
BEGIN UPDATE generated_images SET like_count = CASE WHEN like_count > 0 THEN like_count - 1 ELSE 0 END WHERE id = old.image_id; END;

-- comment_count 同步
CREATE TRIGGER IF NOT EXISTS trg_comment_inc
AFTER INSERT ON image_comments FOR EACH ROW WHEN new.is_deleted = 0
BEGIN UPDATE generated_images SET comment_count = comment_count + 1 WHERE id = new.image_id; END;

CREATE TRIGGER IF NOT EXISTS trg_comment_toggle
AFTER UPDATE ON image_comments FOR EACH ROW WHEN old.is_deleted <> new.is_deleted
BEGIN
  UPDATE generated_images SET comment_count = CASE WHEN new.is_deleted = 1 THEN CASE WHEN comment_count > 0 THEN comment_count - 1 ELSE 0 END ELSE comment_count + 1 END
  WHERE id = new.image_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_comment_del
AFTER DELETE ON image_comments FOR EACH ROW WHEN old.is_deleted = 0
BEGIN UPDATE generated_images SET comment_count = CASE WHEN comment_count > 0 THEN comment_count - 1 ELSE 0 END WHERE id = old.image_id; END;

-- folder item_count 同步
CREATE TRIGGER IF NOT EXISTS trg_folder_item_inc
AFTER INSERT ON folder_images FOR EACH ROW
BEGIN UPDATE user_gallery_folders SET item_count = item_count + 1 WHERE id = new.folder_id; END;

CREATE TRIGGER IF NOT EXISTS trg_folder_item_dec
AFTER DELETE ON folder_images FOR EACH ROW
BEGIN UPDATE user_gallery_folders SET item_count = CASE WHEN item_count > 0 THEN item_count - 1 ELSE 0 END WHERE id = old.folder_id; END;

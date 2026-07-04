-- Irish Tools — Daily Quiz leaderboard schema (Cloudflare D1 / SQLite).
-- Apply with:  wrangler d1 execute irish-tools-quiz --file=./schema.sql --remote

CREATE TABLE IF NOT EXISTS users (
  id                 TEXT PRIMARY KEY,   -- our player id (uuid)
  google_sub         TEXT UNIQUE,        -- Google subject id (stable per Google account)
  display_name       TEXT,               -- chosen public nickname
  display_name_lower TEXT UNIQUE,        -- case-insensitive uniqueness guard
  county             TEXT,               -- county affiliation (flair + county rankings)
  created_at         INTEGER NOT NULL
);
-- Upgrading an existing database:
--   wrangler d1 execute irish-tools-quiz --remote --command "ALTER TABLE users ADD COLUMN county TEXT"

-- One row per user per day: holds the start time (for server-side timing) and,
-- once submitted, the score. PRIMARY KEY enforces one game per user per day.
CREATE TABLE IF NOT EXISTS games (
  user_id      TEXT NOT NULL,
  date         TEXT NOT NULL,            -- YYYY-MM-DD (Europe/Dublin)
  started_at   INTEGER NOT NULL,
  submitted_at INTEGER,                  -- NULL until the user submits
  correct      INTEGER,
  time_ms      INTEGER,
  answers      TEXT,                     -- JSON of chosen option indexes (for review)
  qids         TEXT,                     -- JSON of the question indexes for this game (frozen at start)
  PRIMARY KEY (user_id, date)
);

-- Upgrading an existing database (adds qids to the games table). Safe to run
-- once; ignore the "duplicate column" error if it's already there:
--   wrangler d1 execute irish-tools-quiz --remote --command "ALTER TABLE games ADD COLUMN qids TEXT"

CREATE INDEX IF NOT EXISTS idx_games_date ON games (date);
CREATE INDEX IF NOT EXISTS idx_games_submitted ON games (date, submitted_at);

-- Private leaderboards ("leagues"): a named board with a shareable code that
-- friends/family join. Safe to run on an existing database (IF NOT EXISTS).
CREATE TABLE IF NOT EXISTS leagues (
  code       TEXT PRIMARY KEY,          -- short shareable code (e.g. K7Q2MNP)
  name       TEXT NOT NULL,
  owner_id   TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS league_members (
  code      TEXT NOT NULL,
  user_id   TEXT NOT NULL,
  joined_at INTEGER NOT NULL,
  PRIMARY KEY (code, user_id)
);

CREATE INDEX IF NOT EXISTS idx_league_members_user ON league_members (user_id);

-- County Scéal boards: per-county posts and threaded comments.
CREATE TABLE IF NOT EXISTS posts (
  id         TEXT PRIMARY KEY,
  county     TEXT NOT NULL,
  user_id    TEXT NOT NULL,
  title      TEXT NOT NULL,
  body       TEXT,
  comments   INTEGER NOT NULL DEFAULT 0,
  deleted    INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_posts_county ON posts (county, deleted, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_user ON posts (user_id, created_at);

CREATE TABLE IF NOT EXISTS comments (
  id         TEXT PRIMARY KEY,
  post_id    TEXT NOT NULL,
  parent_id  TEXT,                       -- one-level replies
  user_id    TEXT NOT NULL,
  body       TEXT NOT NULL,
  deleted    INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_comments_post ON comments (post_id, deleted, created_at);
CREATE INDEX IF NOT EXISTS idx_comments_user ON comments (user_id, created_at);

-- Reports of posts/comments (one per user per item; 5+ auto-hides pending review).
-- Review queue:
--   wrangler d1 execute irish-tools-quiz --remote --command "SELECT target_type, target_id, COUNT(*) n FROM content_reports GROUP BY 1,2 ORDER BY n DESC LIMIT 30"
CREATE TABLE IF NOT EXISTS content_reports (
  target_type TEXT NOT NULL,
  target_id   TEXT NOT NULL,
  user_id     TEXT NOT NULL,
  created_at  INTEGER NOT NULL,
  PRIMARY KEY (target_type, target_id, user_id)
);

-- Player reports of dodgy questions (one per user per question). Review the
-- worst offenders with:
--   wrangler d1 execute irish-tools-quiz --remote --command "SELECT qid, q_text, COUNT(*) AS reports FROM reports GROUP BY qid ORDER BY reports DESC LIMIT 30"
-- Small per-user synced blobs: visited counties ('counties') and the trip
-- planner itinerary ('trip').
CREATE TABLE IF NOT EXISTS user_data (
  user_id    TEXT NOT NULL,
  key        TEXT NOT NULL,
  value      TEXT,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, key)
);

-- Read-only shared trip snapshots (irishtools.ie/planner/?trip=CODE).
-- One per user; re-sharing refreshes the snapshot under the same code.
CREATE TABLE IF NOT EXISTS shared_trips (
  code       TEXT PRIMARY KEY,
  user_id    TEXT UNIQUE NOT NULL,
  trip       TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS reports (
  qid        INTEGER NOT NULL,
  user_id    TEXT NOT NULL,
  q_text     TEXT,
  reason     TEXT,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (qid, user_id)
);

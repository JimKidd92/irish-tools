// Irish Tools — Daily Quiz + Leaderboard Worker (Cloudflare Workers + D1).
//
// Server-authoritative: the question bank (with answers) lives here, never in
// the browser. The client fetches the day's 10 questions WITHOUT answers, the
// Worker scores the submission and times it server-side, and stores results for
// the leaderboard. Identity is "Sign in with Google" — Google handles the
// password/security; we verify the ID token, then issue our own session token.
//
// Endpoints:
//   POST /auth/google   { credential }            -> verify Google token, upsert user, session token
//   POST /auth/name      { name }      (auth)      -> set/claim a public nickname
//   GET  /quiz/today                    (auth)      -> today's 10 questions (no answers) or your result
//   POST /quiz/submit    { answers }    (auth)      -> score + time + rank + corrections
//   GET  /leaderboard?period=daily|weekly|monthly|all (auth optional) -> rankings (+ your row)
//
// Setup + deploy: see worker/quiz/README.md.

import { QUESTIONS } from './questions.js'

const DAILY = 10
const SESSION_DAYS = 60

const ALLOW_ORIGINS = new Set([
  'https://irishtools.ie',
  'https://www.irishtools.ie',
  'http://localhost:5173',
  'http://localhost:4173',
])

function cors(origin) {
  const allow = ALLOW_ORIGINS.has(origin) ? origin : 'https://irishtools.ie'
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', ...cors(origin) },
  })
}

// ---------- base64url ----------
function b64urlToBytes(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/')
  s += '='.repeat((4 - (s.length % 4)) % 4)
  const bin = atob(s)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}
function bytesToB64url(bytes) {
  let bin = ''
  for (const b of bytes) bin += String.fromCharCode(b)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
const b64urlToString = (s) => new TextDecoder().decode(b64urlToBytes(s))
const stringToB64url = (s) => bytesToB64url(new TextEncoder().encode(s))

// ---------- Google ID token verification (RS256 via JWKS) ----------
let JWKS = null
let JWKS_EXP = 0
async function getJwks() {
  const now = Date.now()
  if (JWKS && now < JWKS_EXP) return JWKS
  const r = await fetch('https://www.googleapis.com/oauth2/v3/certs')
  const data = await r.json()
  JWKS = {}
  for (const k of data.keys) JWKS[k.kid] = k
  JWKS_EXP = now + 3600 * 1000
  return JWKS
}

async function verifyGoogleToken(token, clientId) {
  const parts = token.split('.')
  if (parts.length !== 3) throw new Error('malformed token')
  const header = JSON.parse(b64urlToString(parts[0]))
  const payload = JSON.parse(b64urlToString(parts[1]))
  const jwks = await getJwks()
  const jwk = jwks[header.kid]
  if (!jwk) throw new Error('unknown signing key')
  const key = await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['verify'],
  )
  const ok = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    key,
    b64urlToBytes(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
  )
  if (!ok) throw new Error('bad signature')
  if (payload.iss !== 'https://accounts.google.com' && payload.iss !== 'accounts.google.com')
    throw new Error('bad issuer')
  if (payload.aud !== clientId) throw new Error('bad audience')
  if (payload.exp * 1000 < Date.now()) throw new Error('expired')
  return payload
}

// ---------- our session tokens (HS256) ----------
async function hmacKey(secret) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}
async function signSession(payload, secret) {
  const data = `${stringToB64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))}.${stringToB64url(JSON.stringify(payload))}`
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', await hmacKey(secret), new TextEncoder().encode(data)))
  return `${data}.${bytesToB64url(sig)}`
}
async function verifySession(token, secret) {
  const parts = token.split('.')
  if (parts.length !== 3) return null
  const data = `${parts[0]}.${parts[1]}`
  const ok = await crypto.subtle.verify('HMAC', await hmacKey(secret), b64urlToBytes(parts[2]), new TextEncoder().encode(data))
  if (!ok) return null
  const payload = JSON.parse(b64urlToString(parts[1]))
  if (payload.exp && payload.exp * 1000 < Date.now()) return null
  return payload
}
async function requireAuth(req, secret) {
  const m = (req.headers.get('Authorization') || '').match(/^Bearer (.+)$/)
  if (!m) return null
  return verifySession(m[1], secret)
}
const newSession = (uid, name, secret) =>
  signSession({ uid, name, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * SESSION_DAYS }, secret)

// ---------- daily question selection (same 10 for everyone, cycling) ----------
function dublinDate(d = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Dublin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d)
}
function dayNumber(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number)
  return Math.floor(Date.UTC(y, m - 1, d) / 86400000)
}
function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function fixedOrder(n) {
  const arr = [...Array(n).keys()]
  const rnd = mulberry32(987654321)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
const ORDER = fixedOrder(QUESTIONS.length)
function todaysQuestionIdx(dateStr) {
  const dn = dayNumber(dateStr)
  const out = []
  for (let i = 0; i < DAILY; i++) out.push(ORDER[(dn * DAILY + i) % QUESTIONS.length])
  return out
}
const publicQuestions = (idxs) => idxs.map((i) => ({ id: i, q: QUESTIONS[i].q, options: QUESTIONS[i].options }))
const corrections = (idxs, answers) =>
  idxs.map((qi, pos) => ({
    id: qi,
    q: QUESTIONS[qi].q,
    options: QUESTIONS[qi].options,
    correct: QUESTIONS[qi].answer,
    your: answers[pos] != null ? answers[pos] : null,
  }))

// ---------- nickname validation ----------
const BAD = ['fuck', 'shit', 'cunt', 'nigger', 'faggot', 'bitch', 'bastard', 'wank', 'rape', 'nazi', 'hitler', 'admin', 'irishtools']
function cleanName(name) {
  const n = (name || '').trim().replace(/\s+/g, ' ')
  if (n.length < 2 || n.length > 20) return null
  if (!/^[\p{L}0-9 _.'-]+$/u.test(n)) return null
  const low = n.toLowerCase()
  if (BAD.some((w) => low.includes(w))) return null
  return n
}

// ---------- handlers ----------
export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || ''
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors(origin) })
    if (!env.SESSION_SECRET) {
      return json(
        { error: 'Server not configured: SESSION_SECRET is missing. Run: wrangler secret put SESSION_SECRET' },
        500,
        origin,
      )
    }
    const url = new URL(req.url)
    try {
      const route = `${req.method} ${url.pathname}`
      if (route === 'POST /auth/google') return await authGoogle(req, env, origin)
      if (route === 'POST /auth/name') return await authName(req, env, origin)
      if (route === 'POST /auth/county') return await authCounty(req, env, origin)
      if (route === 'GET /me') return await meProfile(req, env, origin)
      if (route === 'GET /leaderboard/counties') return await countyStandings(req, env, origin)
      if (route === 'GET /sceal') return await scealList(req, env, origin)
      if (route === 'GET /sceal/post') return await scealThread(req, env, origin)
      if (route === 'POST /sceal/post') return await scealCreate(req, env, origin)
      if (route === 'POST /sceal/comment') return await scealComment(req, env, origin)
      if (route === 'POST /sceal/report') return await scealReportContent(req, env, origin)
      if (route === 'POST /sceal/delete') return await scealDelete(req, env, origin)
      if (route === 'GET /quiz/today') return await quizToday(req, env, origin)
      if (route === 'POST /quiz/submit') return await quizSubmit(req, env, origin)
      if (route === 'POST /quiz/report') return await quizReport(req, env, origin)
      if (route === 'GET /quiz/stats') return await quizStats(req, env, origin)
      if (route === 'GET /me/data') return await meGetData(req, env, origin)
      if (route === 'PUT /me/data') return await mePutData(req, env, origin)
      if (route === 'POST /trip/share') return await tripShare(req, env, origin)
      if (route === 'GET /trip/shared') return await tripShared(req, env, origin)
      if (route === 'GET /leaderboard') return await leaderboard(req, env, origin)
      if (route === 'POST /league/create') return await leagueCreate(req, env, origin)
      if (route === 'POST /league/join') return await leagueJoin(req, env, origin)
      if (route === 'GET /league/mine') return await leagueMine(req, env, origin)
      if (route === 'GET /league/info') return await leagueInfo(req, env, origin)
      return json({ error: 'not found' }, 404, origin)
    } catch (e) {
      return json({ error: String((e && e.message) || e) }, 500, origin)
    }
  },
}

async function authGoogle(req, env, origin) {
  const { credential } = await req.json()
  if (!credential) return json({ error: 'missing credential' }, 400, origin)
  let g
  try {
    g = await verifyGoogleToken(credential, env.GOOGLE_CLIENT_ID)
  } catch {
    return json({ error: 'invalid google token' }, 401, origin)
  }
  let row = await env.DB.prepare('SELECT id, display_name, county FROM users WHERE google_sub = ?').bind(g.sub).first()
  if (!row) {
    const id = crypto.randomUUID()
    await env.DB.prepare('INSERT INTO users (id, google_sub, created_at) VALUES (?, ?, ?)')
      .bind(id, g.sub, Date.now())
      .run()
    row = { id, display_name: null, county: null }
  }
  const token = await newSession(row.id, row.display_name, env.SESSION_SECRET)
  return json(
    {
      token,
      user: { name: row.display_name, county: row.county || null, needsName: !row.display_name },
      suggestedName: g.given_name || (g.name || '').split(' ')[0] || '',
    },
    200,
    origin,
  )
}

// The 32 traditional counties — the only valid affiliations and Scéal boards.
const COUNTY_NAMES = [
  'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 'Down', 'Dublin',
  'Fermanagh', 'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim', 'Limerick', 'Longford',
  'Louth', 'Mayo', 'Meath', 'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone',
  'Waterford', 'Westmeath', 'Wexford', 'Wicklow',
]

async function authCounty(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const { county } = await req.json()
  if (!COUNTY_NAMES.includes(county)) return json({ error: 'Pick one of the 32 counties.' }, 400, origin)
  await env.DB.prepare('UPDATE users SET county = ? WHERE id = ?').bind(county, session.uid).run()
  const row = await env.DB.prepare('SELECT display_name, county FROM users WHERE id = ?').bind(session.uid).first()
  return json({ user: { name: row.display_name, county: row.county, needsName: !row.display_name } }, 200, origin)
}

async function meProfile(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const row = await env.DB.prepare('SELECT display_name, county FROM users WHERE id = ?').bind(session.uid).first()
  if (!row) return json({ error: 'unauthorized' }, 401, origin)
  return json({ user: { name: row.display_name, county: row.county || null, needsName: !row.display_name } }, 200, origin)
}

async function authName(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const { name } = await req.json()
  const clean = cleanName(name)
  if (!clean) return json({ error: 'Pick a name 2–20 characters — letters and numbers, nothing rude.' }, 400, origin)
  const taken = await env.DB.prepare('SELECT id FROM users WHERE display_name_lower = ? AND id <> ?')
    .bind(clean.toLowerCase(), session.uid)
    .first()
  if (taken) return json({ error: 'That name is taken — try another.' }, 409, origin)
  await env.DB.prepare('UPDATE users SET display_name = ?, display_name_lower = ? WHERE id = ?')
    .bind(clean, clean.toLowerCase(), session.uid)
    .run()
  const token = await newSession(session.uid, clean, env.SESSION_SECRET)
  return json({ token, user: { name: clean, needsName: false } }, 200, origin)
}

async function quizToday(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  if (!session.name) return json({ error: 'name required', needsName: true }, 403, origin)
  const date = dublinDate()
  const game = await env.DB.prepare('SELECT * FROM games WHERE user_id = ? AND date = ?').bind(session.uid, date).first()
  // Use the question set frozen when the game started so growing the bank later
  // never re-maps an existing game (falls back to date selection for old rows).
  const gameIdxs = (g) => (g && g.qids ? JSON.parse(g.qids) : todaysQuestionIdx(date))
  if (game && game.submitted_at) {
    const answers = game.answers ? JSON.parse(game.answers) : []
    const rank = await dailyRank(env, date, game.correct, game.time_ms)
    return json(
      { date, played: true, total: DAILY, result: { correct: game.correct, time_ms: game.time_ms, rank }, corrections: corrections(gameIdxs(game), answers) },
      200,
      origin,
    )
  }
  let idxs
  if (!game) {
    idxs = todaysQuestionIdx(date)
    await env.DB.prepare('INSERT INTO games (user_id, date, started_at, qids) VALUES (?, ?, ?, ?)')
      .bind(session.uid, date, Date.now(), JSON.stringify(idxs))
      .run()
  } else {
    idxs = gameIdxs(game)
  }
  return json({ date, played: false, total: DAILY, questions: publicQuestions(idxs) }, 200, origin)
}

async function quizSubmit(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  if (!session.name) return json({ error: 'name required', needsName: true }, 403, origin)
  const { answers } = await req.json()
  if (!Array.isArray(answers)) return json({ error: 'bad answers' }, 400, origin)
  const date = dublinDate()
  const game = await env.DB.prepare('SELECT * FROM games WHERE user_id = ? AND date = ?').bind(session.uid, date).first()
  if (!game) return json({ error: 'no game in progress' }, 400, origin)
  if (game.submitted_at) return json({ error: 'already played today' }, 409, origin)
  const idxs = game.qids ? JSON.parse(game.qids) : todaysQuestionIdx(date)
  let correct = 0
  for (let i = 0; i < DAILY; i++) if (answers[i] === QUESTIONS[idxs[i]].answer) correct++
  const now = Date.now()
  let time_ms = now - game.started_at
  if (time_ms < 0) time_ms = 0
  if (time_ms > 3600000) time_ms = 3600000
  const saved = answers.slice(0, DAILY).map((a) => (a == null ? null : a))
  await env.DB.prepare('UPDATE games SET submitted_at = ?, correct = ?, time_ms = ?, answers = ? WHERE user_id = ? AND date = ?')
    .bind(now, correct, time_ms, JSON.stringify(saved), session.uid, date)
    .run()
  const rank = await dailyRank(env, date, correct, time_ms)
  return json({ correct, total: DAILY, time_ms, rank, corrections: corrections(idxs, saved) }, 200, origin)
}

async function quizReport(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const { id, reason } = await req.json()
  if (!Number.isInteger(id) || id < 0 || id >= QUESTIONS.length) return json({ error: 'bad question id' }, 400, origin)
  const cleanReason = String(reason || '').slice(0, 300)
  await env.DB.prepare('INSERT OR REPLACE INTO reports (qid, user_id, q_text, reason, created_at) VALUES (?, ?, ?, ?, ?)')
    .bind(id, session.uid, QUESTIONS[id].q, cleanReason, Date.now())
    .run()
  return json({ ok: true }, 200, origin)
}

/* ---------- Per-user synced data (visited counties, trip) ---------- */
const DATA_KEYS = new Set(['counties', 'trip'])
const DATA_MAX_BYTES = 40000

async function meGetData(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const key = new URL(req.url).searchParams.get('key')
  if (!DATA_KEYS.has(key)) return json({ error: 'bad key' }, 400, origin)
  const row = await env.DB.prepare('SELECT value, updated_at FROM user_data WHERE user_id = ? AND key = ?')
    .bind(session.uid, key)
    .first()
  return json({ key, value: row ? JSON.parse(row.value) : null, updated_at: row ? row.updated_at : null }, 200, origin)
}

async function mePutData(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const { key, value } = await req.json()
  if (!DATA_KEYS.has(key)) return json({ error: 'bad key' }, 400, origin)
  const raw = JSON.stringify(value ?? null)
  if (raw.length > DATA_MAX_BYTES) return json({ error: 'too large' }, 413, origin)
  const now = Date.now()
  await env.DB.prepare(
    'INSERT INTO user_data (user_id, key, value, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, key) DO UPDATE SET value = ?, updated_at = ?',
  )
    .bind(session.uid, key, raw, now, raw, now)
    .run()
  return json({ ok: true, updated_at: now }, 200, origin)
}

/* ---------- Shareable read-only trip snapshots ---------- */
async function tripShare(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const { trip } = await req.json()
  const raw = JSON.stringify(trip ?? null)
  if (!trip || raw.length > DATA_MAX_BYTES) return json({ error: 'bad trip' }, 400, origin)
  // One share per user: refresh the snapshot, keep the same code if it exists.
  const existing = await env.DB.prepare('SELECT code FROM shared_trips WHERE user_id = ?').bind(session.uid).first()
  const code = existing ? existing.code : newLeagueCode()
  await env.DB.prepare(
    'INSERT INTO shared_trips (code, user_id, trip, created_at) VALUES (?, ?, ?, ?) ON CONFLICT(code) DO UPDATE SET trip = ?, created_at = ?',
  )
    .bind(code, session.uid, raw, Date.now(), raw, Date.now())
    .run()
  return json({ code }, 200, origin)
}

async function tripShared(req, env, origin) {
  const code = (new URL(req.url).searchParams.get('code') || '').trim().toUpperCase()
  const row = await env.DB.prepare('SELECT trip FROM shared_trips WHERE code = ?').bind(code).first()
  if (!row) return json({ error: 'not found' }, 404, origin)
  return json({ code, trip: JSON.parse(row.trip) }, 200, origin)
}

/* ---------- Personal quiz stats ---------- */
async function quizStats(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const rows = await env.DB.prepare(
    'SELECT date, correct, time_ms FROM games WHERE user_id = ? AND submitted_at IS NOT NULL ORDER BY date ASC',
  )
    .bind(session.uid)
    .all()
  const games = rows.results || []
  const plays = games.length
  const totalCorrect = games.reduce((s, g) => s + (g.correct || 0), 0)
  let best = null
  for (const g of games) {
    if (!best || g.correct > best.correct || (g.correct === best.correct && g.time_ms < best.time_ms)) {
      best = { date: g.date, correct: g.correct, time_ms: g.time_ms }
    }
  }
  // Streaks from consecutive dates.
  let longest = 0
  let current = 0
  let prev = null
  for (const g of games) {
    if (prev) {
      const d = new Date(prev + 'T00:00:00Z')
      d.setUTCDate(d.getUTCDate() + 1)
      current = g.date === d.toISOString().slice(0, 10) ? current + 1 : 1
    } else {
      current = 1
    }
    if (current > longest) longest = current
    prev = g.date
  }
  // Current streak only counts if the last game was today or yesterday.
  const today = dublinDate()
  const yest = new Date(Date.now() - 86400000)
  const yestStr = dublinDate(yest)
  if (prev !== today && prev !== yestStr) current = 0
  const last7 = games.slice(-7).map((g) => ({ date: g.date, correct: g.correct }))
  return json(
    { plays, totalCorrect, accuracy: plays ? totalCorrect / (plays * DAILY) : 0, best, currentStreak: current, longestStreak: longest, last7 },
    200,
    origin,
  )
}

async function dailyRank(env, date, correct, time_ms) {
  const r = await env.DB.prepare(
    'SELECT COUNT(*) AS c FROM games WHERE date = ? AND submitted_at IS NOT NULL AND (correct > ? OR (correct = ? AND time_ms < ?))',
  )
    .bind(date, correct, correct, time_ms)
    .first()
  return (r.c || 0) + 1
}

function periodStart(period, date) {
  const [y, m, d] = date.split('-').map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d))
  if (period === 'weekly') dt.setUTCDate(dt.getUTCDate() - ((dt.getUTCDay() + 6) % 7)) // Monday
  else if (period === 'monthly') dt.setUTCDate(1)
  else if (period === 'all') return '0000-01-01'
  else return date
  return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, '0')}-${String(dt.getUTCDate()).padStart(2, '0')}`
}

async function leaderboard(req, env, origin) {
  const url = new URL(req.url)
  const wanted = url.searchParams.get('period')
  const period = ['daily', 'weekly', 'monthly', 'all'].includes(wanted) ? wanted : 'daily'
  const league = (url.searchParams.get('league') || '').trim().toUpperCase() || null
  const countyWanted = url.searchParams.get('county')
  const county = COUNTY_NAMES.includes(countyWanted) ? countyWanted : null
  const date = dublinDate()
  const from = periodStart(period, date)
  // Optional filters: league membership, or county affiliation.
  const lj = league ? 'JOIN league_members lm ON lm.user_id = g.user_id AND lm.code = ?' : ''
  const cw = county ? 'AND u.county = ?' : ''
  const pre = league ? [league] : []
  const post = county ? [county] : []
  let rows
  if (period === 'daily') {
    rows = await env.DB.prepare(
      `SELECT u.display_name AS name, u.county AS flair, g.correct AS correct, g.time_ms AS time_ms, 1 AS plays FROM games g JOIN users u ON u.id = g.user_id ${lj} WHERE g.date = ? AND g.submitted_at IS NOT NULL ${cw} ORDER BY correct DESC, time_ms ASC LIMIT 100`,
    )
      .bind(...pre, date, ...post)
      .all()
  } else {
    rows = await env.DB.prepare(
      `SELECT u.display_name AS name, u.county AS flair, SUM(g.correct) AS correct, SUM(g.time_ms) AS time_ms, COUNT(*) AS plays FROM games g JOIN users u ON u.id = g.user_id ${lj} WHERE g.date >= ? AND g.submitted_at IS NOT NULL ${cw} GROUP BY g.user_id ORDER BY correct DESC, time_ms ASC LIMIT 100`,
    )
      .bind(...pre, from, ...post)
      .all()
  }
  const list = (rows.results || []).map((r, i) => ({
    rank: i + 1,
    name: r.name,
    flair: r.flair || null,
    correct: r.correct,
    time_ms: r.time_ms,
    plays: r.plays,
  }))
  let me = null
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (session && session.name) {
    me = list.find((r) => r.name === session.name) || (await myRank(env, period, date, from, session, league, county))
  }
  return json({ period, league, county, rows: list, me }, 200, origin)
}

async function myRank(env, period, date, from, session, league, county) {
  const lj = league ? 'JOIN league_members lm ON lm.user_id = g.user_id AND lm.code = ?' : ''
  const cw = county ? 'AND g.user_id IN (SELECT id FROM users WHERE county = ?)' : ''
  const pre = league ? [league] : []
  const post = county ? [county] : []
  if (period === 'daily') {
    const g = await env.DB.prepare(
      'SELECT correct, time_ms FROM games WHERE user_id = ? AND date = ? AND submitted_at IS NOT NULL',
    )
      .bind(session.uid, date)
      .first()
    if (!g) return null
    const better = await env.DB.prepare(
      `SELECT COUNT(*) AS c FROM games g ${lj} WHERE g.date = ? AND g.submitted_at IS NOT NULL ${cw} AND (g.correct > ? OR (g.correct = ? AND g.time_ms < ?))`,
    )
      .bind(...pre, date, ...post, g.correct, g.correct, g.time_ms)
      .first()
    return { rank: (better.c || 0) + 1, name: session.name, correct: g.correct, time_ms: g.time_ms, plays: 1 }
  }
  const g = await env.DB.prepare(
    'SELECT SUM(correct) AS correct, SUM(time_ms) AS time_ms, COUNT(*) AS plays FROM games WHERE user_id = ? AND date >= ? AND submitted_at IS NOT NULL',
  )
    .bind(session.uid, from)
    .first()
  if (!g || g.correct == null) return null
  const better = await env.DB.prepare(
    `SELECT COUNT(*) AS c FROM (SELECT g.user_id, SUM(g.correct) AS correct, SUM(g.time_ms) AS time_ms FROM games g ${lj} WHERE g.date >= ? AND g.submitted_at IS NOT NULL ${cw} GROUP BY g.user_id) t WHERE t.correct > ? OR (t.correct = ? AND t.time_ms < ?)`,
  )
    .bind(...pre, from, ...post, g.correct, g.correct, g.time_ms)
    .first()
  return { rank: (better.c || 0) + 1, name: session.name, correct: g.correct, time_ms: g.time_ms, plays: g.plays }
}

// County-vs-county standings: every county's combined performance for a period.
async function countyStandings(req, env, origin) {
  const wanted = new URL(req.url).searchParams.get('period')
  const period = ['daily', 'weekly', 'monthly', 'all'].includes(wanted) ? wanted : 'weekly'
  const date = dublinDate()
  const from = periodStart(period, date)
  const rows = await env.DB.prepare(
    `SELECT u.county AS county, COUNT(DISTINCT g.user_id) AS players, COUNT(*) AS plays, SUM(g.correct) AS correct, ROUND(AVG(g.correct), 1) AS avg
     FROM games g JOIN users u ON u.id = g.user_id
     WHERE g.date >= ? AND g.submitted_at IS NOT NULL AND u.county IS NOT NULL
     GROUP BY u.county ORDER BY correct DESC, avg DESC`,
  )
    .bind(from)
    .all()
  const list = (rows.results || []).map((r, i) => ({ rank: i + 1, ...r }))
  return json({ period, rows: list }, 200, origin)
}

/* ---------- Private leaderboards (leagues) ---------- */
const LEAGUE_CAP = 25 // max leagues one account can create
const LEAGUE_CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789' // no ambiguous 0/O/1/I/L

function newLeagueCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(7))
  let s = ''
  for (const b of bytes) s += LEAGUE_CODE_CHARS[b % LEAGUE_CODE_CHARS.length]
  return s
}

function cleanLeagueName(name) {
  const n = (name || '').trim().replace(/\s+/g, ' ')
  if (n.length < 2 || n.length > 30) return null
  if (!/^[\p{L}0-9 _.'&!-]+$/u.test(n)) return null
  if (BAD.some((w) => n.toLowerCase().includes(w))) return null
  return n
}

async function leagueCreate(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  if (!session.name) return json({ error: 'name required', needsName: true }, 403, origin)
  const { name } = await req.json()
  const clean = cleanLeagueName(name)
  if (!clean) return json({ error: 'Pick a name 2–30 characters — nothing rude.' }, 400, origin)
  const owned = await env.DB.prepare('SELECT COUNT(*) AS c FROM leagues WHERE owner_id = ?').bind(session.uid).first()
  if ((owned.c || 0) >= LEAGUE_CAP) return json({ error: 'You’ve created too many leaderboards.' }, 400, origin)
  let code = null
  for (let i = 0; i < 6; i++) {
    const candidate = newLeagueCode()
    const exists = await env.DB.prepare('SELECT code FROM leagues WHERE code = ?').bind(candidate).first()
    if (!exists) {
      code = candidate
      break
    }
  }
  if (!code) return json({ error: 'Could not generate a code, try again.' }, 500, origin)
  const now = Date.now()
  await env.DB.prepare('INSERT INTO leagues (code, name, owner_id, created_at) VALUES (?, ?, ?, ?)')
    .bind(code, clean, session.uid, now)
    .run()
  await env.DB.prepare('INSERT OR IGNORE INTO league_members (code, user_id, joined_at) VALUES (?, ?, ?)')
    .bind(code, session.uid, now)
    .run()
  return json({ code, name: clean, owner: true, members: 1 }, 200, origin)
}

async function leagueJoin(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  if (!session.name) return json({ error: 'name required', needsName: true }, 403, origin)
  const { code } = await req.json()
  const c = String(code || '').trim().toUpperCase()
  const league = await env.DB.prepare('SELECT code, name FROM leagues WHERE code = ?').bind(c).first()
  if (!league) return json({ error: 'That leaderboard code wasn’t found.' }, 404, origin)
  await env.DB.prepare('INSERT OR IGNORE INTO league_members (code, user_id, joined_at) VALUES (?, ?, ?)')
    .bind(league.code, session.uid, Date.now())
    .run()
  return json({ code: league.code, name: league.name }, 200, origin)
}

async function leagueMine(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session || !session.name) return json({ leagues: [] }, 200, origin)
  const rows = await env.DB.prepare(
    'SELECT l.code AS code, l.name AS name, l.owner_id AS owner_id, (SELECT COUNT(*) FROM league_members m2 WHERE m2.code = l.code) AS members FROM league_members m JOIN leagues l ON l.code = m.code WHERE m.user_id = ? ORDER BY l.created_at',
  )
    .bind(session.uid)
    .all()
  const leagues = (rows.results || []).map((r) => ({
    code: r.code,
    name: r.name,
    owner: r.owner_id === session.uid,
    members: r.members,
  }))
  return json({ leagues }, 200, origin)
}

/* ---------- County Scéal boards (per-county discussion) ---------- */
// Content screening is lighter than nicknames — Irish chat without a bit of
// colour isn't Irish chat — but slurs are hard-blocked.
const SLURS = ['nigger', 'faggot', 'chink', 'spastic', 'retard', 'tranny']
const hasSlur = (s) => {
  const low = (s || '').toLowerCase()
  return SLURS.some((w) => low.includes(w))
}
const cleanText = (s, max) =>
  String(s || '')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '')
    .trim()
    .slice(0, max)

const POSTS_PER_HOUR = 5
const COMMENTS_PER_HOUR = 30

async function overRate(env, table, uid, limit) {
  const r = await env.DB.prepare(`SELECT COUNT(*) AS c FROM ${table} WHERE user_id = ? AND created_at > ?`)
    .bind(uid, Date.now() - 3600000)
    .first()
  return (r.c || 0) >= limit
}

// Boards = the 32 counties plus the shared all-island "Ireland" board.
const isBoard = (name) => name === 'Ireland' || COUNTY_NAMES.includes(name)

async function scealList(req, env, origin) {
  const url = new URL(req.url)
  const county = url.searchParams.get('county')
  if (!isBoard(county)) return json({ error: 'bad county' }, 400, origin)
  const before = Number(url.searchParams.get('before')) || Date.now() + 1
  const rows = await env.DB.prepare(
    `SELECT p.id, p.title, p.body, p.created_at, p.comments, u.display_name AS author, u.county AS flair
     FROM posts p JOIN users u ON u.id = p.user_id
     WHERE p.county = ? AND p.deleted = 0 AND p.created_at < ?
     ORDER BY p.created_at DESC LIMIT 20`,
  )
    .bind(county, before)
    .all()
  return json({ county, posts: rows.results || [] }, 200, origin)
}

async function scealThread(req, env, origin) {
  const id = new URL(req.url).searchParams.get('id') || ''
  const post = await env.DB.prepare(
    `SELECT p.id, p.county, p.title, p.body, p.created_at, p.user_id, u.display_name AS author, u.county AS flair
     FROM posts p JOIN users u ON u.id = p.user_id WHERE p.id = ? AND p.deleted = 0`,
  )
    .bind(id)
    .first()
  if (!post) return json({ error: 'not found' }, 404, origin)
  const comments = await env.DB.prepare(
    `SELECT c.id, c.parent_id, c.body, c.created_at, c.user_id, u.display_name AS author, u.county AS flair
     FROM comments c JOIN users u ON u.id = c.user_id
     WHERE c.post_id = ? AND c.deleted = 0 ORDER BY c.created_at ASC LIMIT 500`,
  )
    .bind(id)
    .all()
  const session = await requireAuth(req, env.SESSION_SECRET)
  const mine = session ? session.uid : null
  const strip = (o) => {
    const { user_id, ...rest } = o
    return { ...rest, mine: user_id === mine }
  }
  return json({ post: strip(post), comments: (comments.results || []).map(strip) }, 200, origin)
}

async function scealCreate(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  if (!session.name) return json({ error: 'name required', needsName: true }, 403, origin)
  const { county, title, body } = await req.json()
  if (!isBoard(county)) return json({ error: 'bad county' }, 400, origin)
  const t = cleanText(title, 120)
  const b = cleanText(body, 3000)
  if (t.length < 5) return json({ error: 'Give your scéal a title (5+ characters).' }, 400, origin)
  if (hasSlur(t) || hasSlur(b)) return json({ error: 'That language isn’t welcome here.' }, 400, origin)
  if (await overRate(env, 'posts', session.uid, POSTS_PER_HOUR))
    return json({ error: 'Easy now — you’re posting too fast. Try again in a while.' }, 429, origin)
  const id = crypto.randomUUID()
  await env.DB.prepare('INSERT INTO posts (id, county, user_id, title, body, created_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(id, county, session.uid, t, b, Date.now())
    .run()
  return json({ id }, 200, origin)
}

async function scealComment(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  if (!session.name) return json({ error: 'name required', needsName: true }, 403, origin)
  const { postId, body, parentId } = await req.json()
  const b = cleanText(body, 2000)
  if (!b) return json({ error: 'Say something!' }, 400, origin)
  if (hasSlur(b)) return json({ error: 'That language isn’t welcome here.' }, 400, origin)
  const post = await env.DB.prepare('SELECT id FROM posts WHERE id = ? AND deleted = 0').bind(postId).first()
  if (!post) return json({ error: 'post not found' }, 404, origin)
  if (await overRate(env, 'comments', session.uid, COMMENTS_PER_HOUR))
    return json({ error: 'Easy now — you’re commenting too fast. Try again in a while.' }, 429, origin)
  const id = crypto.randomUUID()
  await env.DB.prepare('INSERT INTO comments (id, post_id, parent_id, user_id, body, created_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(id, postId, parentId || null, session.uid, b, Date.now())
    .run()
  await env.DB.prepare('UPDATE posts SET comments = comments + 1 WHERE id = ?').bind(postId).run()
  return json({ id }, 200, origin)
}

async function scealReportContent(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const { type, id } = await req.json()
  if (!['post', 'comment'].includes(type) || !id) return json({ error: 'bad report' }, 400, origin)
  await env.DB.prepare(
    'INSERT OR REPLACE INTO content_reports (target_type, target_id, user_id, created_at) VALUES (?, ?, ?, ?)',
  )
    .bind(type, id, session.uid, Date.now())
    .run()
  // Auto-hide anything five different accounts have reported, pending review.
  const n = await env.DB.prepare('SELECT COUNT(*) AS c FROM content_reports WHERE target_type = ? AND target_id = ?')
    .bind(type, id)
    .first()
  if ((n.c || 0) >= 5) {
    const table = type === 'post' ? 'posts' : 'comments'
    await env.DB.prepare(`UPDATE ${table} SET deleted = 1 WHERE id = ?`).bind(id).run()
  }
  return json({ ok: true }, 200, origin)
}

async function scealDelete(req, env, origin) {
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (!session) return json({ error: 'unauthorized' }, 401, origin)
  const { type, id } = await req.json()
  if (!['post', 'comment'].includes(type) || !id) return json({ error: 'bad request' }, 400, origin)
  const table = type === 'post' ? 'posts' : 'comments'
  const r = await env.DB.prepare(`UPDATE ${table} SET deleted = 1 WHERE id = ? AND user_id = ?`)
    .bind(id, session.uid)
    .run()
  if (!r.meta.changes) return json({ error: 'not yours to delete' }, 403, origin)
  return json({ ok: true }, 200, origin)
}

async function leagueInfo(req, env, origin) {
  const code = (new URL(req.url).searchParams.get('code') || '').trim().toUpperCase()
  const league = await env.DB.prepare('SELECT code, name FROM leagues WHERE code = ?').bind(code).first()
  if (!league) return json({ error: 'not found' }, 404, origin)
  const m = await env.DB.prepare('SELECT COUNT(*) AS c FROM league_members WHERE code = ?').bind(league.code).first()
  return json({ code: league.code, name: league.name, members: m.c || 0 }, 200, origin)
}

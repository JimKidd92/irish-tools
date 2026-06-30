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
      if (route === 'GET /quiz/today') return await quizToday(req, env, origin)
      if (route === 'POST /quiz/submit') return await quizSubmit(req, env, origin)
      if (route === 'GET /leaderboard') return await leaderboard(req, env, origin)
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
  let row = await env.DB.prepare('SELECT id, display_name FROM users WHERE google_sub = ?').bind(g.sub).first()
  if (!row) {
    const id = crypto.randomUUID()
    await env.DB.prepare('INSERT INTO users (id, google_sub, created_at) VALUES (?, ?, ?)')
      .bind(id, g.sub, Date.now())
      .run()
    row = { id, display_name: null }
  }
  const token = await newSession(row.id, row.display_name, env.SESSION_SECRET)
  return json(
    {
      token,
      user: { name: row.display_name, needsName: !row.display_name },
      suggestedName: g.given_name || (g.name || '').split(' ')[0] || '',
    },
    200,
    origin,
  )
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
  const date = dublinDate()
  const from = periodStart(period, date)
  let rows
  if (period === 'daily') {
    rows = await env.DB.prepare(
      'SELECT u.display_name AS name, g.correct AS correct, g.time_ms AS time_ms, 1 AS plays FROM games g JOIN users u ON u.id = g.user_id WHERE g.date = ? AND g.submitted_at IS NOT NULL ORDER BY correct DESC, time_ms ASC LIMIT 100',
    )
      .bind(date)
      .all()
  } else {
    rows = await env.DB.prepare(
      'SELECT u.display_name AS name, SUM(g.correct) AS correct, SUM(g.time_ms) AS time_ms, COUNT(*) AS plays FROM games g JOIN users u ON u.id = g.user_id WHERE g.date >= ? AND g.submitted_at IS NOT NULL GROUP BY g.user_id ORDER BY correct DESC, time_ms ASC LIMIT 100',
    )
      .bind(from)
      .all()
  }
  const list = (rows.results || []).map((r, i) => ({
    rank: i + 1,
    name: r.name,
    correct: r.correct,
    time_ms: r.time_ms,
    plays: r.plays,
  }))
  let me = null
  const session = await requireAuth(req, env.SESSION_SECRET)
  if (session && session.name) {
    me = list.find((r) => r.name === session.name) || (await myRank(env, period, date, from, session))
  }
  return json({ period, rows: list, me }, 200, origin)
}

async function myRank(env, period, date, from, session) {
  if (period === 'daily') {
    const g = await env.DB.prepare(
      'SELECT correct, time_ms FROM games WHERE user_id = ? AND date = ? AND submitted_at IS NOT NULL',
    )
      .bind(session.uid, date)
      .first()
    if (!g) return null
    return { rank: await dailyRank(env, date, g.correct, g.time_ms), name: session.name, correct: g.correct, time_ms: g.time_ms, plays: 1 }
  }
  const g = await env.DB.prepare(
    'SELECT SUM(correct) AS correct, SUM(time_ms) AS time_ms, COUNT(*) AS plays FROM games WHERE user_id = ? AND date >= ? AND submitted_at IS NOT NULL',
  )
    .bind(session.uid, from)
    .first()
  if (!g || g.correct == null) return null
  const better = await env.DB.prepare(
    'SELECT COUNT(*) AS c FROM (SELECT user_id, SUM(correct) AS correct, SUM(time_ms) AS time_ms FROM games WHERE date >= ? AND submitted_at IS NOT NULL GROUP BY user_id) t WHERE t.correct > ? OR (t.correct = ? AND t.time_ms < ?)',
  )
    .bind(from, g.correct, g.correct, g.time_ms)
    .first()
  return { rank: (better.c || 0) + 1, name: session.name, correct: g.correct, time_ms: g.time_ms, plays: g.plays }
}

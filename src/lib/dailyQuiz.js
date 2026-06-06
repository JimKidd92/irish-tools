import { QUESTIONS, QUESTIONS_PER_DAY } from '../data/quiz.js'

const STORAGE_KEY = 'irish-tools.quiz'

// Today's date as a local YYYY-MM-DD key.
export function todayKey(d = new Date()) {
  return d.toLocaleDateString('en-CA')
}

function yesterdayKey() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return todayKey(d)
}

// --- Deterministic daily question selection --------------------------------
// Same date → same seed → same questions for everyone, everywhere.
function hashString(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function dailyQuestions(dateKey = todayKey()) {
  const rng = mulberry32(hashString(dateKey))
  const indices = QUESTIONS.map((_, i) => i)
  // Fisher–Yates shuffle with the seeded RNG.
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return indices.slice(0, QUESTIONS_PER_DAY).map((i) => QUESTIONS[i])
}

// --- Progress / streak storage ---------------------------------------------
export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { lastDate: null, streak: 0, best: 0, lastScore: null, lastGrid: '' }
  } catch {
    return { lastDate: null, streak: 0, best: 0, lastScore: null, lastGrid: '' }
  }
}

// Record today's result, updating the streak. No-op if already played today.
export function recordResult(score, grid) {
  const prev = loadProgress()
  const today = todayKey()
  if (prev.lastDate === today) return prev // already played

  const streak = prev.lastDate === yesterdayKey() ? prev.streak + 1 : 1
  const next = {
    lastDate: today,
    streak,
    best: Math.max(prev.best || 0, streak),
    lastScore: score,
    lastGrid: grid,
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    /* storage unavailable — grand */
  }
  return next
}

export function playedToday() {
  return loadProgress().lastDate === todayKey()
}

// Emoji grid for sharing, e.g. 🟩🟩🟥🟩🟩
export function resultGrid(correctness) {
  return correctness.map((ok) => (ok ? '🟩' : '🟥')).join('')
}

// Hours/minutes until the next quiz (midnight local).
export function timeUntilTomorrow() {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setHours(24, 0, 0, 0)
  const ms = tomorrow - now
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  return `${h}h ${m}m`
}

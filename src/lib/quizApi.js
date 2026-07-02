// Client for the quiz/leaderboard Worker. Holds the session token + user in
// localStorage and wraps the Worker endpoints. All scoring happens server-side.
import { QUIZ_API, GOOGLE_CLIENT_ID } from '../config.js'

const TOKEN_KEY = 'irish-tools.quiz-token'
const USER_KEY = 'irish-tools.quiz-user'

export const quizEnabled = () => Boolean(QUIZ_API && GOOGLE_CLIENT_ID)

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY) || null
  } catch {
    return null
  }
}
export function getUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || 'null')
  } catch {
    return null
  }
}
export function setSession(token, user) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
  } catch {
    /* ignore */
  }
}
export function clearSession() {
  try {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  } catch {
    /* ignore */
  }
}

async function api(path, { method = 'GET', body, auth = true } = {}) {
  const headers = {}
  if (body) headers['Content-Type'] = 'application/json'
  const token = getToken()
  if (auth && token) headers.Authorization = `Bearer ${token}`
  const res = await fetch(`${QUIZ_API}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
  let data = null
  try {
    data = await res.json()
  } catch {
    /* non-json */
  }
  if (!res.ok) {
    const err = new Error((data && data.error) || `Request failed (${res.status})`)
    err.status = res.status
    err.needsName = data && data.needsName
    throw err
  }
  return data
}

// Verify a Google credential with the Worker; returns { token, user, suggestedName }.
export async function authGoogle(credential) {
  const data = await api('/auth/google', { method: 'POST', body: { credential }, auth: false })
  setSession(data.token, data.user)
  return data
}

export async function claimName(name) {
  const data = await api('/auth/name', { method: 'POST', body: { name } })
  setSession(data.token, data.user)
  return data
}

export const getToday = () => api('/quiz/today')
export const submitQuiz = (answers) => api('/quiz/submit', { method: 'POST', body: { answers } })
export const reportQuestion = (id, reason = '') =>
  api('/quiz/report', { method: 'POST', body: { id, reason } })
export const getQuizStats = () => api('/quiz/stats')

// Per-user synced data (visited counties, trip itinerary).
export const getUserData = (key) => api(`/me/data?key=${encodeURIComponent(key)}`)
export const putUserData = (key, value) => api('/me/data', { method: 'PUT', body: { key, value } })

// Read-only shared trip snapshots.
export const shareTrip = (trip) => api('/trip/share', { method: 'POST', body: { trip } })
export const getSharedTrip = (code) =>
  api(`/trip/shared?code=${encodeURIComponent(code)}`, { auth: false })
export const getLeaderboard = (period = 'daily', league = null) =>
  api(`/leaderboard?period=${encodeURIComponent(period)}${league ? `&league=${encodeURIComponent(league)}` : ''}`)

// Private leaderboards (leagues)
export const createLeague = (name) => api('/league/create', { method: 'POST', body: { name } })
export const joinLeague = (code) => api('/league/join', { method: 'POST', body: { code } })
export const getMyLeagues = () => api('/league/mine')
export const getLeagueInfo = (code) => api(`/league/info?code=${encodeURIComponent(code)}`, { auth: false })

// "1m 23.4s" / "12.3s"
export function formatTime(ms) {
  if (ms == null) return '—'
  const s = ms / 1000
  if (s < 60) return `${s.toFixed(1)}s`
  const m = Math.floor(s / 60)
  return `${m}m ${Math.round(s - m * 60)}s`
}

import { useCallback, useEffect, useRef, useState } from 'react'
import { getUserData, putUserData, getToken, quizEnabled } from '../lib/quizApi.js'

// Visited-counties "scratch map" state: always in localStorage, and — when the
// user is signed in (quiz account) — merged with and synced to their account.
const KEY = 'irish-tools.visited-counties'

function loadLocal() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY))
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

export function useVisitedCounties() {
  const [visited, setVisited] = useState(loadLocal)
  const pulled = useRef(false)
  const saveTimer = useRef(null)
  const signedIn = quizEnabled() && Boolean(getToken())

  // One-time pull from the account, merged (union) with what's on this device.
  useEffect(() => {
    if (!signedIn || pulled.current) return
    pulled.current = true
    getUserData('counties')
      .then((d) => {
        const remote = Array.isArray(d.value) ? d.value : []
        setVisited((local) => [...new Set([...local, ...remote])])
      })
      .catch(() => {})
  }, [signedIn])

  // Persist locally; debounce the account save.
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(visited))
    } catch {
      /* ignore */
    }
    if (!signedIn || !pulled.current) return
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => putUserData('counties', visited).catch(() => {}), 1200)
    return () => clearTimeout(saveTimer.current)
  }, [visited, signedIn])

  const toggle = useCallback((name) => {
    setVisited((v) => (v.includes(name) ? v.filter((x) => x !== name) : [...v, name]))
  }, [])

  return { visited, toggle, signedIn }
}

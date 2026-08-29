import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  authGoogle,
  claimName,
  claimCounty,
  fetchProfile,
  clearSession,
  getUser,
  quizEnabled,
  SESSION_EXPIRED_EVENT,
} from '../lib/quizApi.js'

const QuizAuthContext = createContext(null)

export function QuizAuthProvider({ children }) {
  const [user, setUser] = useState(() => getUser())
  const [suggestedName, setSuggestedName] = useState('')
  const [expired, setExpired] = useState(false)

  // Check the stored session against the server once on load. This both
  // refreshes the profile (old sessions predate county affiliation and have no
  // `county` key at all - vs null = asked but unset) and catches a token that
  // has expired or been invalidated, which 401s and signs us out below.
  useEffect(() => {
    if (!quizEnabled() || !user) return
    fetchProfile()
      .then((d) => setUser(d.user))
      .catch(() => {})
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Any authed call that comes back 401 means the session is dead - drop back
  // to signed-out so the Google button is offered again.
  useEffect(() => {
    const onExpired = () => {
      setUser(null)
      setExpired(true)
    }
    window.addEventListener(SESSION_EXPIRED_EVENT, onExpired)
    return () => window.removeEventListener(SESSION_EXPIRED_EVENT, onExpired)
  }, [])

  // Called with the Google credential (JWT) from the Sign-in button.
  const handleCredential = useCallback(async (credential) => {
    const data = await authGoogle(credential)
    setUser(data.user)
    setSuggestedName(data.suggestedName || '')
    setExpired(false)
    return data.user
  }, [])

  const chooseName = useCallback(async (name) => {
    const data = await claimName(name)
    // /auth/name doesn't know the county - preserve what we have.
    setUser((u) => ({ ...u, ...data.user, county: u?.county ?? data.user.county ?? null }))
    return data.user
  }, [])

  const chooseCounty = useCallback(async (county) => {
    const data = await claimCounty(county)
    setUser(data.user)
    return data.user
  }, [])

  const signOut = useCallback(() => {
    clearSession()
    setUser(null)
    setExpired(false)
  }, [])

  const value = useMemo(
    () => ({
      enabled: quizEnabled(),
      user,
      suggestedName,
      signedIn: Boolean(user),
      needsName: Boolean(user && user.needsName),
      needsCounty: Boolean(user && !user.needsName && !user.county),
      county: (user && user.county) || null,
      expired,
      handleCredential,
      chooseName,
      chooseCounty,
      signOut,
    }),
    [user, suggestedName, expired, handleCredential, chooseName, chooseCounty, signOut],
  )

  return <QuizAuthContext.Provider value={value}>{children}</QuizAuthContext.Provider>
}

export function useQuizAuth() {
  const ctx = useContext(QuizAuthContext)
  if (!ctx) throw new Error('useQuizAuth must be used within QuizAuthProvider')
  return ctx
}

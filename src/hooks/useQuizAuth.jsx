import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  authGoogle,
  claimName,
  claimCounty,
  fetchProfile,
  clearSession,
  getUser,
  quizEnabled,
} from '../lib/quizApi.js'

const QuizAuthContext = createContext(null)

export function QuizAuthProvider({ children }) {
  const [user, setUser] = useState(() => getUser())
  const [suggestedName, setSuggestedName] = useState('')

  // Sessions created before county affiliation existed have no `county` key at
  // all (vs null = asked but skipped/unset server-side) — refresh those once.
  useEffect(() => {
    if (!quizEnabled() || !user || 'county' in user) return
    fetchProfile()
      .then((d) => setUser(d.user))
      .catch(() => {})
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Called with the Google credential (JWT) from the Sign-in button.
  const handleCredential = useCallback(async (credential) => {
    const data = await authGoogle(credential)
    setUser(data.user)
    setSuggestedName(data.suggestedName || '')
    return data.user
  }, [])

  const chooseName = useCallback(async (name) => {
    const data = await claimName(name)
    // /auth/name doesn't know the county — preserve what we have.
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
      handleCredential,
      chooseName,
      chooseCounty,
      signOut,
    }),
    [user, suggestedName, handleCredential, chooseName, chooseCounty, signOut],
  )

  return <QuizAuthContext.Provider value={value}>{children}</QuizAuthContext.Provider>
}

export function useQuizAuth() {
  const ctx = useContext(QuizAuthContext)
  if (!ctx) throw new Error('useQuizAuth must be used within QuizAuthProvider')
  return ctx
}

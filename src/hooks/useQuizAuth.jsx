import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { authGoogle, claimName, clearSession, getUser, quizEnabled } from '../lib/quizApi.js'

const QuizAuthContext = createContext(null)

export function QuizAuthProvider({ children }) {
  const [user, setUser] = useState(() => getUser())
  const [suggestedName, setSuggestedName] = useState('')

  // Called with the Google credential (JWT) from the Sign-in button.
  const handleCredential = useCallback(async (credential) => {
    const data = await authGoogle(credential)
    setUser(data.user)
    setSuggestedName(data.suggestedName || '')
    return data.user
  }, [])

  const chooseName = useCallback(async (name) => {
    const data = await claimName(name)
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
      handleCredential,
      chooseName,
      signOut,
    }),
    [user, suggestedName, handleCredential, chooseName, signOut],
  )

  return <QuizAuthContext.Provider value={value}>{children}</QuizAuthContext.Provider>
}

export function useQuizAuth() {
  const ctx = useContext(QuizAuthContext)
  if (!ctx) throw new Error('useQuizAuth must be used within QuizAuthProvider')
  return ctx
}

import { useEffect, useState } from 'react'
import { useQuizAuth } from '../hooks/useQuizAuth.jsx'
import GoogleSignInButton from './GoogleSignInButton.jsx'

// Handles the two pre-play states: signed-out (Google button + pitch) and
// signed-in-but-no-nickname (claim a name). Renders nothing once ready to play.
export default function QuizSignIn() {
  const { signedIn, needsName, suggestedName, handleCredential, chooseName } = useQuizAuth()
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (suggestedName && !name) setName(suggestedName)
  }, [suggestedName]) // eslint-disable-line react-hooks/exhaustive-deps

  async function onCredential(credential) {
    setError('')
    setBusy(true)
    try {
      await handleCredential(credential)
    } catch (e) {
      setError(e.message || 'Sign-in failed — try again.')
    } finally {
      setBusy(false)
    }
  }

  async function onName(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await chooseName(name.trim())
    } catch (e) {
      setError(e.message || 'Could not save that name.')
    } finally {
      setBusy(false)
    }
  }

  if (!signedIn) {
    return (
      <div className="quiz-auth">
        <span className="quiz-auth__emoji" aria-hidden="true">🏆</span>
        <h3 className="quiz-auth__title">Play the ranked Daily Quiz</h3>
        <p className="quiz-auth__pitch">
          10 questions a day, the same for everyone. Sign in to save your streak and climb the
          leaderboard — daily, weekly, monthly and all-time.
        </p>
        <GoogleSignInButton onCredential={onCredential} />
        {busy && <p className="quiz-auth__note">Signing you in…</p>}
        {error && <p className="quiz-auth__error">{error}</p>}
        <p className="quiz-auth__small">
          We only store a nickname you choose — no email, no spam. See our{' '}
          <a href="/privacy/">privacy page</a>.
        </p>
      </div>
    )
  }

  if (needsName) {
    return (
      <div className="quiz-auth">
        <span className="quiz-auth__emoji" aria-hidden="true">☘️</span>
        <h3 className="quiz-auth__title">Pick your leaderboard name</h3>
        <p className="quiz-auth__pitch">This is what everyone will see on the board. Choose wisely!</p>
        <form className="quiz-auth__form" onSubmit={onName}>
          <input
            className="quiz-auth__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. SeanFromBoston"
            maxLength={20}
            autoFocus
          />
          <button className="btn btn--primary" type="submit" disabled={busy || name.trim().length < 2}>
            {busy ? 'Saving…' : 'Let’s go'}
          </button>
        </form>
        {error && <p className="quiz-auth__error">{error}</p>}
      </div>
    )
  }

  return null
}

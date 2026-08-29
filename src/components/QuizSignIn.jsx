import { useEffect, useState } from 'react'
import { useQuizAuth } from '../hooks/useQuizAuth.jsx'
import { getLeagueInfo } from '../lib/quizApi.js'
import GoogleSignInButton from './GoogleSignInButton.jsx'
import CountySelect from './CountySelect.jsx'

// Handles the pre-play states: signed-out (Google button + pitch),
// signed-in-but-no-nickname, and no-county-yet (affiliation for flair +
// county rankings). Renders nothing once ready to play.
export default function QuizSignIn({ inviteCode = null }) {
  const { signedIn, needsName, needsCounty, suggestedName, expired, handleCredential, chooseName, chooseCounty } =
    useQuizAuth()
  const [name, setName] = useState('')
  const [county, setCounty] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [invite, setInvite] = useState(null)

  useEffect(() => {
    if (!inviteCode) return
    getLeagueInfo(inviteCode)
      .then((d) => setInvite(d))
      .catch(() => {})
  }, [inviteCode])

  useEffect(() => {
    if (suggestedName && !name) setName(suggestedName)
  }, [suggestedName]) // eslint-disable-line react-hooks/exhaustive-deps

  async function onCredential(credential) {
    setError('')
    setBusy(true)
    try {
      await handleCredential(credential)
    } catch (e) {
      setError(e.message || 'Sign-in failed - try again.')
    } finally {
      setBusy(false)
    }
  }

  async function onCounty(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await chooseCounty(county)
    } catch (err) {
      setError(err.message || 'Could not save your county.')
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
        {invite && (
          <p className="quiz-auth__invite">
            🎉 You’ve been invited to the <strong>“{invite.name}”</strong> leaderboard
            {invite.members ? ` (${invite.members} playing)` : ''}. Sign in to join.
          </p>
        )}
        {expired && (
          <p className="quiz-auth__expired">
            Your sign-in expired - sign in again to pick up where you left off. Your scores and
            streak are safe.
          </p>
        )}
        <span className="quiz-auth__emoji" aria-hidden="true">🏆</span>
        <h3 className="quiz-auth__title">Play the ranked Daily Quiz</h3>
        <p className="quiz-auth__pitch">
          10 questions a day, the same for everyone. Sign in to save your streak and climb the
          leaderboard - daily, weekly, monthly and all-time.
        </p>
        <GoogleSignInButton onCredential={onCredential} />
        {busy && <p className="quiz-auth__note">Signing you in…</p>}
        {error && <p className="quiz-auth__error">{error}</p>}
        <p className="quiz-auth__small">
          We only store a nickname you choose - no email, no spam. See our{' '}
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

  if (needsCounty) {
    return (
      <div className="quiz-auth">
        <span className="quiz-auth__emoji" aria-hidden="true">🗺️</span>
        <h3 className="quiz-auth__title">What county are you?</h3>
        <p className="quiz-auth__pitch">
          Wear your colours! Your county appears beside your name, ranks you against your own,
          and puts you on your county’s Scéal board.
        </p>
        <form className="quiz-auth__form" onSubmit={onCounty}>
          <CountySelect value={county} onChange={setCounty} />
          <button className="btn btn--primary" type="submit" disabled={busy || !county}>
            {busy ? 'Saving…' : 'Up ' + (county || 'we go') + '!'}
          </button>
        </form>
        {error && <p className="quiz-auth__error">{error}</p>}
        <p className="quiz-auth__small">
          Born there, reared there, or just where the heart is - your call. You can post on every
          county’s board either way.
        </p>
      </div>
    )
  }

  return null
}

import { useCallback, useEffect, useState } from 'react'
import { createLeague, joinLeague, getMyLeagues } from '../lib/quizApi.js'
import Leaderboard from './Leaderboard.jsx'

const shareUrl = (code) => `${window.location.origin}/quiz/?join=${code}`

// The signed-in leaderboard area: switch between the Global board and any
// private leaderboards you're in, create a new one (with a shareable link), or
// join one by code. `focusCode` selects a league just joined via an invite link.
export default function LeaderboardPanel({ focusCode = null }) {
  const [leagues, setLeagues] = useState([])
  const [selected, setSelected] = useState(focusCode)
  const [mode, setMode] = useState('none') // 'none' | 'create' | 'join'
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const load = useCallback(async () => {
    try {
      const d = await getMyLeagues()
      setLeagues(d.leagues || [])
    } catch {
      /* leave as-is */
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  // If we arrived via an invite link, select that league once it's in the list.
  useEffect(() => {
    if (focusCode) {
      setSelected(focusCode)
      load()
    }
  }, [focusCode, load])

  async function onCreate(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const d = await createLeague(text.trim())
      await load()
      setSelected(d.code)
      setMode('none')
      setText('')
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  async function onJoin(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const d = await joinLeague(text.trim())
      await load()
      setSelected(d.code)
      setMode('none')
      setText('')
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  async function copyLink(code) {
    try {
      await navigator.clipboard.writeText(shareUrl(code))
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setError('Couldn’t copy — the link is: ' + shareUrl(code))
    }
  }

  const current = leagues.find((l) => l.code === selected) || null

  return (
    <div className="lbp">
      <div className="lbp__sources">
        <button
          className={`lbp__src ${selected === null ? 'is-on' : ''}`}
          onClick={() => {
            setSelected(null)
            setMode('none')
          }}
        >
          🌍 Global
        </button>
        {leagues.map((l) => (
          <button
            key={l.code}
            className={`lbp__src ${selected === l.code ? 'is-on' : ''}`}
            onClick={() => {
              setSelected(l.code)
              setMode('none')
            }}
          >
            {l.name}
          </button>
        ))}
        <button className="lbp__src lbp__src--add" onClick={() => { setMode('create'); setText(''); setError('') }}>
          ＋ New
        </button>
        <button className="lbp__src lbp__src--add" onClick={() => { setMode('join'); setText(''); setError('') }}>
          Join by code
        </button>
      </div>

      {mode === 'create' && (
        <form className="lbp__form" onSubmit={onCreate}>
          <input
            className="quiz-auth__input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Leaderboard name, e.g. The Murphys"
            maxLength={30}
            autoFocus
          />
          <button className="btn btn--primary" type="submit" disabled={busy || text.trim().length < 2}>
            {busy ? 'Creating…' : 'Create'}
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setMode('none')}>Cancel</button>
        </form>
      )}

      {mode === 'join' && (
        <form className="lbp__form" onSubmit={onJoin}>
          <input
            className="quiz-auth__input"
            value={text}
            onChange={(e) => setText(e.target.value.toUpperCase())}
            placeholder="Enter code, e.g. K7Q2MNP"
            maxLength={12}
            autoFocus
          />
          <button className="btn btn--primary" type="submit" disabled={busy || text.trim().length < 4}>
            {busy ? 'Joining…' : 'Join'}
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setMode('none')}>Cancel</button>
        </form>
      )}

      {error && <p className="quiz-auth__error">{error}</p>}

      {current && (
        <div className="lbp__share">
          <span className="lbp__share-info">
            <strong>{current.name}</strong> · {current.members} {current.members === 1 ? 'player' : 'players'}
            {current.owner && ' · you host this'}
          </span>
          <button className="btn btn--ghost lbp__share-btn" onClick={() => copyLink(current.code)}>
            {copied ? '✓ Link copied!' : '🔗 Copy invite link'}
          </button>
        </div>
      )}

      <Leaderboard key={selected || 'global'} league={selected} />
    </div>
  )
}

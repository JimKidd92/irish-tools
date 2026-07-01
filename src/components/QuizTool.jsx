import { useEffect, useMemo, useRef, useState } from 'react'
import { celebrate } from '../lib/confetti.js'
import {
  dailyQuestions,
  loadProgress,
  recordResult,
  resultGrid,
  timeUntilTomorrow,
  todayKey,
} from '../lib/dailyQuiz.js'
import { quizEnabled, getToday, submitQuiz, formatTime, joinLeague, reportQuestion } from '../lib/quizApi.js'
import { useQuizAuth } from '../hooks/useQuizAuth.jsx'
import QuizSignIn from './QuizSignIn.jsx'
import Leaderboard from './Leaderboard.jsx'
import LeaderboardPanel from './LeaderboardPanel.jsx'
import ShareImageButton from './ShareImageButton.jsx'

// Once the quiz Worker + Google sign-in are configured, the ranked 10-question
// server quiz takes over; until then we fall back to the original local quiz so
// the page always works.
export default function QuizTool() {
  return quizEnabled() ? <ServerQuiz /> : <LocalQuiz />
}

function blurb(score, total) {
  if (score === total) return 'Full house! You’re a credit to the parish.'
  if (score >= Math.ceil(total * 0.6)) return 'Not a bother on ya. Grand work.'
  return 'Ah sure, you’ll get them tomorrow.'
}

/* ---------------- Server-authoritative ranked quiz ---------------- */

const STREAK_KEY = 'irish-tools.quiz-streak'
function readStreak() {
  try {
    const s = JSON.parse(localStorage.getItem(STREAK_KEY) || 'null')
    if (!s) return 0
    const today = new Date().toISOString().slice(0, 10)
    const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    return s.lastDate === today || s.lastDate === yest ? s.streak : 0
  } catch {
    return 0
  }
}
function bumpStreak() {
  const today = new Date().toISOString().slice(0, 10)
  let s = { lastDate: null, streak: 0 }
  try {
    s = JSON.parse(localStorage.getItem(STREAK_KEY) || 'null') || s
  } catch {
    /* ignore */
  }
  if (s.lastDate === today) return s.streak
  const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  const streak = s.lastDate === yest ? s.streak + 1 : 1
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify({ lastDate: today, streak }))
  } catch {
    /* ignore */
  }
  return streak
}

function ServerQuiz() {
  const { signedIn, needsName } = useQuizAuth()
  const ready = signedIn && !needsName
  const [state, setState] = useState({ status: 'idle' })
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [streak, setStreak] = useState(0)

  // Invite link (?join=CODE): auto-join once the user is signed in with a name.
  const joinCode = useMemo(() => {
    try {
      return new URLSearchParams(window.location.search).get('join')
    } catch {
      return null
    }
  }, [])
  const [joinedCode, setJoinedCode] = useState(null)
  const [joinMsg, setJoinMsg] = useState('')
  const joinTried = useRef(false)

  useEffect(() => {
    if (!ready || !joinCode || joinTried.current) return
    joinTried.current = true
    joinLeague(joinCode)
      .then((d) => {
        setJoinedCode(d.code)
        setJoinMsg(`You’ve joined “${d.name}”!`)
      })
      .catch(() => {})
  }, [ready, joinCode])

  useEffect(() => {
    if (!ready) {
      setState({ status: 'auth' })
      return
    }
    let cancelled = false
    setState({ status: 'loading' })
    getToday()
      .then((d) => {
        if (cancelled) return
        if (d.played) {
          setStreak(readStreak())
          setState({ status: 'done', result: d.result, corrections: d.corrections, total: d.total })
        } else {
          setAnswers(new Array(d.questions.length).fill(null))
          setStep(0)
          setState({ status: 'play', questions: d.questions, total: d.total })
        }
      })
      .catch((e) => !cancelled && setState({ status: 'error', error: e.message }))
    return () => {
      cancelled = true
    }
  }, [ready])

  if (!ready) {
    return (
      <section className="panel quiz">
        <QuizSignIn inviteCode={joinCode} />
        <div className="quiz__board">
          <h3 className="quiz__board-title">🏆 Today’s leaderboard</h3>
          <Leaderboard />
        </div>
      </section>
    )
  }

  if (state.status === 'loading' || state.status === 'idle') {
    return <section className="panel quiz"><p className="quiz__loading">Loading today’s quiz…</p></section>
  }

  if (state.status === 'error') {
    return (
      <section className="panel quiz">
        <p className="quiz__error">Couldn’t load the quiz: {state.error}</p>
        <button className="btn btn--ghost" onClick={() => setState({ status: 'idle' })}>
          Try again
        </button>
      </section>
    )
  }

  if (state.status === 'play' || state.status === 'submitting') {
    const qs = state.questions
    const q = qs[step]
    const picked = answers[step]
    const submitting = state.status === 'submitting'

    function pick(i) {
      if (submitting) return
      const a = [...answers]
      a[step] = i
      setAnswers(a)
    }
    async function advance() {
      if (step + 1 < qs.length) {
        setStep(step + 1)
        return
      }
      setState((s) => ({ ...s, status: 'submitting' }))
      try {
        const r = await submitQuiz(answers)
        const st = bumpStreak()
        setStreak(st)
        if (r.correct === r.total) celebrate()
        setState({ status: 'done', result: { correct: r.correct, time_ms: r.time_ms, rank: r.rank }, corrections: r.corrections, total: r.total })
      } catch (e) {
        setState({ status: 'play', questions: qs, total: qs.length, error: e.message })
      }
    }

    return (
      <section className="panel quiz">
        <div className="quiz__progress">
          <span>Question {step + 1} of {qs.length}</span>
          <div className="quiz__dots">
            {qs.map((_, i) => (
              <span key={i} className={`quiz__dot ${i <= step ? 'is-on' : ''}`} />
            ))}
          </div>
        </div>

        <h2 className="quiz__question">{q.q}</h2>

        <ul className="quiz__options">
          {q.options.map((opt, i) => (
            <li key={i}>
              <button
                className={`quiz__option ${picked === i ? 'is-picked' : ''}`}
                onClick={() => pick(i)}
                disabled={submitting}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>

        <button className="btn btn--primary quiz__next" disabled={picked == null || submitting} onClick={advance}>
          {submitting ? 'Scoring…' : step + 1 < qs.length ? 'Next question →' : 'Finish & submit'}
        </button>
        {state.error && <p className="quiz__error">{state.error}</p>}
        <p className="quiz__fairnote">No peeking — answers are scored on the server. Faster correct runs rank higher.</p>
      </section>
    )
  }

  // Any other status (or a transient state before the load effect runs) — show
  // a loader rather than falling through to the results view with no result.
  if (state.status !== 'done' || !state.result) {
    return <section className="panel quiz"><p className="quiz__loading">Loading today’s quiz…</p></section>
  }

  const { result, corrections, total } = state
  const score = result.correct
  return (
    <section className="panel quiz">
      <span className="quiz__big" aria-hidden="true">
        {score === total ? '🏆' : score >= Math.ceil(total * 0.6) ? '🍀' : '🌱'}
      </span>
      <h2 className="quiz__result-title">{score}/{total}</h2>
      <div className="quiz__resultmeta">
        <span className="quiz__pill quiz__pill--rank">#{result.rank} today</span>
        <span className="quiz__pill">⏱ {formatTime(result.time_ms)}</span>
        {streak > 0 && <span className="quiz__pill">{streak} 🔥 streak</span>}
      </div>
      <p className="quiz__blurb">{blurb(score, total)}</p>

      <ShareImageButton
        image={{
          kicker: 'Daily Irish Quiz',
          big: `${score}/${total}`,
          sub: `#${result.rank} today  ·  ${streak} day streak 🔥`,
          accent: 'orange',
        }}
        text={`🍀 Irish Tools Daily Quiz — I got ${score}/${total} and ranked #${result.rank} today. Can you beat me?`}
        url="https://irishtools.ie/quiz/"
        label="Share your score"
      />

      {corrections && <QuizReview corrections={corrections} />}

      {joinMsg && <p className="quiz__joinmsg">🎉 {joinMsg}</p>}
      <div className="quiz__board">
        <h3 className="quiz__board-title">🏆 Leaderboards</h3>
        <LeaderboardPanel focusCode={joinedCode} />
      </div>

      <p className="quiz__tomorrow">New quiz in {timeUntilTomorrow()}.</p>
    </section>
  )
}

function ReviewItem({ c }) {
  const right = c.your === c.correct
  const [reported, setReported] = useState(false)
  const [busy, setBusy] = useState(false)

  async function report() {
    setBusy(true)
    try {
      await reportQuestion(c.id)
    } catch {
      /* still show thanks — the report is best-effort */
    } finally {
      setReported(true)
      setBusy(false)
    }
  }

  return (
    <li className="quiz__review-item">
      <p className="quiz__review-q">{c.q}</p>
      <p className={`quiz__review-a ${right ? 'is-right' : 'is-wrong'}`}>
        {right ? '✓ ' : '✗ '}
        {c.your != null ? c.options[c.your] : 'No answer'}
        {!right && <span className="quiz__review-correct"> · correct: {c.options[c.correct]}</span>}
      </p>
      {reported ? (
        <span className="quiz__report is-done">✓ Reported — thanks!</span>
      ) : (
        <button type="button" className="quiz__report" onClick={report} disabled={busy}>
          ⚑ Report this question
        </button>
      )}
    </li>
  )
}

function QuizReview({ corrections }) {
  return (
    <details className="quiz__review">
      <summary>Review the answers</summary>
      <ol className="quiz__review-list">
        {corrections.map((c, i) => (
          <ReviewItem key={c.id ?? i} c={c} />
        ))}
      </ol>
    </details>
  )
}

/* ---------------- Original local quiz (fallback before the Worker is live) ---------------- */

function LocalQuiz() {
  const questions = useMemo(() => dailyQuestions(), [])
  const progress = useMemo(loadProgress, [])
  const alreadyPlayed = progress.lastDate === todayKey()

  const [phase, setPhase] = useState(alreadyPlayed ? 'done' : 'playing')
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState(null)
  const [correctness, setCorrectness] = useState([])
  const [final, setFinal] = useState(
    alreadyPlayed
      ? { score: progress.lastScore ?? 0, grid: progress.lastGrid ?? '', streak: progress.streak }
      : null,
  )

  const q = questions[step]

  function choose(i) {
    if (picked !== null) return
    setPicked(i)
  }

  function next() {
    const updated = [...correctness, picked === q.answer]
    setCorrectness(updated)
    setPicked(null)
    if (step + 1 < questions.length) {
      setStep(step + 1)
    } else {
      const score = updated.filter(Boolean).length
      const grid = resultGrid(updated)
      const saved = recordResult(score, grid)
      setFinal({ score, grid, streak: saved.streak })
      setPhase('done')
      if (score === questions.length) celebrate()
    }
  }

  if (phase === 'done' && final) {
    return (
      <section className="panel quiz">
        <span className="quiz__big" aria-hidden="true">
          {final.score === questions.length ? '🏆' : final.score >= 3 ? '🍀' : '🌱'}
        </span>
        <h2 className="quiz__result-title">{final.score}/{questions.length}</h2>
        <p className="quiz__grid" aria-hidden="true">{final.grid}</p>
        <p className="quiz__blurb">{blurb(final.score, questions.length)}</p>
        <div className="quiz__streak">
          <span className="quiz__streak-num">{final.streak} 🔥</span>
          <span className="quiz__streak-label">day streak</span>
        </div>
        <ShareImageButton
          image={{
            kicker: `Daily Irish Quiz · ${new Date().toLocaleDateString('en-IE', { day: 'numeric', month: 'short' })}`,
            big: `${final.score}/${questions.length}`,
            sub: `${final.grid}   ·   ${final.streak} day streak 🔥`,
            accent: 'orange',
          }}
          text={`🍀 Irish Tools Daily Quiz\n${final.score}/${questions.length}  ${final.grid}\nStreak: ${final.streak} 🔥`}
          url="https://irishtools.ie/quiz/"
          label="Share your score"
        />
        <p className="quiz__tomorrow">Come back tomorrow for a new quiz — next one in {timeUntilTomorrow()}.</p>
      </section>
    )
  }

  return (
    <section className="panel quiz">
      <div className="quiz__progress">
        <span>Question {step + 1} of {questions.length}</span>
        <div className="quiz__dots">
          {questions.map((_, i) => (
            <span key={i} className={`quiz__dot ${i <= step ? 'is-on' : ''}`} />
          ))}
        </div>
      </div>
      <h2 className="quiz__question">{q.q}</h2>
      <ul className="quiz__options">
        {q.options.map((opt, i) => {
          let cls = 'quiz__option'
          if (picked !== null) {
            if (i === q.answer) cls += ' is-correct'
            else if (i === picked) cls += ' is-wrong'
          }
          return (
            <li key={i}>
              <button className={cls} onClick={() => choose(i)} disabled={picked !== null}>
                {opt}
              </button>
            </li>
          )
        })}
      </ul>
      {picked !== null && (
        <button className="btn btn--primary quiz__next" onClick={next}>
          {step + 1 < questions.length ? 'Next question →' : 'See your score'}
        </button>
      )}
    </section>
  )
}

import { useMemo, useState } from 'react'
import { celebrate } from '../lib/confetti.js'
import {
  dailyQuestions,
  loadProgress,
  recordResult,
  resultGrid,
  timeUntilTomorrow,
  todayKey,
} from '../lib/dailyQuiz.js'
import { shareResult } from '../lib/share.js'

export default function QuizTool() {
  const questions = useMemo(() => dailyQuestions(), [])
  const progress = useMemo(loadProgress, [])
  const alreadyPlayed = progress.lastDate === todayKey()

  const [phase, setPhase] = useState(alreadyPlayed ? 'done' : 'playing')
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState(null) // selected option index for current Q
  const [correctness, setCorrectness] = useState([])
  const [final, setFinal] = useState(
    alreadyPlayed
      ? { score: progress.lastScore ?? 0, grid: progress.lastGrid ?? '', streak: progress.streak }
      : null,
  )
  const [shareMsg, setShareMsg] = useState('')

  const q = questions[step]

  function choose(i) {
    if (picked !== null) return // locked once answered
    setPicked(i)
  }

  function next() {
    const wasRight = picked === q.answer
    const updated = [...correctness, wasRight]
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

  async function onShare() {
    const date = new Date().toLocaleDateString('en-IE', { day: 'numeric', month: 'short' })
    const text = `🍀 Irish Tools Daily Quiz — ${date}\n${final.score}/${questions.length}  ${final.grid}\nStreak: ${final.streak} 🔥`
    const res = await shareResult({
      title: 'Irish Tools Daily Quiz',
      text,
      url: 'https://irishtools.ie/#/quiz',
    })
    setShareMsg(res === 'copied' ? 'Copied to clipboard!' : res === 'shared' ? 'Shared!' : '')
  }

  if (phase === 'done' && final) {
    return (
      <section className="panel quiz">
        <span className="quiz__big" aria-hidden="true">
          {final.score === questions.length ? '🏆' : final.score >= 3 ? '🍀' : '🌱'}
        </span>
        <h2 className="quiz__result-title">
          {final.score}/{questions.length}
        </h2>
        <p className="quiz__grid" aria-hidden="true">{final.grid}</p>
        <p className="quiz__blurb">
          {final.score === questions.length
            ? 'Full house! You’re a credit to the parish.'
            : final.score >= 3
              ? 'Not a bother on ya. Grand work.'
              : 'Ah sure, you’ll get them tomorrow.'}
        </p>

        <div className="quiz__streak">
          <span className="quiz__streak-num">{final.streak} 🔥</span>
          <span className="quiz__streak-label">day streak</span>
        </div>

        <button className="btn btn--primary" onClick={onShare}>
          Share your score
        </button>
        {shareMsg && <p className="quiz__sharemsg">{shareMsg}</p>}

        <p className="quiz__tomorrow">
          Come back tomorrow for a new quiz — next one in {timeUntilTomorrow()}.
        </p>
      </section>
    )
  }

  return (
    <section className="panel quiz">
      <div className="quiz__progress">
        <span>
          Question {step + 1} of {questions.length}
        </span>
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

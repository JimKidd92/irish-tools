import { useState } from 'react'
import { celebrate } from '../lib/confetti.js'
import { shareResult } from '../lib/share.js'

// Each option carries points (0–2). Maximum honest Irishness: 24 points.
const QUESTIONS = [
  { q: 'Someone says “How are ya?” You say…', options: [
    { t: '“Grand, sure. Yourself?”', p: 2 }, { t: '“Good thanks, and you?”', p: 1 }, { t: 'A detailed health update', p: 0 } ] },
  { q: 'The immersion has been left on. You feel…', options: [
    { t: 'A deep ancestral panic', p: 2 }, { t: 'Mildly concerned about the bill', p: 1 }, { t: 'What’s an immersion?', p: 0 } ] },
  { q: 'It’s 23°C and sunny. This is…', options: [
    { t: '“Roasting. Splitting the stones.”', p: 2 }, { t: 'A nice warm day', p: 1 }, { t: 'A bit chilly, honestly', p: 0 } ] },
  { q: 'A stranger holds the door. You say thanks…', options: [
    { t: 'At least twice, possibly four times', p: 2 }, { t: 'Once, politely', p: 1 }, { t: 'A silent nod', p: 0 } ] },
  { q: 'Where do the good biscuits live?', options: [
    { t: 'Hidden from everyone, for visitors', p: 2 }, { t: 'In the cupboard with the rest', p: 1 }, { t: 'We don’t keep biscuits in', p: 0 } ] },
  { q: 'Someone offers you tea. The correct response is…', options: [
    { t: 'Refuse twice, then accept', p: 2 }, { t: 'Accept immediately', p: 1 }, { t: '“Do you have oat milk?”', p: 0 } ] },
  { q: 'You pass someone you vaguely know on a country road. You…', options: [
    { t: 'Lift one finger off the steering wheel', p: 2 }, { t: 'Wave properly', p: 1 }, { t: 'Avoid eye contact', p: 0 } ] },
  { q: '“I will yeah” means…', options: [
    { t: 'Absolutely not', p: 2 }, { t: 'Probably', p: 1 }, { t: 'Yes, definitely', p: 0 } ] },
  { q: 'The dinner is…', options: [
    { t: 'Spuds, and we’ll see after that', p: 2 }, { t: 'Sometimes potatoes', p: 1 }, { t: 'Rice or pasta mostly', p: 0 } ] },
  { q: 'How do you leave a party?', options: [
    { t: 'Announce it, then stay 90 more minutes at the door', p: 2 }, { t: 'Say goodbye and leave', p: 1 }, { t: 'Slip out silently', p: 0 } ] },
  { q: 'A funeral in the parish. You…', options: [
    { t: 'Go. You knew his cousin’s dog.', p: 2 }, { t: 'Go if family', p: 1 }, { t: 'Send a card', p: 0 } ] },
  { q: 'It starts raining sideways. You say…', options: [
    { t: '“Grand soft day all the same.”', p: 2 }, { t: '“Awful weather.”', p: 1 }, { t: 'Nothing, you’re indoors where it’s safe', p: 0 } ] },
]

const MAX = QUESTIONS.length * 2

function tier(pct) {
  if (pct >= 90) return { emoji: '☘️👑', title: 'Pure Irish to the bone', blurb: 'You’d refuse tea twice and still end up with a cup in your hand. Bualadh bos!' }
  if (pct >= 70) return { emoji: '🍀', title: 'More Irish than the Irish themselves', blurb: 'You’ve a finger-wave and a hidden biscuit tin. Mighty stuff.' }
  if (pct >= 50) return { emoji: '🇮🇪', title: 'A grand bit Irish', blurb: 'The roots are showing. A summer in the Gaeltacht would finish the job.' }
  if (pct >= 30) return { emoji: '🌱', title: 'A hint of the Emerald Isle', blurb: 'It’s in there somewhere — probably on your mother’s side.' }
  return { emoji: '🗺️', title: 'Irish at heart (honorary)', blurb: 'Sure aren’t we all a bit Irish on the right day. Welcome aboard.' }
}

export default function HowIrishTool() {
  const [step, setStep] = useState(0)
  const [points, setPoints] = useState(0)
  const [done, setDone] = useState(false)
  const [shareMsg, setShareMsg] = useState('')

  function answer(p) {
    const total = points + p
    if (step + 1 < QUESTIONS.length) {
      setPoints(total)
      setStep(step + 1)
    } else {
      setPoints(total)
      setDone(true)
      if (Math.round((total / MAX) * 100) >= 70) celebrate()
    }
  }

  function restart() {
    setStep(0)
    setPoints(0)
    setDone(false)
    setShareMsg('')
  }

  if (done) {
    const pct = Math.round((points / MAX) * 100)
    const t = tier(pct)
    return (
      <section className="panel quiz howirish">
        <span className="quiz__big" aria-hidden="true">{t.emoji}</span>
        <h2 className="quiz__result-title">{pct}% Irish</h2>
        <p className="quiz__blurb"><strong>{t.title}.</strong> {t.blurb}</p>
        <div className="mammy__buttons">
          <button
            className="btn btn--primary"
            onClick={async () => {
              const res = await shareResult({
                title: 'How Irish Are You?',
                text: `☘️ I'm ${pct}% Irish — “${t.title}”. How Irish are you?`,
                url: 'https://irishtools.ie/how-irish/',
              })
              setShareMsg(res === 'copied' ? 'Copied!' : res === 'shared' ? 'Shared!' : '')
            }}
          >
            Share your score
          </button>
          <button className="btn btn--ghost" onClick={restart}>
            Go again
          </button>
        </div>
        {shareMsg && <p className="quiz__sharemsg">{shareMsg}</p>}
      </section>
    )
  }

  const q = QUESTIONS[step]
  return (
    <section className="panel quiz howirish">
      <div className="quiz__progress">
        <span>Question {step + 1} of {QUESTIONS.length}</span>
        <div className="quiz__dots">
          {QUESTIONS.map((_, i) => (
            <span key={i} className={`quiz__dot ${i <= step ? 'is-on' : ''}`} />
          ))}
        </div>
      </div>
      <h2 className="quiz__question">{q.q}</h2>
      <ul className="quiz__options">
        {q.options.map((opt, i) => (
          <li key={i}>
            <button className="quiz__option" onClick={() => answer(opt.p)}>
              {opt.t}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

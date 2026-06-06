import { useState } from 'react'

// Escalating Mrs Doyle persistence. Each refusal cranks it up a notch.
const NAGS = [
  'Ah go on, you will.',
  'Go on, go on, go on, go on, go on!',
  'You will, you will, you will, you will!',
  'Sure you’ll have a small one.',
  'I have the kettle on already, look.',
  'Ah now, don’t be putting me to the trouble of asking again.',
  'Go on go on go on go on go on go on go on!',
  'You’re a terrible man, would ya not have the one cup.',
  'I’ll not take no for an answer, now.',
]

const NO_REPLIES = [
  'No thanks',
  'No, honestly',
  'I’m grand, really',
  'Ah no…',
  'Stop now',
  'Please…',
  'Mrs Doyle, no',
  'I give up',
]

export default function TeaTool() {
  const [refusals, setRefusals] = useState(0)
  const [gaveIn, setGaveIn] = useState(false)

  function refuse() {
    setRefusals((n) => n + 1)
  }

  function accept() {
    setGaveIn(true)
  }

  function reset() {
    setRefusals(0)
    setGaveIn(false)
  }

  if (gaveIn) {
    return (
      <section className="panel tea tea--won">
        <span className="tea__face" aria-hidden="true">😊☕</span>
        <h2 className="tea__line">Ah lovely. I’ll wet the tea.</h2>
        <p className="tea__sub">
          Sure you can’t beat a good cup. {refusals > 0 && `Took ${refusals} ask${refusals === 1 ? '' : 's'}, but I knew you would.`}
        </p>
        <button className="btn btn--ghost" onClick={reset}>
          Go again
        </button>
      </section>
    )
  }

  const nag = refusals === 0 ? 'Will ya have a cup of tea?' : NAGS[Math.min(refusals - 1, NAGS.length - 1)]
  const noLabel = NO_REPLIES[Math.min(refusals, NO_REPLIES.length - 1)]
  // The "no" button shrinks the more you refuse — she's wearing you down.
  const noScale = Math.max(0.55, 1 - refusals * 0.06)

  return (
    <section className="panel tea">
      <span className="tea__face" aria-hidden="true">{refusals > 4 ? '🫖😠' : '🫖'}</span>
      <h2 className="tea__line" aria-live="polite">{nag}</h2>
      {refusals > 0 && (
        <p className="tea__count">
          That’s {refusals} time{refusals === 1 ? '' : 's'} now she’s asked.
        </p>
      )}

      <div className="tea__buttons">
        <button className="btn btn--primary tea__yes" onClick={accept}>
          Ah go on then ☕
        </button>
        <button
          className="btn btn--ghost tea__no"
          style={{ transform: `scale(${noScale})` }}
          onClick={refuse}
        >
          {noLabel}
        </button>
      </div>
    </section>
  )
}

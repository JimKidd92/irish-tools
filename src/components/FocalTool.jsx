import { useState } from 'react'
import { FOCAL } from '../data/cuplaFocal.js'
import ShareButton from './ShareButton.jsx'

// Deterministic "of the day" pick based on the day of the year.
function focalOfTheDay() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((now - start) / 86400000)
  return dayOfYear % FOCAL.length
}

export default function FocalTool() {
  const [index, setIndex] = useState(focalOfTheDay)
  const [isToday, setIsToday] = useState(true)
  const focal = FOCAL[index]

  function another() {
    let i = index
    while (i === index) i = Math.floor(Math.random() * FOCAL.length)
    setIndex(i)
    setIsToday(false)
  }

  return (
    <section className="panel focal">
      <span className="focal__label">{isToday ? 'Focal an lae · Word of the day' : 'Cúpla focal'}</span>
      <h2 className="focal__irish" lang="ga" aria-live="polite">{focal.irish}</h2>
      <p className="focal__pron">“{focal.pron}”</p>
      <p className="focal__english">{focal.english}</p>

      <div className="focal__buttons">
        <button className="btn btn--ghost" onClick={another}>
          Another focal
        </button>
        <ShareButton
          url="https://irishtools.ie/#/focal"
          label="Share"
          text={`📖 Cúpla focal: “${focal.irish}” — ${focal.english} (${focal.pron})`}
        />
      </div>
    </section>
  )
}

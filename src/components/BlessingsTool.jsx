import { useState } from 'react'
import { BLESSINGS, BLESSING_CATEGORIES } from '../data/blessings.js'
import ShareButton from './ShareButton.jsx'

export default function BlessingsTool() {
  const [category, setCategory] = useState('luck')
  const [index, setIndex] = useState(0)

  const list = BLESSINGS[category]
  const blessing = list[index % list.length]

  function pick(key) {
    setCategory(key)
    setIndex(Math.floor(Math.random() * BLESSINGS[key].length))
  }

  function another() {
    setIndex((i) => (i + 1) % list.length)
  }

  return (
    <section className="panel blessings">
      <div className="spuds__appetite-options">
        {BLESSING_CATEGORIES.map((c) => (
          <button
            key={c.key}
            className={`spuds__chip ${category === c.key ? 'is-active' : ''}`}
            onClick={() => pick(c.key)}
          >
            {c.emoji} {c.label}
          </button>
        ))}
      </div>

      <blockquote className="blessings__text" aria-live="polite">
        {blessing.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </blockquote>

      <div className="mammy__buttons">
        <button className="btn btn--primary" onClick={another}>
          Another one
        </button>
        <ShareButton
          url="https://irishtools.ie/blessings/"
          label="Share"
          text={`🍀 An Irish blessing:\n\n${blessing}`}
        />
      </div>
    </section>
  )
}

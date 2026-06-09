import { useState } from 'react'
import { MAMMY_PHRASES } from '../data/mammyPhrases.js'
import ShareButton from './ShareButton.jsx'

function randomPhrase(exclude) {
  let p = exclude
  while (p === exclude) p = MAMMY_PHRASES[Math.floor(Math.random() * MAMMY_PHRASES.length)]
  return p
}

export default function MammyTool() {
  const [phrase, setPhrase] = useState(() => MAMMY_PHRASES[Math.floor(Math.random() * MAMMY_PHRASES.length)])

  return (
    <section className="panel mammy">
      <span className="mammy__quote-mark" aria-hidden="true">“</span>
      <blockquote className="mammy__quote" aria-live="polite">
        {phrase}
      </blockquote>

      <div className="mammy__buttons">
        <button className="btn btn--primary" onClick={() => setPhrase((p) => randomPhrase(p))}>
          Another one
        </button>
        <ShareButton
          url="https://irishtools.ie/mammy/"
          label="Share"
          text={`🗣️ Irish Mammy says: “${phrase}”`}
        />
      </div>
    </section>
  )
}

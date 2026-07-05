import { useMemo } from 'react'
import { goodFriday } from '../lib/holidays.js'
import ShareButton from './ShareButton.jsx'

function sameDay(a, b) {
  return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()
}

function assess(now = new Date()) {
  const isChristmas = now.getMonth() === 11 && now.getDate() === 25
  const isGoodFriday = sameDay(now, goodFriday(now.getFullYear()))

  if (isChristmas) {
    return {
      open: false,
      emoji: '🎄',
      title: 'No - it’s Christmas Day.',
      blurb: 'The pubs are shut for Christmas Day. Away home and have one out of the press.',
    }
  }
  if (isGoodFriday) {
    return {
      open: true,
      emoji: '🍺',
      title: 'Actually… yes!',
      blurb:
        'It’s Good Friday - but the drink ban was lifted back in 2018. The pubs are open. Sláinte!',
    }
  }
  return {
    open: true,
    emoji: '🍻',
    title: 'Of course it is!',
    blurb: 'Grand normal day. The pub’s open - off ya go and enjoy your pint.',
  }
}

export default function PubTool() {
  const result = useMemo(() => assess(), [])

  return (
    <section className={`panel pub ${result.open ? 'is-open' : 'is-closed'}`}>
      <span className="pub__emoji" aria-hidden="true">{result.emoji}</span>
      <h2 className="pub__title">{result.title}</h2>
      <p className="pub__blurb">{result.blurb}</p>
      <p className="pub__disclaimer">
        (Individual opening hours are up to each pub, mind - this is just the law of the land.)
      </p>
      <ShareButton
        url="https://irishtools.ie/pub/"
        text={`🍻 Can I get a pint today? ${result.title} ${result.blurb}`}
      />
    </section>
  )
}

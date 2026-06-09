import { useEffect, useState } from 'react'
import ShareButton from './ShareButton.jsx'

function irelandNow() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Dublin' }))
}

function fmt(d) {
  const h = d.getHours() % 12 || 12
  const m = String(d.getMinutes()).padStart(2, '0')
  return `${h}:${m}${d.getHours() >= 12 ? 'pm' : 'am'}`
}

// Whether it's a decent hour to ring someone in Ireland.
function verdict(hour) {
  if (hour >= 9 && hour < 21)
    return { emoji: '✅', title: 'Grand time to ring home', blurb: 'They’re up and about. Stick on the kettle talk.' }
  if (hour >= 21 && hour < 23)
    return { emoji: '🤔', title: 'Chance it', blurb: 'They’re probably watching the Nine O’Clock News — they’ll answer.' }
  if (hour >= 8 && hour < 9)
    return { emoji: '☕', title: 'They’re just up', blurb: 'Mid-breakfast. Go on, they’d love to hear from you.' }
  return { emoji: '😴', title: 'They’re asleep — hold off', blurb: 'Unless it’s urgent, let them sleep. Ring after 9am Irish time.' }
}

export default function RingHomeTool() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000)
    return () => clearInterval(id)
  }, [])

  const ie = irelandNow()
  const v = verdict(ie.getHours())

  // Hour difference between Ireland and the visitor, rounded to nearest half hour.
  const diffH = Math.round(((ie - now) / 3600000) * 2) / 2
  const diffLabel =
    diffH === 0
      ? 'You’re on Irish time already — are you home?!'
      : diffH > 0
        ? `Ireland is ${diffH} hour${Math.abs(diffH) === 1 ? '' : 's'} ahead of you`
        : `Ireland is ${Math.abs(diffH)} hour${Math.abs(diffH) === 1 ? '' : 's'} behind you`

  const ieDay = ie.toLocaleDateString('en-IE', { weekday: 'long' })

  return (
    <section className="panel ringhome">
      <span className="pub__emoji" aria-hidden="true">🇮🇪</span>
      <p className="focal__label">Right now in Ireland it’s</p>
      <h2 className="ringhome__time">{fmt(ie)}</h2>
      <p className="ringhome__day">{ieDay} · {diffLabel}</p>

      <div className={`ringhome__verdict ringhome__verdict--${v.emoji === '✅' ? 'go' : v.emoji === '😴' ? 'stop' : 'maybe'}`}>
        <span className="ringhome__verdict-emoji" aria-hidden="true">{v.emoji}</span>
        <strong className="ringhome__verdict-title">{v.title}</strong>
        <p className="ringhome__verdict-blurb">{v.blurb}</p>
      </div>

      <ShareButton
        url="https://irishtools.ie/ring-home/"
        text={`🇮🇪 It’s ${fmt(ie)} in Ireland right now — ${v.title.toLowerCase()}.`}
      />
    </section>
  )
}

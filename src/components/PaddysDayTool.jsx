import { useEffect, useMemo, useState } from 'react'
import { celebrate } from '../lib/confetti.js'
import ShareButton from './ShareButton.jsx'

function nextPaddysDay(from = new Date()) {
  const year = from.getFullYear()
  const thisYear = new Date(year, 2, 17) // 17 March
  const endOfDay = new Date(year, 2, 17, 23, 59, 59)
  if (from <= endOfDay) return thisYear
  return new Date(year + 1, 2, 17)
}

function isToday(d, now) {
  return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
}

export default function PaddysDayTool() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const target = useMemo(() => nextPaddysDay(new Date()), [])
  const today = isToday(target, now)

  useEffect(() => {
    if (today) celebrate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today])

  if (today) {
    return (
      <section className="panel paddys">
        <span className="paddys__big" aria-hidden="true">☘️🎉</span>
        <h2 className="paddys__title">LÁ FHÉILE PÁDRAIG SONA DUIT!</h2>
        <p className="paddys__sub">It’s St Patrick’s Day! Wear the green, mind the shamrock, and enjoy the day.</p>
        <ShareButton
          url="https://irishtools.ie/paddys-day/"
          text="☘️ Happy St Patrick's Day! Lá Fhéile Pádraig sona duit! 🎉"
        />
      </section>
    )
  }

  const ms = target - now
  const days = Math.floor(ms / 86400000)
  const hours = Math.floor((ms % 86400000) / 3600000)
  const mins = Math.floor((ms % 3600000) / 60000)
  const secs = Math.floor((ms % 60000) / 1000)

  return (
    <section className="panel paddys">
      <span className="paddys__big" aria-hidden="true">☘️</span>
      <p className="focal__label">Countdown to St Patrick’s Day {target.getFullYear()}</p>
      <div className="paddys__count">
        <div className="paddys__unit"><span className="paddys__num">{days}</span><span className="paddys__lab">days</span></div>
        <div className="paddys__unit"><span className="paddys__num">{hours}</span><span className="paddys__lab">hours</span></div>
        <div className="paddys__unit"><span className="paddys__num">{mins}</span><span className="paddys__lab">mins</span></div>
        <div className="paddys__unit"><span className="paddys__num">{secs}</span><span className="paddys__lab">secs</span></div>
      </div>
      <p className="paddys__sub">
        {days > 200
          ? 'A fair oul wait — but sure it’ll fly.'
          : days > 60
            ? 'Getting closer. Time to plan the green outfit.'
            : days > 7
              ? 'Nearly there! Dust off the shamrock.'
              : 'IT’S NEARLY HERE. Iron the green jumper!'}
      </p>
      <ShareButton
        url="https://irishtools.ie/paddys-day/"
        text={`☘️ Only ${days} days to St Patrick's Day ${target.getFullYear()}!`}
      />
    </section>
  )
}

import { useMemo } from 'react'
import { upcomingHolidays, formatHolidayDate } from '../lib/holidays.js'
import ShareButton from './ShareButton.jsx'

export default function BankHolidayTool() {
  const upcoming = useMemo(() => upcomingHolidays(), [])
  const next = upcoming[0]
  const rest = upcoming.slice(1, 6)

  const countdown =
    next.daysUntil === 0
      ? 'It’s today! 🎉'
      : next.daysUntil === 1
        ? 'Tomorrow!'
        : `${next.daysUntil} days to go`

  return (
    <section className="panel bankhol">
      <div className="bankhol__next">
        <span className="bankhol__emoji" aria-hidden="true">{next.emoji}</span>
        <span className="bankhol__count">{countdown}</span>
        <h2 className="bankhol__name">{next.name}</h2>
        <p className="bankhol__date">{formatHolidayDate(next.date)}</p>
      </div>

      <ShareButton
        url="https://irishtools.ie/bank-holiday/"
        text={`🗓️ Next Irish bank holiday: ${next.name} - ${countdown} (${formatHolidayDate(next.date)}).`}
      />

      <h3 className="bankhol__heading">Then after that…</h3>
      <ul className="bankhol__list">
        {rest.map((h, i) => (
          <li key={i} className="bankhol__row">
            <span className="bankhol__row-emoji" aria-hidden="true">{h.emoji}</span>
            <span className="bankhol__row-name">{h.name}</span>
            <span className="bankhol__row-date">
              {h.date.toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="bankhol__row-days">{h.daysUntil}d</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

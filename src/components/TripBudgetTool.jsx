import { useEffect, useState } from 'react'
import ShareButton from './ShareButton.jsx'

// Live ECB rates from the free, keyless Frankfurter API, with static fallbacks
// (approximate) so the tool still works offline.
const CURRENCIES = {
  USD: { label: 'US Dollar $', fallback: 0.92 },
  GBP: { label: 'British Pound £', fallback: 1.17 },
  CAD: { label: 'Canadian $', fallback: 0.67 },
  AUD: { label: 'Australian $', fallback: 0.60 },
}

// What things roughly cost on a trip (EUR).
const COSTS = [
  { emoji: '🍺', label: 'Pint of stout', eur: 6.0 },
  { emoji: '☕', label: 'Tea & scone', eur: 7.5 },
  { emoji: '🍲', label: 'Pub lunch', eur: 18 },
  { emoji: '🛏️', label: 'B&B per night', eur: 120 },
  { emoji: '🚗', label: 'Day’s car hire', eur: 55 },
  { emoji: '🏰', label: 'Castle admission', eur: 16 },
]

export default function TripBudgetTool() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState('500')
  const [rates, setRates] = useState(null) // { USD: 0.93, ... } → EUR
  const [live, setLive] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('https://api.frankfurter.dev/v1/latest?from=EUR&to=USD,GBP,CAD,AUD')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (cancelled) return
        // Invert: data.rates is EUR→X, we want X→EUR.
        const inv = {}
        for (const [k, v] of Object.entries(data.rates)) inv[k] = 1 / v
        setRates(inv)
        setLive(true)
      })
      .catch(() => {
        /* fall back to static rates */
      })
    return () => {
      cancelled = true
    }
  }, [])

  const rate = rates?.[currency] ?? CURRENCIES[currency].fallback
  const value = parseFloat(amount)
  const eur = !isNaN(value) && value > 0 ? value * rate : null

  return (
    <section className="panel tripbudget">
      <div className="spuds__appetite-options">
        {Object.entries(CURRENCIES).map(([key, c]) => (
          <button
            key={key}
            className={`spuds__chip ${currency === key ? 'is-active' : ''}`}
            onClick={() => setCurrency(key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="pints__amount">
        <input
          type="number"
          inputMode="decimal"
          min="0"
          className="loc-search__input pints__input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="Amount to convert"
        />
      </div>

      {eur !== null && (
        <div className="tripbudget__result" aria-live="polite">
          <span className="pints__big">€{eur.toFixed(0)}</span>
          <span className="pints__unit">
            at {rate.toFixed(3)} {live ? '(today’s ECB rate)' : '(approx. rate)'}
          </span>

          <h3 className="tripbudget__heading">What that gets you over here:</h3>
          <ul className="tripbudget__costs">
            {COSTS.map((c) => (
              <li key={c.label}>
                <span className="tripbudget__emoji" aria-hidden="true">{c.emoji}</span>
                <span className="tripbudget__label">{c.label}</span>
                <span className="tripbudget__n">×{Math.floor(eur / c.eur)}</span>
              </li>
            ))}
          </ul>
          <p className="pints__basis">Rough average prices — Dublin will sting ya a bit more.</p>

          <ShareButton
            url="https://irishtools.ie/trip-budget/"
            text={`💶 My Ireland trip budget: ${CURRENCIES[currency].label.split(' ')[0]} ${value} ≈ €${eur.toFixed(0)} — that’s ${Math.floor(eur / 6)} pints, like.`}
          />
        </div>
      )}
    </section>
  )
}

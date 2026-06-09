import { useState } from 'react'
import ShareButton from './ShareButton.jsx'

// Rough average pint prices (€). Dublin's a fair bit dearer than the country.
const PINT_PRICES = {
  dublin: { label: 'Dublin', price: 6.8 },
  country: { label: 'Rest of Ireland', price: 5.8 },
}

export default function PintsTool() {
  const [amount, setAmount] = useState('')
  const [where, setWhere] = useState('dublin')

  const price = PINT_PRICES[where].price
  const value = parseFloat(amount)
  const pints = !isNaN(value) && value > 0 ? value / price : null

  function comment(n) {
    if (n < 1) return 'Sure that wouldn’t even get you a sup.'
    if (n < 3) return 'A grand quiet few, like.'
    if (n < 6) return 'A fair oul session in the making.'
    if (n < 12) return 'Now we’re talking. Mind yourself.'
    return 'Lord above. That’s a serious night out.'
  }

  return (
    <section className="panel pints">
      <div className="pints__inputs">
        <div className="pints__amount">
          <span className="pints__euro">€</span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            className="loc-search__input pints__input"
            placeholder="45"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Amount in euro"
          />
        </div>
        <div className="pints__where">
          {Object.entries(PINT_PRICES).map(([key, p]) => (
            <button
              key={key}
              className={`spuds__chip ${where === key ? 'is-active' : ''}`}
              onClick={() => setWhere(key)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {pints !== null ? (
        <div className="pints__result" aria-live="polite">
          <span className="pints__big">🍺 {pints < 10 ? 'about ' : ''}{Math.round(pints)}</span>
          <span className="pints__unit">{Math.round(pints) === 1 ? 'pint' : 'pints'}, like</span>
          <p className="pints__note">{comment(pints)}</p>
          <p className="pints__basis">
            Based on €{price.toFixed(2)} a pint in {PINT_PRICES[where].label.toLowerCase()}.
          </p>
          <ShareButton
            url="https://irishtools.ie/pints/"
            text={`🍺 €${value.toFixed(2)} is about ${Math.round(pints)} pints, like. (Irish Tools)`}
          />
        </div>
      ) : (
        <p className="weather-hint">
          Type in any amount and we’ll tell you what it’s really worth — in pints.
        </p>
      )}
    </section>
  )
}

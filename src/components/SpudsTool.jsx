import { useState } from 'react'

// Appetite multipliers. The Irish Mammy setting always makes far too many,
// because you'd never be caught short.
const APPETITES = {
  light: { label: 'Light enough', factor: 0.75, quip: 'Watching the figures, are we?' },
  normal: { label: 'Normal', factor: 1, quip: 'A grand feed for all.' },
  big: { label: 'Big eaters', factor: 1.4, quip: 'Hungry crowd — pile them high.' },
  mammy: {
    label: 'Irish Mammy',
    factor: 1.9,
    quip: 'Sure you’d never have too many. There’ll be leftovers for the week.',
  },
}

const PER_ADULT = 3 // medium spuds per adult at a normal appetite
const SPUD_GRAMS = 150 // average medium potato

export default function SpudsTool() {
  const [adults, setAdults] = useState(4)
  const [kids, setKids] = useState(0)
  const [appetite, setAppetite] = useState('normal')

  const { factor, quip } = APPETITES[appetite]
  const base = adults * PER_ADULT + kids * PER_ADULT * 0.5
  const spuds = Math.max(0, Math.ceil(base * factor) + 2) // always a couple extra
  const kg = ((spuds * SPUD_GRAMS) / 1000).toFixed(1)

  return (
    <section className="panel spuds">
      <div className="spuds__controls">
        <Stepper label="Adults" value={adults} setValue={setAdults} min={0} />
        <Stepper label="Children" value={kids} setValue={setKids} min={0} />
      </div>

      <div className="spuds__appetite">
        <span className="spuds__appetite-label">Appetite</span>
        <div className="spuds__appetite-options">
          {Object.entries(APPETITES).map(([key, a]) => (
            <button
              key={key}
              className={`spuds__chip ${appetite === key ? 'is-active' : ''}`}
              onClick={() => setAppetite(key)}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="spuds__result" aria-live="polite">
        <span className="spuds__big">🥔 {spuds}</span>
        <span className="spuds__unit">spuds</span>
        <p className="spuds__weight">that’s about {kg} kg of potatoes</p>
        <p className="spuds__quip">{quip}</p>
      </div>
    </section>
  )
}

function Stepper({ label, value, setValue, min = 0 }) {
  return (
    <div className="stepper">
      <span className="stepper__label">{label}</span>
      <div className="stepper__controls">
        <button
          className="stepper__btn"
          onClick={() => setValue((v) => Math.max(min, v - 1))}
          aria-label={`Fewer ${label}`}
        >
          −
        </button>
        <span className="stepper__value">{value}</span>
        <button
          className="stepper__btn"
          onClick={() => setValue((v) => v + 1)}
          aria-label={`More ${label}`}
        >
          +
        </button>
      </div>
    </div>
  )
}

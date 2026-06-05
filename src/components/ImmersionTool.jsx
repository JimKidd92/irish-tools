import { useEffect, useState } from 'react'

const STORAGE_KEY = 'irish-tools.immersion'

// Read the saved state once on load. Shape: { on: boolean, since: number|null }
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { on: false, since: null }
    const parsed = JSON.parse(raw)
    return { on: !!parsed.on, since: parsed.since ?? null }
  } catch {
    return { on: false, since: null }
  }
}

function formatDuration(ms) {
  const totalMinutes = Math.floor(ms / 60000)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  if (hours > 0) return `${hours}h ${minutes}m`
  if (minutes > 0) return `${minutes}m`
  return 'less than a minute'
}

export default function ImmersionTool() {
  const [state, setState] = useState(loadState)
  const [now, setNow] = useState(Date.now())

  // Persist whenever state changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage might be unavailable (private mode) — no harm done */
    }
  }, [state])

  // Tick the "on for..." timer while the immersion is on.
  useEffect(() => {
    if (!state.on) return
    const id = setInterval(() => setNow(Date.now()), 30000)
    setNow(Date.now())
    return () => clearInterval(id)
  }, [state.on])

  function toggle() {
    setState((prev) =>
      prev.on ? { on: false, since: null } : { on: true, since: Date.now() },
    )
  }

  const isOn = state.on
  const onFor = isOn && state.since ? formatDuration(now - state.since) : null

  return (
    <section className={`immersion ${isOn ? 'is-on' : 'is-off'}`} aria-live="polite">
      <div className="immersion__panel">
        <div className="immersion__label-row">
          <span className="immersion__label">WATER HEATING</span>
          <span className="immersion__label immersion__label--muted">IMMERSION</span>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={isOn}
          aria-label="Toggle the immersion"
          className="immersion__switch"
          onClick={toggle}
        >
          <span className="immersion__neon" aria-hidden="true" />
          <span className="immersion__rocker">
            <span className="immersion__rocker-top">I</span>
            <span className="immersion__rocker-bottom">O</span>
          </span>
        </button>

        <div className="immersion__sublabel-row">
          <span className="immersion__sublabel">BATH</span>
          <span className="immersion__sublabel">SINK</span>
        </div>
      </div>

      <div className="immersion__verdict">
        {isOn ? (
          <>
            <h2 className="immersion__status immersion__status--on">
              The immersion is <strong>ON</strong> 🔥
            </h2>
            <p className="immersion__detail">
              On for <strong>{onFor}</strong>. Turn it off before you bankrupt the
              whole house, would ya.
            </p>
          </>
        ) : (
          <>
            <h2 className="immersion__status immersion__status--off">
              The immersion is <strong>OFF</strong> ✓
            </h2>
            <p className="immersion__detail">
              Grand so. Your ESB bill is safe for another while.
            </p>
          </>
        )}
        <p className="immersion__hint">Tap the switch to update.</p>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { SURNAMES } from '../data/surnames.js'
import { tools } from '../data/tools.js'
import { PLACES } from '../data/places.js'
import generatedPlaces from '../data/places.generated.json'

const placeCount = Math.floor((PLACES.length + generatedPlaces.length) / 10) * 10

const STATS = [
  { target: tools.filter((t) => t.live).length, suffix: '', label: 'handy tools' },
  { target: 32, suffix: '', label: 'counties' },
  { target: SURNAMES.length, suffix: '', label: 'surname origins' },
  { target: placeCount, suffix: '+', label: 'places to visit' },
]

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Stat({ target, suffix, label, run }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    if (reduceMotion()) {
      setN(target)
      return
    }
    let raf
    const dur = 1200
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target])

  return (
    <div className="stat">
      <span className="stat__num">
        {n}
        {suffix}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function StatsStrip() {
  const ref = useRef(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats reveal" ref={ref} aria-label="Irish Tools by the numbers">
      <div className="stats__inner">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  )
}

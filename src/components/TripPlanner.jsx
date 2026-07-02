import { useEffect, useMemo, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Plus, X, ChevronUp, ChevronDown, Printer, Plane, MapPin } from 'lucide-react'
import { PLACES } from '../data/places.js'
import generated from '../data/places.generated.json'
import { quizEnabled, getToken, getUserData, putUserData, shareTrip, getSharedTrip } from '../lib/quizApi.js'

const STORAGE_KEY = 'irish-tools.trip'

const EMPTY_TRIP = {
  name: 'My Trip to Ireland',
  arrive: '',
  depart: '',
  flightIn: '',
  flightOut: '',
  stay: '',
  days: [{ stops: [] }],
}

function loadTrip() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (raw && Array.isArray(raw.days)) return { ...EMPTY_TRIP, ...raw }
  } catch {
    /* ignore */
  }
  return EMPTY_TRIP
}

const uid = () => Math.random().toString(36).slice(2, 9)

function dayLabel(arrive, index) {
  if (!arrive) return `Day ${index + 1}`
  const d = new Date(arrive)
  if (isNaN(d)) return `Day ${index + 1}`
  d.setDate(d.getDate() + index)
  return `Day ${index + 1} · ${d.toLocaleDateString('en-IE', { weekday: 'short', day: 'numeric', month: 'short' })}`
}

export default function TripPlanner() {
  // A shared read-only trip link (?trip=CODE) shows the snapshot view instead.
  const sharedCode = useMemo(() => {
    try {
      return new URLSearchParams(window.location.search).get('trip')
    } catch {
      return null
    }
  }, [])
  if (sharedCode) return <SharedTripView code={sharedCode} />
  return <TripEditor />
}

function TripEditor() {
  const [trip, setTrip] = useState(loadTrip)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trip))
    } catch {
      /* storage unavailable — grand */
    }
  }, [trip])

  // Curated highlights first, then the rest of the Wikidata places, de-duped.
  const allPlaces = useMemo(() => {
    const seen = new Set(PLACES.map((p) => p.name.toLowerCase()))
    return [...PLACES, ...generated.filter((p) => !seen.has(p.name.toLowerCase()))]
  }, [])

  function set(patch) {
    setTrip((t) => ({ ...t, ...patch }))
  }

  function setupDaysFromDates() {
    if (!trip.arrive || !trip.depart) return
    const a = new Date(trip.arrive)
    const b = new Date(trip.depart)
    const count = Math.max(1, Math.round((b - a) / 86400000) + 1)
    setTrip((t) => {
      const days = []
      for (let i = 0; i < count; i++) days.push(t.days[i] || { stops: [] })
      return { ...t, days }
    })
  }

  function addDay() {
    setTrip((t) => ({ ...t, days: [...t.days, { stops: [] }] }))
  }

  function removeDay(di) {
    setTrip((t) => ({ ...t, days: t.days.filter((_, i) => i !== di) }))
  }

  function addStop(di, stop) {
    setTrip((t) => {
      const days = t.days.map((d, i) =>
        i === di ? { ...d, stops: [...d.stops, { id: uid(), ...stop }] } : d,
      )
      return { ...t, days }
    })
  }

  function removeStop(di, sid) {
    setTrip((t) => {
      const days = t.days.map((d, i) =>
        i === di ? { ...d, stops: d.stops.filter((s) => s.id !== sid) } : d,
      )
      return { ...t, days }
    })
  }

  function moveStop(di, idx, dir) {
    setTrip((t) => {
      const stops = [...t.days[di].stops]
      const j = idx + dir
      if (j < 0 || j >= stops.length) return t
      ;[stops[idx], stops[j]] = [stops[j], stops[idx]]
      const days = t.days.map((d, i) => (i === di ? { ...d, stops } : d))
      return { ...t, days }
    })
  }

  function resetTrip() {
    if (confirm('Clear this trip and start over?')) setTrip(EMPTY_TRIP)
  }

  const allStops = trip.days.flatMap((d) => d.stops)
  const mapped = allStops.filter((s) => s.lat && s.lng)

  return (
    <section className="planner">
      <div className="planner__head no-print">
        <input
          className="planner__name loc-search__input"
          value={trip.name}
          onChange={(e) => set({ name: e.target.value })}
          aria-label="Trip name"
        />
        <button className="btn btn--ghost" onClick={() => window.print()}>
          <Printer size={16} strokeWidth={1.75} aria-hidden="true" /> Print / PDF
        </button>
      </div>
      <h1 className="planner__name-print">{trip.name}</h1>

      <div className="planner__meta">
        <Field label="Arrive" type="date" value={trip.arrive} onChange={(v) => set({ arrive: v })} />
        <Field label="Depart" type="date" value={trip.depart} onChange={(v) => set({ depart: v })} />
        <Field label="Flight in" value={trip.flightIn} onChange={(v) => set({ flightIn: v })} placeholder="e.g. EI 134, lands DUB 11:20" />
        <Field label="Flight out" value={trip.flightOut} onChange={(v) => set({ flightOut: v })} placeholder="e.g. EI 133, 14:05" />
        <Field label="Staying at" value={trip.stay} onChange={(v) => set({ stay: v })} placeholder="Hotel / B&B / address" wide />
      </div>

      {trip.arrive && trip.depart && (
        <button className="btn btn--ghost planner__setup no-print" onClick={setupDaysFromDates}>
          Set up {Math.max(1, Math.round((new Date(trip.depart) - new Date(trip.arrive)) / 86400000) + 1)} days from my dates
        </button>
      )}

      {mapped.length > 0 && <ItineraryMap stops={mapped} />}

      <div className="planner__days">
        {trip.days.map((day, di) => (
          <DayCard
            key={di}
            label={dayLabel(trip.arrive, di)}
            day={day}
            allPlaces={allPlaces}
            canRemove={trip.days.length > 1}
            onAddStop={(stop) => addStop(di, stop)}
            onRemoveStop={(sid) => removeStop(di, sid)}
            onMoveStop={(idx, dir) => moveStop(di, idx, dir)}
            onRemoveDay={() => removeDay(di)}
          />
        ))}
      </div>

      <div className="planner__actions no-print">
        <button className="btn btn--primary" onClick={addDay}>
          <Plus size={16} strokeWidth={2} aria-hidden="true" /> Add a day
        </button>
        <button className="btn btn--ghost" onClick={resetTrip}>
          Clear trip
        </button>
      </div>

      <TripCloud trip={trip} setTrip={setTrip} />
    </section>
  )
}

// Account sync + share controls (uses the quiz sign-in). Falls back to a plain
// "saved on this device" note when the backend isn't configured or signed out.
function TripCloud({ trip, setTrip }) {
  const signedIn = quizEnabled() && Boolean(getToken())
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)

  if (!signedIn) {
    return (
      <p className="planner__saved no-print">
        Saved automatically on this device. Sign in on the Daily Quiz to keep trips on your
        account and share them with family.
      </p>
    )
  }

  function flash(m) {
    setMsg(m)
    setTimeout(() => setMsg(''), 3500)
  }

  async function save() {
    setBusy(true)
    try {
      await putUserData('trip', trip)
      flash('✓ Saved to your account')
    } catch (e) {
      flash(e.message || 'Could not save')
    } finally {
      setBusy(false)
    }
  }

  async function load() {
    setBusy(true)
    try {
      const d = await getUserData('trip')
      if (d.value && Array.isArray(d.value.days)) {
        setTrip({ ...EMPTY_TRIP, ...d.value })
        flash('✓ Loaded your saved trip')
      } else {
        flash('No trip saved on your account yet')
      }
    } catch (e) {
      flash(e.message || 'Could not load')
    } finally {
      setBusy(false)
    }
  }

  async function share() {
    setBusy(true)
    try {
      const { code } = await shareTrip(trip)
      const url = `https://irishtools.ie/planner/?trip=${code}`
      try {
        await navigator.clipboard.writeText(url)
        flash('🔗 Share link copied — send it to the family!')
      } catch {
        flash(`Share link: ${url}`)
      }
    } catch (e) {
      flash(e.message || 'Could not share')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="planner__cloud no-print">
      <button className="btn btn--ghost" onClick={save} disabled={busy}>☁️ Save to my account</button>
      <button className="btn btn--ghost" onClick={load} disabled={busy}>Load my saved trip</button>
      <button className="btn btn--primary" onClick={share} disabled={busy}>🔗 Share this trip</button>
      {msg && <span className="planner__cloud-msg">{msg}</span>}
    </div>
  )
}

// Read-only view of a shared trip (irishtools.ie/planner/?trip=CODE).
function SharedTripView({ code }) {
  const [state, setState] = useState({ status: 'loading' })

  useEffect(() => {
    getSharedTrip(code)
      .then((d) => setState({ status: 'ready', trip: { ...EMPTY_TRIP, ...d.trip } }))
      .catch(() => setState({ status: 'error' }))
  }, [code])

  if (state.status === 'loading') {
    return <section className="planner"><p className="weather-status">Loading the trip…</p></section>
  }
  if (state.status === 'error') {
    return (
      <section className="planner">
        <p className="weather-status weather-status--error">
          That trip link wasn’t found — it may have been removed.
        </p>
      </section>
    )
  }

  const trip = state.trip
  const mapped = trip.days.flatMap((d) => d.stops).filter((s) => s.lat && s.lng)

  function copyIntoPlanner() {
    if (!confirm('Copy this trip into your own planner? It will replace any trip you have in progress.')) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trip))
    } catch {
      /* ignore */
    }
    window.location.href = '/planner/'
  }

  return (
    <section className="planner planner--shared">
      <p className="planner__shared-badge no-print">👀 You’re viewing a shared trip (read-only)</p>
      <h1 className="planner__name-print">{trip.name}</h1>
      <div className="planner__shared-meta">
        {trip.arrive && trip.depart && (
          <p>
            <Plane size={15} aria-hidden="true" /> {trip.arrive} → {trip.depart}
            {trip.flightIn ? ` · ${trip.flightIn}` : ''}
          </p>
        )}
        {trip.stay && (
          <p>
            <MapPin size={15} aria-hidden="true" /> Staying: {trip.stay}
          </p>
        )}
      </div>

      {mapped.length > 0 && <ItineraryMap stops={mapped} />}

      <div className="planner__days">
        {trip.days.map((day, di) => (
          <div key={di} className="day-card">
            <div className="day-card__head">
              <h2 className="day-card__title">{dayLabel(trip.arrive, di)}</h2>
            </div>
            {day.stops.length === 0 ? (
              <p className="day-card__empty">Nothing planned.</p>
            ) : (
              <ol className="day-card__stops">
                {day.stops.map((s) => (
                  <li key={s.id} className="day-card__stop">
                    <span className="day-card__stop-name">{s.name}</span>
                    {s.county && <span className="day-card__stop-county">{s.county}</span>}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>

      <div className="planner__actions no-print">
        <button className="btn btn--primary" onClick={copyIntoPlanner}>Copy into my planner</button>
        <button className="btn btn--ghost" onClick={() => window.print()}>
          <Printer size={16} strokeWidth={1.75} aria-hidden="true" /> Print / PDF
        </button>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', placeholder, wide }) {
  return (
    <label className={`planner__field ${wide ? 'planner__field--wide' : ''}`}>
      <span className="planner__field-label">{label}</span>
      <input
        className="loc-search__input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

function DayCard({ label, day, allPlaces, canRemove, onAddStop, onRemoveStop, onMoveStop, onRemoveDay }) {
  const [query, setQuery] = useState('')

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    return allPlaces.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6)
  }, [query, allPlaces])

  function pick(p) {
    onAddStop({ name: p.name, lat: p.lat, lng: p.lng, county: p.county })
    setQuery('')
  }

  function addCustom() {
    const v = query.trim()
    if (!v) return
    onAddStop({ name: v, custom: true })
    setQuery('')
  }

  return (
    <div className="day-card">
      <div className="day-card__head">
        <h2 className="day-card__title">{label}</h2>
        {canRemove && (
          <button className="day-card__remove no-print" onClick={onRemoveDay} aria-label="Remove day">
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      {day.stops.length === 0 && <p className="day-card__empty">Nothing planned yet.</p>}

      <ol className="day-card__stops">
        {day.stops.map((s, idx) => (
          <li key={s.id} className="day-card__stop">
            <span className="day-card__num">{idx + 1}</span>
            <span className="day-card__stop-name">
              {s.name}
              {s.county && <span className="day-card__county"> · {s.county}</span>}
            </span>
            <span className="day-card__stop-controls no-print">
              <button onClick={() => onMoveStop(idx, -1)} aria-label="Move up" disabled={idx === 0}>
                <ChevronUp size={16} />
              </button>
              <button onClick={() => onMoveStop(idx, 1)} aria-label="Move down" disabled={idx === day.stops.length - 1}>
                <ChevronDown size={16} />
              </button>
              <button onClick={() => onRemoveStop(s.id)} aria-label="Remove stop">
                <X size={16} />
              </button>
            </span>
          </li>
        ))}
      </ol>

      <div className="day-card__add no-print">
        <input
          className="loc-search__input"
          placeholder="Add a place or activity…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && matches.length === 0) addCustom()
          }}
        />
        {query.trim().length >= 2 && (
          <div className="day-card__results">
            {matches.map((p) => (
              <button key={p.name} className="day-card__result" onClick={() => pick(p)}>
                <MapPin size={14} aria-hidden="true" /> {p.name}
                {p.county && <span className="day-card__county"> · {p.county}</span>}
              </button>
            ))}
            <button className="day-card__result day-card__result--custom" onClick={addCustom}>
              <Plus size={14} aria-hidden="true" /> Add “{query.trim()}” as your own
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ItineraryMap({ stops }) {
  const el = useRef(null)
  const map = useRef(null)
  const layer = useRef(null)

  useEffect(() => {
    if (map.current || !el.current) return
    map.current = L.map(el.current, { scrollWheelZoom: false }).setView([53.4, -8], 6)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map.current)
    layer.current = L.layerGroup().addTo(map.current)
    setTimeout(() => map.current && map.current.invalidateSize(), 120)
    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  useEffect(() => {
    if (!layer.current) return
    layer.current.clearLayers()
    const latlngs = []
    stops.forEach((s, i) => {
      const icon = L.divIcon({ className: 'trip-pin', html: `${i + 1}`, iconSize: [24, 24] })
      L.marker([s.lat, s.lng], { icon }).bindPopup(s.name).addTo(layer.current)
      latlngs.push([s.lat, s.lng])
    })
    if (latlngs.length === 1) map.current.setView(latlngs[0], 9)
    else if (latlngs.length > 1) map.current.fitBounds(latlngs, { padding: [30, 30] })
  }, [stops])

  return <div ref={el} className="planner__map no-print" />
}

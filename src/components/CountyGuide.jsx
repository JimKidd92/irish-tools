import { useState } from 'react'
import { COUNTIES, PROVINCES } from '../data/counties.js'
import { PLACES } from '../data/places.js'
import { navigate } from '../hooks/useHashRoute.js'
import ShareButton from './ShareButton.jsx'

export default function CountyGuide() {
  const [selected, setSelected] = useState(null)
  const county = selected ? COUNTIES.find((c) => c.name === selected) : null

  if (county) {
    const places = PLACES.filter((p) => p.county === county.name)
    return (
      <section className="panel county">
        <button className="back-link" onClick={() => setSelected(null)}>
          ← All counties
        </button>

        <div className="county__detail">
          <h2 className="county__name">{county.name}</h2>
          <p className="county__irish" lang="ga">{county.irish}</p>
          <p className="county__nick">“{county.nickname}” · {county.province}</p>
          <p className="county__blurb">{county.blurb}</p>
          <p className="county__town">
            <strong>County town:</strong> {county.town}
          </p>

          {places.length > 0 && (
            <div className="county__places">
              <h3 className="county__places-title">Places to visit in {county.name}</h3>
              <ul>
                {places.map((p) => (
                  <li key={p.name}>
                    <strong>{p.name}</strong> — {p.blurb}
                  </li>
                ))}
              </ul>
              <button className="btn btn--ghost" onClick={() => navigate('places')}>
                See them on the map →
              </button>
            </div>
          )}

          <ShareButton
            url="https://irishtools.ie/#/counties"
            text={`☘️ ${county.name} (${county.irish}) — “${county.nickname}”, in ${county.province}. ${county.blurb}`}
          />
        </div>
      </section>
    )
  }

  return (
    <section className="panel county">
      <p className="weather-hint">
        Pick a county to discover its Irish name, nickname, county town and what to see —
        a grand way to trace where your people came from.
      </p>
      {PROVINCES.map((province) => (
        <div key={province} className="county__province">
          <h3 className="county__province-title">{province}</h3>
          <div className="county__chips">
            {COUNTIES.filter((c) => c.province === province).map((c) => (
              <button key={c.name} className="county__chip" onClick={() => setSelected(c.name)}>
                {c.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

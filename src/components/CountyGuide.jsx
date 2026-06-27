import { useEffect, useState } from 'react'
import { COUNTIES, PROVINCES } from '../data/counties.js'
import { COUNTY_ABOUT } from '../data/countiesAbout.js'
import { PLACES } from '../data/places.js'
import { SURNAMES } from '../data/surnames.js'
import countyInfo from '../data/counties.generated.json'
import { slugify, findBySlug } from '../lib/slug.js'
import { setHead } from '../lib/head.js'
import { navigate } from '../hooks/useHashRoute.js'
import ShareButton from './ShareButton.jsx'

export default function CountyGuide({ slug }) {
  const [selected, setSelected] = useState(() => findBySlug(COUNTIES, slug, 'name')?.name || null)

  useEffect(() => {
    const c = findBySlug(COUNTIES, slug, 'name')
    setSelected(c?.name || null)
    if (c) {
      setHead({
        title: `County ${c.name} Guide — ${c.nickname} · Irish Tools`,
        description: `${c.name} (${c.irish}), “${c.nickname}”, in the province of ${c.province}. ${c.blurb}`,
        canonical: `https://irishtools.ie/counties/${slugify(c.name)}/`,
      })
    }
  }, [slug])

  const county = selected ? COUNTIES.find((c) => c.name === selected) : null

  if (county) {
    const places = PLACES.filter((p) => p.county === county.name)
    const info = countyInfo[county.name] || {}
    // Surnames whose stronghold includes this county — the roots cross-link.
    const surnames = SURNAMES.filter((s) => s.region.includes(county.name)).slice(0, 12)
    return (
      <section className="panel county">
        <button className="back-link" onClick={() => navigate('counties')}>
          ← All counties
        </button>

        {info.image && (
          <img className="county__hero" src={info.image} alt={`Scenery in County ${county.name}`} loading="lazy" />
        )}

        <div className="county__detail">
          <h2 className="county__name">{county.name}</h2>
          <p className="county__irish" lang="ga">{county.irish}</p>
          <p className="county__nick">“{county.nickname}” · {county.province}</p>
          <p className="county__blurb">{county.blurb}</p>
          <p className="county__town">
            <strong>County town:</strong> {county.town}
          </p>

          {COUNTY_ABOUT[county.name] && (
            <p className="county__about">{COUNTY_ABOUT[county.name]}</p>
          )}

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

          {surnames.length > 0 && (
            <div className="related">
              <h3 className="related__title">Surnames from {county.name}</h3>
              <div className="related__chips">
                {surnames.map((s) => (
                  <button
                    key={s.name}
                    className="related__chip"
                    onClick={() => navigate('surnames', slugify(s.name))}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <ShareButton
            url={`https://irishtools.ie/counties/${slugify(county.name)}/`}
            text={`☘️ ${county.name} (${county.irish}) — “${county.nickname}”, in ${county.province}. ${county.blurb}`}
          />

          {info.wikiUrl && (
            <p className="county__source">
              Photo & info via{' '}
              <a href={info.wikiUrl} target="_blank" rel="noopener noreferrer">
                Wikipedia
              </a>{' '}
              / Wikimedia Commons.
            </p>
          )}
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
              <button
                key={c.name}
                className="county__chip"
                onClick={() => navigate('counties', slugify(c.name))}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

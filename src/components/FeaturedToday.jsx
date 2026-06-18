import { useEffect, useState } from 'react'
import { BookOpen, MessageSquare, CalendarDays, ChevronRight, Beer } from 'lucide-react'
import { navigate } from '../hooks/useHashRoute.js'
import { FOCAL } from '../data/cuplaFocal.js'
import { SLANG } from '../data/slang.js'
import { COUNTIES } from '../data/counties.js'
import countyInfo from '../data/counties.generated.json'
import { BEERS } from '../data/beers.js'
import { upcomingHolidays } from '../lib/holidays.js'
import { slugify } from '../lib/slug.js'

// Deterministic "of the day" index so everyone sees the same picks each day.
function dayIndex(len, salt = 0) {
  const day = Math.floor(Date.now() / 86400000) + salt
  return ((day % len) + len) % len
}

function FeedRow({ icon: Icon, kicker, title, sub, lang, onClick }) {
  const inner = (
    <>
      <span className="today__row-icon">
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="today__row-text">
        <span className="today__kicker">{kicker}</span>
        <span className="today__row-title" lang={lang}>{title}</span>
        <span className="today__row-sub">{sub}</span>
      </span>
      {onClick && <ChevronRight size={18} className="today__row-chev" aria-hidden="true" />}
    </>
  )
  return (
    <li>
      {onClick ? (
        <button className="today__row" onClick={onClick}>{inner}</button>
      ) : (
        <div className="today__row today__row--static">{inner}</div>
      )}
    </li>
  )
}

export default function FeaturedToday() {
  const focal = FOCAL[dayIndex(FOCAL.length)]
  const slang = SLANG[dayIndex(SLANG.length, 3)]
  const nextHol = upcomingHolidays()[0]
  const beer = BEERS[dayIndex(BEERS.length, 17)]

  // One fixed county of the day; its photos rotate in the carousel.
  const county = COUNTIES[dayIndex(COUNTIES.length, 7)]
  const info = countyInfo[county.name] || {}
  const photos = info.images?.length ? info.images : info.image ? [info.image] : []

  const [photoIdx, setPhotoIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || photos.length < 2) return
    const id = setInterval(() => setPhotoIdx((i) => (i + 1) % photos.length), 5000)
    return () => clearInterval(id)
  }, [paused, photos.length])

  const countyImg = photos[photoIdx]

  return (
    <section className="today" aria-label="Today on Irish Tools">
      <h2 className="section-title">Today on Irish Tools</h2>
      <div className="today__panel">
        <div
          className="today__feature"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span
            key={countyImg}
            className="today__feature-img"
            style={countyImg ? { backgroundImage: `url(${countyImg})` } : undefined}
          />
          <button
            className="today__feature-btn"
            onClick={() => navigate('counties', slugify(county.name))}
          >
            <span className="today__feature-overlay">
              <span className="today__kicker today__kicker--light">County of the day</span>
              <span className="today__county-name">{county.name}</span>
              <span className="today__county-nick">“{county.nickname}” · {county.province}</span>
            </span>
          </button>
          {photos.length > 1 && (
            <div className="today__dots" aria-hidden="true">
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`today__dot ${i === photoIdx ? 'is-on' : ''}`}
                  aria-label={`Photo ${i + 1}`}
                  onClick={() => setPhotoIdx(i)}
                />
              ))}
            </div>
          )}
        </div>

        <ul className="today__feed">
          <FeedRow
            icon={BookOpen}
            kicker="Focal an lae"
            title={focal.irish}
            sub={`${focal.english} · ${focal.pron}`}
            lang="ga"
            onClick={() => navigate('focal')}
          />
          <FeedRow
            icon={MessageSquare}
            kicker="Slang of the day"
            title={slang.term}
            sub={slang.meaning}
            onClick={() => navigate('slang', slugify(slang.term))}
          />
          <FeedRow
            icon={Beer}
            kicker="Beer of the day"
            title={beer.name}
            sub={`${beer.brewery}, Co. ${beer.county} · ${beer.style}`}
          />
          <FeedRow
            icon={CalendarDays}
            kicker="Next day off"
            title={nextHol.name}
            sub={nextHol.daysUntil === 0 ? 'It’s today!' : `${nextHol.daysUntil} days to go`}
            onClick={() => navigate('bank-holiday')}
          />
        </ul>
      </div>
    </section>
  )
}

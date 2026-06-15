import { BookOpen, MessageSquare, CalendarDays, ChevronRight } from 'lucide-react'
import { navigate } from '../hooks/useHashRoute.js'
import { FOCAL } from '../data/cuplaFocal.js'
import { SLANG } from '../data/slang.js'
import { COUNTIES } from '../data/counties.js'
import countyInfo from '../data/counties.generated.json'
import { upcomingHolidays } from '../lib/holidays.js'
import { slugify } from '../lib/slug.js'

// Deterministic "of the day" index so everyone sees the same picks each day and
// they rotate automatically.
function dayIndex(len, salt = 0) {
  const day = Math.floor(Date.now() / 86400000) + salt
  return ((day % len) + len) % len
}

function FeedRow({ icon: Icon, kicker, title, sub, lang, onClick }) {
  return (
    <li>
      <button className="today__row" onClick={onClick}>
        <span className="today__row-icon">
          <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="today__row-text">
          <span className="today__kicker">{kicker}</span>
          <span className="today__row-title" lang={lang}>{title}</span>
          <span className="today__row-sub">{sub}</span>
        </span>
        <ChevronRight size={18} className="today__row-chev" aria-hidden="true" />
      </button>
    </li>
  )
}

export default function FeaturedToday() {
  const focal = FOCAL[dayIndex(FOCAL.length)]
  const slang = SLANG[dayIndex(SLANG.length, 3)]
  const county = COUNTIES[dayIndex(COUNTIES.length, 7)]
  const countyImg = countyInfo[county.name]?.image
  const nextHol = upcomingHolidays()[0]

  return (
    <section className="today" aria-label="Today on Irish Tools">
      <h2 className="section-title">Today on Irish Tools</h2>
      <div className="today__panel">
        <button
          className="today__feature"
          style={countyImg ? { backgroundImage: `url(${countyImg})` } : undefined}
          onClick={() => navigate('counties', slugify(county.name))}
        >
          <span className="today__feature-overlay">
            <span className="today__kicker today__kicker--light">County of the day</span>
            <span className="today__county-name">{county.name}</span>
            <span className="today__county-nick">“{county.nickname}” · {county.province}</span>
          </span>
        </button>

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

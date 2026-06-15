import { BookOpen, MessageSquare, CalendarDays } from 'lucide-react'
import { navigate } from '../hooks/useHashRoute.js'
import { FOCAL } from '../data/cuplaFocal.js'
import { SLANG } from '../data/slang.js'
import { COUNTIES } from '../data/counties.js'
import countyInfo from '../data/counties.generated.json'
import { upcomingHolidays } from '../lib/holidays.js'

// Deterministic "of the day" index so everyone sees the same picks each day and
// they rotate automatically.
function dayIndex(len, salt = 0) {
  const day = Math.floor(Date.now() / 86400000) + salt
  return ((day % len) + len) % len
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
      <div className="today__grid">
        <button
          className="today__county"
          style={countyImg ? { backgroundImage: `url(${countyImg})` } : undefined}
          onClick={() => navigate('counties')}
        >
          <span className="today__county-overlay">
            <span className="today__kicker">County of the day</span>
            <span className="today__county-name">{county.name}</span>
            <span className="today__county-nick">“{county.nickname}”</span>
          </span>
        </button>

        <button className="today__card" onClick={() => navigate('focal')}>
          <BookOpen size={18} strokeWidth={1.75} aria-hidden="true" />
          <span className="today__kicker">Focal an lae</span>
          <span className="today__big" lang="ga">{focal.irish}</span>
          <span className="today__sub">{focal.english}</span>
        </button>

        <button className="today__card" onClick={() => navigate('slang')}>
          <MessageSquare size={18} strokeWidth={1.75} aria-hidden="true" />
          <span className="today__kicker">Slang of the day</span>
          <span className="today__big today__big--sm">{slang.term}</span>
          <span className="today__sub">{slang.meaning}</span>
        </button>

        <button className="today__card" onClick={() => navigate('bank-holiday')}>
          <CalendarDays size={18} strokeWidth={1.75} aria-hidden="true" />
          <span className="today__kicker">Next day off</span>
          <span className="today__big today__big--sm">{nextHol.name}</span>
          <span className="today__sub">
            {nextHol.daysUntil === 0 ? 'It’s today!' : `${nextHol.daysUntil} days to go`}
          </span>
        </button>
      </div>
    </section>
  )
}

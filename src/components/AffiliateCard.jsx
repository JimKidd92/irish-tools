import { AFFILIATE } from '../config.js'

const PROGRAMS = {
  ancestry: { emoji: '🧬' },
  booking: { emoji: '🏨' },
}

// A tasteful, contextual affiliate promo. Renders nothing until a real
// tracking link is set in config.js for that program, so no placement ever
// shows a dead or non-functional link.
export default function AffiliateCard({ program, title, pitch, cta }) {
  const url = AFFILIATE[program]
  const meta = PROGRAMS[program]
  if (!url || !meta) return null
  return (
    <aside className="affiliate-card">
      <span className="affiliate-card__emoji" aria-hidden="true">{meta.emoji}</span>
      <div className="affiliate-card__body">
        <p className="affiliate-card__title">{title}</p>
        <p className="affiliate-card__pitch">{pitch}</p>
      </div>
      <a
        className="btn btn--ghost affiliate-card__cta"
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        {cta}
      </a>
      <p className="affiliate-card__disclosure">
        We may earn a small commission if you buy through this link - thanks for keeping the lights on! 🍀
      </p>
    </aside>
  )
}

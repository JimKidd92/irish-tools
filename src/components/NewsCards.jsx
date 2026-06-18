import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { timeAgo } from '../lib/news.js'

export function NewsCard({ item }) {
  return (
    <a className="ncard" href={item.link} target="_blank" rel="noopener noreferrer">
      <span
        className="ncard__img"
        style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
      >
        {!item.image && <span className="ncard__img-fallback">{item.source}</span>}
      </span>
      <span className="ncard__body">
        <span className="ncard__source">{item.source}</span>
        <span className="ncard__title">{item.title}</span>
        <span className="ncard__time">{timeAgo(item.date)}</span>
      </span>
    </a>
  )
}

// Horizontal, swipeable, scroll-snapping row of cards with desktop arrows.
export function NewsRow({ items }) {
  const ref = useRef(null)
  function scroll(dir) {
    const el = ref.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }
  return (
    <div className="nrow">
      <button className="nrow__btn nrow__btn--l" onClick={() => scroll(-1)} aria-label="Scroll left">
        <ChevronLeft size={20} />
      </button>
      <div className="nrow__track" ref={ref}>
        {items.map((it, i) => (
          <NewsCard key={i} item={it} />
        ))}
      </div>
      <button className="nrow__btn nrow__btn--r" onClick={() => scroll(1)} aria-label="Scroll right">
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

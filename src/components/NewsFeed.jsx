import { useEffect, useState } from 'react'
import { Newspaper, SlidersHorizontal } from 'lucide-react'
import { fetchNews } from '../lib/news.js'
import { getSelectedSources } from '../data/newsSources.js'
import { navigate } from '../hooks/useHashRoute.js'
import { NewsRow } from './NewsCards.jsx'

// Homepage news strip: a swipeable row of the latest headlines from the
// visitor's chosen sources, with a link to the full aggregator.
export default function NewsFeed() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchNews(getSelectedSources()).then((news) => {
      if (!cancelled) setItems(news)
    })
    return () => {
      cancelled = true
    }
  }, [])

  if (!items || !items.length) return null

  return (
    <section className="news" aria-label="Latest Irish headlines">
      <div className="news__head">
        <h2 className="section-title news__title">
          <Newspaper size={20} strokeWidth={1.75} aria-hidden="true" /> Latest from Ireland
        </h2>
        <button className="news__customise" onClick={() => navigate('news')}>
          <SlidersHorizontal size={15} strokeWidth={1.75} aria-hidden="true" /> Customise
        </button>
      </div>
      <NewsRow items={items.slice(0, 15)} />
    </section>
  )
}

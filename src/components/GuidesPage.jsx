import { useEffect } from 'react'
import { GUIDES, getGuide } from '../data/guides.js'
import { navigate } from '../hooks/useHashRoute.js'
import { setHead } from '../lib/head.js'
import { SITE_URL } from '../data/seo.js'

export default function GuidesPage({ slug }) {
  const guide = slug ? getGuide(slug) : null

  useEffect(() => {
    if (guide) {
      setHead({
        title: `${guide.title} · Irish Tools`,
        description: guide.description,
        canonical: `${SITE_URL}/guides/${guide.slug}/`,
      })
    } else {
      setHead({
        title: 'Guides — Reading on Ireland, its Heritage & Craic · Irish Tools',
        description:
          'In-depth guides to Irish life, heritage and travel — surnames, slang, beer, the weather, planning a trip and more.',
        canonical: `${SITE_URL}/guides/`,
      })
    }
  }, [slug, guide])

  if (guide) {
    const others = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3)
    return (
      <article className="guide">
        <button className="back-link" onClick={() => navigate('guides')}>
          ← All guides
        </button>
        <h1 className="guide__title">{guide.title}</h1>
        <p className="guide__meta">{guide.readMins} min read · Updated {fmtDate(guide.updated)}</p>
        <div className="guide__body">
          {guide.body.map((block, i) =>
            block.h ? (
              <h2 key={i} className="guide__h2">{block.h}</h2>
            ) : (
              <p key={i}>{block.p}</p>
            ),
          )}
        </div>

        <div className="guide__more">
          <h2 className="guide__h2">More guides</h2>
          <ul className="guide__more-list">
            {others.map((g) => (
              <li key={g.slug}>
                <button className="linklike" onClick={() => navigate('guides', g.slug)}>
                  {g.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </article>
    )
  }

  return (
    <section className="guides-index">
      <p className="guides-index__intro">
        Longer reads on Irish life, heritage and travel — the stories behind the tools.
      </p>
      <ul className="guides-index__list">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <button className="guide-card" onClick={() => navigate('guides', g.slug)}>
              <span className="guide-card__title">{g.title}</span>
              <span className="guide-card__desc">{g.description}</span>
              <span className="guide-card__meta">{g.readMins} min read</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function fmtDate(iso) {
  const d = new Date(iso)
  return isNaN(d) ? '' : d.toLocaleDateString('en-IE', { day: 'numeric', month: 'long', year: 'numeric' })
}

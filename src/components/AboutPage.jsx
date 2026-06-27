import { useEffect } from 'react'
import { navigate } from '../hooks/useHashRoute.js'
import { setHead } from '../lib/head.js'
import { SITE_URL } from '../data/seo.js'

export default function AboutPage() {
  useEffect(() => {
    setHead({
      title: 'About Irish Tools',
      description:
        'What Irish Tools is, who it’s for, and the idea behind it — a growing collection of fun and handy tools, guides and news for Ireland and the Irish abroad.',
      canonical: `${SITE_URL}/about/`,
    })
  }, [])

  return (
    <article className="legal">
      <button className="back-link" onClick={() => navigate('home')}>
        ← Home
      </button>
      <h1 className="legal__title">About Irish Tools</h1>

      <p>
        Irish Tools is a growing collection of small, useful and occasionally daft tools, guides
        and news for Ireland and the Irish abroad. It started with one tongue-in-cheek question —
        “is the immersion on?” — and grew from there into a little corner of the web that tries to
        capture the everyday texture of Irish life.
      </p>

      <h2>What you’ll find here</h2>
      <p>
        There are three sides to the site. First, the <strong>tools</strong>: practical things like
        the weather-driven “is there good drying out?”, a reg-plate decoder and a trip planner, plus
        plenty of pure craic — Mrs Doyle insisting you’ll have a cup of tea, the Daily Irish Quiz,
        and the eternal immersion question. Second, the <strong>heritage</strong> material: surname
        origins, Irish first names, a guide to all 32 counties, an Irish slang dictionary and a
        directory of Irish-brewed beer. Third, a personalised <strong>Irish news</strong> aggregator
        and a set of longer <a href="/guides/" onClick={(e) => { e.preventDefault(); navigate('guides') }}>guides</a>.
      </p>

      <h2>Who it’s for</h2>
      <p>
        Anyone with a fondness for Ireland — but especially the diaspora. Tens of millions of people
        around the world claim Irish heritage, and a lot of what we cover is the kind of small,
        specific detail of Irish life that resonates most with people whose connection to the country
        runs through family and memory. If you’re tracing your roots, planning a trip home, or just
        want a bit of Irish craic, you’re in the right place.
      </p>

      <h2>How it’s made</h2>
      <p>
        Irish Tools is an independent project, built and maintained by one person in Ireland. It’s
        free to use, and kept that way by unobtrusive advertising and the odd kind soul who buys us a
        pint. Where we draw on outside sources — Wikipedia and Wikimedia for county photos and
        descriptions, Open-Meteo for weather, and Irish news outlets for headlines — we credit them.
      </p>

      <h2>Get in touch</h2>
      <p>
        Spotted a mistake, have a tool idea, or just want to say hello? We’d love to hear from you —
        see the{' '}
        <a href="/contact/" onClick={(e) => { e.preventDefault(); navigate('contact') }}>contact page</a>.
        Sure it’s only a bit of craic.
      </p>
    </article>
  )
}

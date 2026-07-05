import { useEffect } from 'react'
import { navigate } from '../hooks/useHashRoute.js'
import { setHead } from '../lib/head.js'
import { SITE_URL } from '../data/seo.js'

export default function ContactPage() {
  useEffect(() => {
    setHead({
      title: 'Contact · Irish Tools',
      description: 'Get in touch with Irish Tools - feedback, corrections, tool ideas or just to say hello.',
      canonical: `${SITE_URL}/contact/`,
    })
  }, [])

  return (
    <article className="legal">
      <button className="back-link" onClick={() => navigate('home')}>
        ← Home
      </button>
      <h1 className="legal__title">Contact</h1>

      <p>
        Irish Tools is run by one person in Ireland, and we genuinely like hearing from people who
        use the site. Whether you’ve spotted a mistake, have an idea for a new tool, want a source
        added to the news, or just fancy saying hello - get in touch.
      </p>

      <h2>Email</h2>
      <p>
        The best way to reach us is by email:{' '}
        <a href="mailto:hello@irishtools.ie">hello@irishtools.ie</a>. We read everything and reply
        when we can.
      </p>

      <h2>Corrections &amp; suggestions</h2>
      <p>
        We try hard to get the details right - surname meanings, county facts, beer styles and the
        rest - but it’s a big collection and the odd error slips through. If you see something that
        isn’t right, please tell us and we’ll fix it. Likewise, if your local news source, your
        county’s missing landmark, or a beer we’ve overlooked should be on the site, send it on.
      </p>

      <h2>Tool ideas</h2>
      <p>
        Half the tools here started as someone’s suggestion. If there’s a small, handy or daft Irish
        thing the world needs a tool for, we want to hear it.
      </p>

      <p>
        For details on how we handle data, see our{' '}
        <a href="/privacy/" onClick={(e) => { e.preventDefault(); navigate('privacy') }}>privacy policy</a>.
      </p>
    </article>
  )
}

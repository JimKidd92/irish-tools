import { navigate } from '../hooks/useHashRoute.js'

// Plain-language privacy policy. Required for Google AdSense approval and to be
// upfront with EU/GDPR users. Review with a solicitor before relying on it.
export default function PrivacyPage() {
  return (
    <article className="legal">
      <button className="back-link" onClick={() => navigate('home')}>
        ← Home
      </button>

      <h1 className="legal__title">Privacy Policy</h1>
      <p className="legal__updated">Last updated: 29 June 2026</p>

      <p>
        Irish Tools (“we”, “us”) runs <strong>irishtools.ie</strong>, a collection of small,
        fun web tools. We try to collect as little about you as possible. This page explains
        what happens with your information.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>Most tools need no sign-up at all. The only exception is the <strong>ranked Daily Quiz leaderboard</strong>, which is optional and uses “Sign in with Google”.</li>
        <li>Your settings (like the immersion switch, saved locations and your quiz streak) are stored <strong>only on your own device</strong> using your browser’s local storage. They never reach us.</li>
        <li>When you use a weather tool, your chosen location is sent to our weather provider to fetch the forecast.</li>
        <li>We intend to show ads to keep the site free. When enabled, our ad provider may use cookies — and in the EU we ask your consent first.</li>
      </ul>

      <h2>Information stored on your device</h2>
      <p>
        Tools such as “Is the Immersion On?”, the weather tools and the Daily Irish Quiz save
        your preferences and progress in your browser’s <em>local storage</em>. This stays on
        your device, isn’t transmitted to us, and you can clear it any time by clearing your
        browser data.
      </p>

      <h2>Daily Quiz accounts &amp; leaderboard</h2>
      <p>
        The Daily Quiz leaderboard is optional. If you choose to take part, you sign in with
        Google, and Google confirms your identity to us. We then store only a{' '}
        <strong>random player ID</strong>, a stable identifier from Google that lets us recognise
        you on future visits, and the <strong>nickname you choose</strong>. We do <em>not</em>
        store your Google password, and we don’t use your email for marketing.
      </p>
      <p>
        Your chosen nickname, your scores and your completion times are shown publicly on the
        leaderboard. Please pick a nickname you’re happy for others to see. We keep your quiz
        results to calculate the daily, weekly, monthly and all-time rankings.
      </p>
      <p>
        Want your account and scores deleted? Email{' '}
        <a href="mailto:hello@irishtools.ie">hello@irishtools.ie</a> with your nickname and we’ll
        remove them.
      </p>

      <h2>Weather data</h2>
      <p>
        When you search a town or use “my location” in a weather tool, that location (a place
        name or approximate coordinates) is sent to{' '}
        <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a>{' '}
        to return a forecast. Please see Open-Meteo’s own privacy terms for how they handle requests.
      </p>

      <h2>News headlines</h2>
      <p>
        The homepage shows a few live Irish headlines. To load them, your browser makes a
        request to a third-party feed service (rss2json) and to the news sources (e.g. RTÉ,
        The42), which means those services receive your IP address as part of a normal web
        request. We don’t send them any other information, and no cookies are set by this.
      </p>

      <h2>Advertising &amp; cookies</h2>
      <p>
        To keep Irish Tools free, we plan to display advertising (for example via Google
        AdSense). When advertising is enabled, our ad partners may set cookies or use similar
        technologies to show and measure ads, including personalised ads. Google’s use of
        advertising cookies is described in{' '}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
          Google’s advertising policy
        </a>.
      </p>
      <p>
        If you’re in the EU/EEA or UK, we ask for your consent before any non-essential
        (advertising/analytics) cookies are used. You can change your mind any time using the
        “Cookie settings” link in the footer. We store your consent choice itself in local
        storage so we can remember it.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR you have rights over your personal data, including access, correction
        and erasure. Because we don’t hold an account or personal profile about you, most data
        lives on your own device and is yours to clear. For anything else, contact us below.
      </p>

      <h2>Children</h2>
      <p>Irish Tools is general-audience and not directed at children under 16.</p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. The “last updated” date above will change when we do.</p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@irishtools.ie">hello@irishtools.ie</a>.
      </p>
    </article>
  )
}

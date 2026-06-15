import { lazy, Suspense, useEffect, useState } from 'react'
import BuyMeAPint from './components/BuyMeAPint.jsx'
import ConsentBanner from './components/ConsentBanner.jsx'
import SideNav from './components/SideNav.jsx'
import Logo from './components/Logo.jsx'
import ToolIcon from './components/ToolIcon.jsx'
import AdSpace from './components/AdSpace.jsx'
import { toolsByCategory } from './data/tools.js'
import { metaFor, pathFor, SITE_URL } from './data/seo.js'
import { useRoute, navigate } from './hooks/useHashRoute.js'
import { useTheme } from './hooks/useTheme.js'
import { loadProgress, playedToday } from './lib/dailyQuiz.js'
import { trackPageview } from './lib/analytics.js'

// Tool pages are lazy-loaded so each becomes its own chunk — keeps the main
// bundle small (the map alone pulls in Leaflet + 550 baked places).
const ImmersionTool = lazy(() => import('./components/ImmersionTool.jsx'))
const DryingTool = lazy(() => import('./components/DryingTool.jsx'))
const SoftDayTool = lazy(() => import('./components/SoftDayTool.jsx'))
const FootTurfTool = lazy(() => import('./components/FootTurfTool.jsx'))
const TeaTool = lazy(() => import('./components/TeaTool.jsx'))
const RoundTool = lazy(() => import('./components/RoundTool.jsx'))
const SpudsTool = lazy(() => import('./components/SpudsTool.jsx'))
const HowsTheFormTool = lazy(() => import('./components/HowsTheFormTool.jsx'))
const QuizTool = lazy(() => import('./components/QuizTool.jsx'))
const BankHolidayTool = lazy(() => import('./components/BankHolidayTool.jsx'))
const RegDecoderTool = lazy(() => import('./components/RegDecoderTool.jsx'))
const PintsTool = lazy(() => import('./components/PintsTool.jsx'))
const SurnameTool = lazy(() => import('./components/SurnameTool.jsx'))
const NamesTool = lazy(() => import('./components/NamesTool.jsx'))
const PlacesTool = lazy(() => import('./components/PlacesTool.jsx'))
const CountyGuide = lazy(() => import('./components/CountyGuide.jsx'))
const MammyTool = lazy(() => import('./components/MammyTool.jsx'))
const FocalTool = lazy(() => import('./components/FocalTool.jsx'))
const PubTool = lazy(() => import('./components/PubTool.jsx'))
const SlangTool = lazy(() => import('./components/SlangTool.jsx'))
const RingHomeTool = lazy(() => import('./components/RingHomeTool.jsx'))
const PaddysDayTool = lazy(() => import('./components/PaddysDayTool.jsx'))
const HowIrishTool = lazy(() => import('./components/HowIrishTool.jsx'))
const BlessingsTool = lazy(() => import('./components/BlessingsTool.jsx'))
const TripBudgetTool = lazy(() => import('./components/TripBudgetTool.jsx'))
const PrivacyPage = lazy(() => import('./components/PrivacyPage.jsx'))
// Lazy so the featured data (slang, counties, holidays) doesn't bloat every page.
const FeaturedToday = lazy(() => import('./components/FeaturedToday.jsx'))
const NewsFeed = lazy(() => import('./components/NewsFeed.jsx'))

// Each tool page: a title, subtitle and the tool component itself.
const PAGES = {
  immersion: {
    title: 'Is the Immersion On?',
    subtitle:
      'The eternal Irish question. Settle it once and for all — your answer is saved on this device.',
    Component: ImmersionTool,
  },
  drying: {
    title: 'Is There Good Drying Out?',
    subtitle:
      'Should ya hang the washing on the line? We’ll check the weather where you are and give you the verdict.',
    Component: DryingTool,
  },
  'soft-day': {
    title: 'Is It a Soft Day?',
    subtitle:
      'Mild, grey and a gentle mizzle? We’ll tell you if it’s a soft oul day — and translate the forecast into proper Irish.',
    Component: SoftDayTool,
  },
  turf: {
    title: 'Is It Time to Foot the Turf?',
    subtitle:
      'Footing turf needs a dry, breezy spell. We’ll check the days behind and ahead and tell you if it’s worth heading to the bog.',
    Component: FootTurfTool,
  },
  tea: {
    title: 'Will Ya Have a Cup of Tea?',
    subtitle: 'Mrs Doyle won’t take no for an answer. Go on, go on, go on…',
    Component: TeaTool,
  },
  round: {
    title: 'Whose Round Is It?',
    subtitle:
      'Add the session and we’ll keep honest track of who’s bought and whose turn is next. Saved on this device.',
    Component: RoundTool,
  },
  spuds: {
    title: 'How Many Spuds?',
    subtitle: 'Dinner portions, done properly. Never run short of spuds again.',
    Component: SpudsTool,
  },
  form: {
    title: 'How’s the Form?',
    subtitle:
      'Is there a grand stretch in the evenings, or are they drawing in? We’ll check the daylight where you are.',
    Component: HowsTheFormTool,
  },
  quiz: {
    title: 'The Daily Irish Quiz',
    subtitle:
      'Five fresh questions every day. Build your streak and share your score — sure you’d know it all.',
    Component: QuizTool,
  },
  'bank-holiday': {
    title: 'Next Bank Holiday',
    subtitle: 'When’s the next day off? Counting down to the next Irish bank holiday.',
    Component: BankHolidayTool,
  },
  reg: {
    title: 'Reg Plate Decoder',
    subtitle: 'Pop in any Irish reg and we’ll tell you the year and county it’s from.',
    Component: RegDecoderTool,
  },
  pints: {
    title: 'That’s How Many Pints?',
    subtitle: 'The only currency that matters. Type a price, see it in pints.',
    Component: PintsTool,
  },
  mammy: {
    title: 'Irish Mammy Says…',
    subtitle: 'Words of wisdom from the woman herself. Hit the button for another.',
    Component: MammyTool,
  },
  focal: {
    title: 'Cúpla Focal',
    subtitle: 'A bit of Irish for the day. Learn a focal or two, go on.',
    Component: FocalTool,
  },
  pub: {
    title: 'Is the Pub Open?',
    subtitle: 'Can I get a pint today? The eternal question, settled.',
    Component: PubTool,
  },
  surnames: {
    title: 'Irish Surname Origins',
    subtitle:
      'Curious where your family name comes from? Find its Irish form, meaning, and the part of Ireland it hails from.',
    Component: SurnameTool,
  },
  names: {
    title: 'Irish Names & Meanings',
    subtitle: 'Beautiful Irish names with their meanings and how to actually say them.',
    Component: NamesTool,
  },
  places: {
    title: 'Places to Visit',
    subtitle: 'Planning a trip home? Explore the must-see spots across the island of Ireland.',
    Component: PlacesTool,
  },
  counties: {
    title: 'County Guide',
    subtitle: 'Explore all 32 counties — their Irish names, nicknames and what to see.',
    Component: CountyGuide,
  },
  slang: {
    title: 'Irish Slang Dictionary',
    subtitle:
      'What’s the craic with all the yokes? Search the slang — meanings and examples included, ya gowl.',
    Component: SlangTool,
  },
  'ring-home': {
    title: 'Can I Ring Home?',
    subtitle:
      'The time in Ireland right now, the difference from where you are, and whether it’s a decent hour to call.',
    Component: RingHomeTool,
  },
  'paddys-day': {
    title: 'St Patrick’s Day Countdown',
    subtitle: 'Counting down to the greenest day of the year. Lá Fhéile Pádraig abú!',
    Component: PaddysDayTool,
  },
  'how-irish': {
    title: 'How Irish Are You?',
    subtitle:
      'Twelve questions of pure Irishness — from the immersion to the good biscuits. Be honest now.',
    Component: HowIrishTool,
  },
  blessings: {
    title: 'Irish Blessings & Toasts',
    subtitle:
      'May the road rise to meet you — traditional blessings for weddings, toasts, farewells and luck.',
    Component: BlessingsTool,
  },
  'trip-budget': {
    title: 'Trip Budget Converter',
    subtitle:
      'Planning the trip home? Convert your money to euro at today’s rate and see what it gets you.',
    Component: TripBudgetTool,
  },
}

function PageLoading() {
  return <p className="weather-status">Loading…</p>
}

// Keep the document head in sync with the current route (title, description,
// canonical). The prerendered HTML has these baked in for first paint/SEO;
// this handles client-side navigation after that.
function useRouteMeta(route, slug) {
  useEffect(() => {
    // Entry pages (e.g. /surnames/murphy/) own their own head — set by the
    // detail component, which has the data. Here we just count the view.
    if (slug) {
      trackPageview(`${pathFor(route)}${slug}/`)
      return
    }
    const meta = metaFor(route)
    document.title = meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description)
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', SITE_URL + pathFor(route))
    trackPageview(pathFor(route))
  }, [route, slug])
}

export default function App() {
  const { route, slug } = useRoute()
  const page = PAGES[route]
  const [theme, toggleTheme] = useTheme()
  const [navOpen, setNavOpen] = useState(false)
  useRouteMeta(route, slug)

  return (
    <div className="page">
      <SideNav open={navOpen} onClose={() => setNavOpen(false)} route={route} />

      <header className="site-header">
        <button
          className="nav-toggle"
          onClick={() => setNavOpen(true)}
          aria-label="Open menu"
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <a
          className="brand"
          href="/"
          onClick={(e) => {
            e.preventDefault()
            navigate('home')
          }}
        >
          <Logo size={34} className="brand__logo" />
          <span className="brand__name">Irish&nbsp;Tools</span>
        </a>
        <p className="brand__tagline">Grand little tools for grand little problems.</p>
      </header>

      <AdSpace label="Banner ad" />

      <main className="main">
        <Suspense fallback={<PageLoading />}>
          {route === 'privacy' ? <PrivacyPage /> : page ? <ToolPage page={page} slug={slug} /> : <Home />}
        </Suspense>
      </main>

      <footer className="site-footer">
        <div className="site-footer__support">
          <p className="site-footer__support-text">Enjoying the site? Keep it free:</p>
          <BuyMeAPint />
        </div>
        <p>
          Made with 🍀 in Ireland. Got an idea for a tool?{' '}
          <a href="mailto:hello@irishtools.ie">Tell us</a>.
        </p>
        <p className="site-footer__links">
          <a
            href="/privacy/"
            onClick={(e) => {
              e.preventDefault()
              navigate('privacy')
            }}
          >
            Privacy policy
          </a>
          {' · '}
          <button
            className="linklike"
            onClick={() => window.dispatchEvent(new Event('reopen-consent'))}
          >
            Cookie settings
          </button>
        </p>
        <p className="site-footer__fine">
          © {new Date().getFullYear()} Irish Tools · Sure it’s only a bit of craic.
        </p>
      </footer>

      <ConsentBanner />
    </div>
  )
}

function ToolPage({ page, slug }) {
  const { title, subtitle, Component } = page
  return (
    <>
      <button className="back-link" onClick={() => navigate('home')}>
        ← All tools
      </button>
      <div className="hero">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
      <Component slug={slug} />
      <aside className="sidebar-ad">
        <AdSpace label="Sidebar ad" />
      </aside>
    </>
  )
}

function Home() {
  const groups = toolsByCategory()
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">Grand little tools for grand little problems.</h1>
        <p className="hero__subtitle">
          A growing collection of fun and handy tools for Ireland and the Irish abroad.
          Pick one below — sure it’s only a bit of craic.
        </p>
      </div>

      <QuizBanner />

      <Suspense fallback={<div className="today-skeleton" aria-hidden="true" />}>
        <FeaturedToday />
      </Suspense>

      <Suspense fallback={null}>
        <NewsFeed />
      </Suspense>

      <h2 className="section-title section-title--all">All tools</h2>
      {groups.map((group) => (
        <section className="tools" id={categorySlug(group.category)} key={group.category}>
          <h2 className="tools__heading">{group.category}</h2>
          <ul className="tool-grid">
            {group.items.map((tool) => (
              <li key={tool.id}>
                <a
                  className="tool-card tool-card--link is-live"
                  href={`/${tool.path}/`}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(tool.path)
                  }}
                >
                  <ToolCardInner tool={tool} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

function QuizBanner() {
  const progress = loadProgress()
  const done = playedToday()
  return (
    <button className="quiz-banner" onClick={() => navigate('quiz')}>
      <span className="quiz-banner__emoji" aria-hidden="true">🍀</span>
      <span className="quiz-banner__text">
        <span className="quiz-banner__title">The Daily Irish Quiz</span>
        <span className="quiz-banner__sub">
          {done
            ? 'You’ve done today’s — come back tomorrow for more.'
            : 'Five fresh questions every day. How well do you know your stuff?'}
        </span>
      </span>
      <span className="quiz-banner__cta">
        {progress.streak > 0 && (
          <span className="quiz-banner__streak">{progress.streak} 🔥</span>
        )}
        <span className="quiz-banner__play">{done ? 'See result' : 'Play today →'}</span>
      </span>
    </button>
  )
}

function ToolCardInner({ tool }) {
  return (
    <>
      <span className={`tool-card__icon tool-card__icon--${categorySlug(tool.category)}`}>
        <ToolIcon name={tool.icon} size={22} />
      </span>
      <h3 className="tool-card__name">{tool.name}</h3>
      <p className="tool-card__tagline">{tool.tagline}</p>
      {!tool.live && <span className="tool-card__badge">Coming soon</span>}
    </>
  )
}

function categorySlug(category) {
  return (category || '').toLowerCase().replace(/[^a-z]+/g, '-')
}

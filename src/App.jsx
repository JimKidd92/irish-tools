import ImmersionTool from './components/ImmersionTool.jsx'
import DryingTool from './components/DryingTool.jsx'
import SoftDayTool from './components/SoftDayTool.jsx'
import FootTurfTool from './components/FootTurfTool.jsx'
import TeaTool from './components/TeaTool.jsx'
import RoundTool from './components/RoundTool.jsx'
import SpudsTool from './components/SpudsTool.jsx'
import HowsTheFormTool from './components/HowsTheFormTool.jsx'
import QuizTool from './components/QuizTool.jsx'
import BankHolidayTool from './components/BankHolidayTool.jsx'
import RegDecoderTool from './components/RegDecoderTool.jsx'
import PintsTool from './components/PintsTool.jsx'
import MammyTool from './components/MammyTool.jsx'
import FocalTool from './components/FocalTool.jsx'
import PubTool from './components/PubTool.jsx'
import PrivacyPage from './components/PrivacyPage.jsx'
import ConsentBanner from './components/ConsentBanner.jsx'
import AdSpace from './components/AdSpace.jsx'
import { tools } from './data/tools.js'
import { useHashRoute, navigate } from './hooks/useHashRoute.js'
import { useTheme } from './hooks/useTheme.js'
import { loadProgress, playedToday } from './lib/dailyQuiz.js'

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
}

export default function App() {
  const route = useHashRoute()
  const page = PAGES[route]
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="page">
      <header className="site-header">
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
          href="#/"
          onClick={(e) => {
            e.preventDefault()
            navigate('home')
          }}
        >
          <span className="brand__mark" aria-hidden="true">🍀</span>
          <span className="brand__name">Irish&nbsp;Tools</span>
        </a>
        <p className="brand__tagline">Grand little tools for grand little problems.</p>
      </header>

      <AdSpace label="Banner ad" />

      <main className="main">
        {route === 'privacy' ? <PrivacyPage /> : page ? <ToolPage page={page} /> : <Home />}
      </main>

      <footer className="site-footer">
        <p>
          Made with 🍀 in Ireland. Got an idea for a tool?{' '}
          <a href="mailto:hello@irishtools.ie">Tell us</a>.
        </p>
        <p className="site-footer__links">
          <a
            href="#/privacy"
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

function ToolPage({ page }) {
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
      <Component />
      <aside className="sidebar-ad">
        <AdSpace label="Sidebar ad" />
      </aside>
    </>
  )
}

function Home() {
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">Grand little tools for grand little problems.</h1>
        <p className="hero__subtitle">
          A growing collection of fun and handy tools for Irish people. Pick one below —
          sure it’s only a bit of craic.
        </p>
      </div>

      <QuizBanner />

      <section className="tools" id="tools">
        <ul className="tool-grid">
          {tools.map((tool) =>
            tool.live ? (
              <li key={tool.id}>
                <a
                  className="tool-card tool-card--link is-live"
                  href={`#/${tool.path}`}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(tool.path)
                  }}
                >
                  <ToolCardInner tool={tool} />
                </a>
              </li>
            ) : (
              <li key={tool.id} className="tool-card is-soon">
                <ToolCardInner tool={tool} />
              </li>
            ),
          )}
        </ul>
      </section>
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
      <span className="tool-card__emoji" aria-hidden="true">
        {tool.emoji}
      </span>
      <h3 className="tool-card__name">{tool.name}</h3>
      <p className="tool-card__tagline">{tool.tagline}</p>
      {!tool.live && <span className="tool-card__badge">Coming soon</span>}
    </>
  )
}

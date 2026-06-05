import ImmersionTool from './components/ImmersionTool.jsx'
import AdSpace from './components/AdSpace.jsx'
import { tools } from './data/tools.js'

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand__mark" aria-hidden="true">🍀</span>
          <span className="brand__name">Irish&nbsp;Tools</span>
        </a>
        <p className="brand__tagline">Grand little tools for grand little problems.</p>
      </header>

      <AdSpace label="Banner ad" />

      <main className="main">
        <div className="hero">
          <h1 className="hero__title">Is the Immersion On?</h1>
          <p className="hero__subtitle">
            The eternal Irish question. Settle it once and for all — your answer is
            saved on this device.
          </p>
        </div>

        <ImmersionTool />

        <aside className="sidebar-ad">
          <AdSpace label="Sidebar ad" />
        </aside>

        <section className="tools" id="tools">
          <h2 className="tools__heading">More Irish tools</h2>
          <p className="tools__sub">
            We’re building out the collection. Here’s what’s brewing.
          </p>
          <ul className="tool-grid">
            {tools.map((tool) => (
              <li key={tool.id} className={`tool-card ${tool.live ? 'is-live' : 'is-soon'}`}>
                <span className="tool-card__emoji" aria-hidden="true">
                  {tool.emoji}
                </span>
                <h3 className="tool-card__name">{tool.name}</h3>
                <p className="tool-card__tagline">{tool.tagline}</p>
                <span className="tool-card__badge">
                  {tool.live ? 'Live now' : 'Coming soon'}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Made with 🍀 in Ireland. Got an idea for a tool?{' '}
          <a href="mailto:hello@irishtools.ie">Tell us</a>.
        </p>
        <p className="site-footer__fine">
          © {new Date().getFullYear()} Irish Tools · Sure it’s only a bit of craic.
        </p>
      </footer>
    </div>
  )
}

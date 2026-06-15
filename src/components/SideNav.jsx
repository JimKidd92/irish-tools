import { useEffect } from 'react'
import { House, Sparkles, Lock, X } from 'lucide-react'
import { navigate } from '../hooks/useHashRoute.js'
import { toolsByCategory } from '../data/tools.js'
import Logo from './Logo.jsx'
import ToolIcon from './ToolIcon.jsx'

// Collapsible slide-in navigation drawer with a quick link to every tool.
export default function SideNav({ open, onClose, route }) {
  // Close on Escape, and lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  function go(target) {
    navigate(target)
    onClose()
  }

  const groups = toolsByCategory()

  return (
    <>
      <div
        className={`nav-overlay ${open ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`sidenav ${open ? 'is-open' : ''}`} aria-label="All tools" aria-hidden={!open}>
        <div className="sidenav__head">
          <span className="sidenav__brand">
            <Logo size={26} className="sidenav__logo" />
            Irish Tools
          </span>
          <button className="sidenav__close" onClick={onClose} aria-label="Close menu">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <button
          className={`sidenav__item ${route === 'home' ? 'is-active' : ''}`}
          onClick={() => go('home')}
        >
          <House size={18} strokeWidth={1.75} aria-hidden="true" /> <span>Home</span>
        </button>
        <button
          className={`sidenav__item sidenav__item--feature ${route === 'quiz' ? 'is-active' : ''}`}
          onClick={() => go('quiz')}
        >
          <Sparkles size={18} strokeWidth={1.75} aria-hidden="true" /> <span>Daily Irish Quiz</span>
        </button>

        {groups.map((group) => (
          <div key={group.category} className="sidenav__group">
            <p className="sidenav__group-title">{group.category}</p>
            {group.items.map((tool) => (
              <button
                key={tool.id}
                className={`sidenav__item ${route === tool.path ? 'is-active' : ''}`}
                onClick={() => go(tool.path)}
              >
                <ToolIcon name={tool.icon} size={18} /> <span>{tool.name}</span>
              </button>
            ))}
          </div>
        ))}

        <button
          className={`sidenav__item sidenav__item--muted ${route === 'privacy' ? 'is-active' : ''}`}
          onClick={() => go('privacy')}
        >
          <Lock size={18} strokeWidth={1.75} aria-hidden="true" /> <span>Privacy policy</span>
        </button>
      </nav>
    </>
  )
}

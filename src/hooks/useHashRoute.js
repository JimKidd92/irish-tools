import { useEffect, useState } from 'react'

// Path-based router (history API). Routes are real URLs like /drying/ so each
// tool gets its own indexable page — the build prerenders an HTML file per
// route (scripts/prerender.mjs). Legacy #/route links redirect on load.
// (File keeps its old name to avoid churning imports.)

function currentRoute() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '')
  return path || 'home'
}

// One-time redirect for old #/route links shared before the migration.
const legacy = window.location.hash.match(/^#\/?(.+?)\/?$/)
if (legacy) {
  window.history.replaceState(null, '', legacy[1] === '' ? '/' : `/${legacy[1]}/`)
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => currentRoute())

  useEffect(() => {
    const onChange = () => {
      setRoute(currentRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onChange)
    window.addEventListener('app:navigate', onChange)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener('app:navigate', onChange)
    }
  }, [])

  return route
}

export function navigate(route) {
  const path = route === 'home' ? '/' : `/${route}/`
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path)
  }
  window.dispatchEvent(new Event('app:navigate'))
}

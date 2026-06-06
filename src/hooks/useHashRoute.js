import { useEffect, useState } from 'react'

// Minimal hash-based router. Hash routing needs no server config, so it works
// out of the box on GitHub Pages and any static host. Routes look like #/drying.
export function useHashRoute() {
  const [route, setRoute] = useState(() => currentRoute())

  useEffect(() => {
    const onChange = () => {
      setRoute(currentRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}

function currentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  return hash || 'home'
}

export function navigate(route) {
  window.location.hash = route === 'home' ? '/' : `/${route}`
}

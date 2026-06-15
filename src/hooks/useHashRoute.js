import { useEffect, useState } from 'react'

// Path-based router (history API). Routes are real URLs like /surnames/ and
// /surnames/murphy/ — the build prerenders an HTML file per route and per data
// entry. Legacy #/route links redirect on load.
// (File keeps its old name to avoid churning imports.)

function parse() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '')
  const [route, slug] = path.split('/')
  return { route: route || 'home', slug: slug || null }
}

// One-time redirect for old #/route links shared before the migration.
const legacy = window.location.hash.match(/^#\/?(.+?)\/?$/)
if (legacy) {
  window.history.replaceState(null, '', legacy[1] === '' ? '/' : `/${legacy[1]}/`)
}

// Returns { route, slug }.
export function useRoute() {
  const [state, setState] = useState(() => parse())

  useEffect(() => {
    const onChange = () => {
      setState(parse())
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onChange)
    window.addEventListener('app:navigate', onChange)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener('app:navigate', onChange)
    }
  }, [])

  return state
}

// Back-compat: just the first path segment.
export function useHashRoute() {
  return useRoute().route
}

export function navigate(route, slug) {
  const path = route === 'home' ? '/' : `/${route}/${slug ? `${slug}/` : ''}`
  if (window.location.pathname !== path) {
    window.history.pushState(null, '', path)
  }
  window.dispatchEvent(new Event('app:navigate'))
}

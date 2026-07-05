import { useEffect, useState } from 'react'

const KEY = 'irish-tools.theme'

// Light/dark theme with a remembered preference, defaulting to the OS setting.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      /* ignore */
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* storage unavailable - grand */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}

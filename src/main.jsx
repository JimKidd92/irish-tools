import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (no Google CDN - keeps us clean for GDPR).
import '@fontsource-variable/fraunces'
import '@fontsource-variable/mulish'
import App from './App.jsx'
import { QuizAuthProvider } from './hooks/useQuizAuth.jsx'
import './index.css'

// Cache-only-assets service worker → fast repeat loads + PWA installability.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizAuthProvider>
      <App />
    </QuizAuthProvider>
  </StrictMode>,
)

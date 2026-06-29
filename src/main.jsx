import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (no Google CDN — keeps us clean for GDPR).
import '@fontsource-variable/fraunces'
import '@fontsource-variable/mulish'
import App from './App.jsx'
import { QuizAuthProvider } from './hooks/useQuizAuth.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizAuthProvider>
      <App />
    </QuizAuthProvider>
  </StrictMode>,
)

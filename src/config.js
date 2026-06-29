// Site-wide config.
//
// SUPPORT_URL: your "Buy me a pint" tip-jar link. Create a free page at
// buymeacoffee.com or ko-fi.com (Ko-fi takes 0% fees) and paste the URL here.
// Leave as '' to hide the button entirely.
export const SUPPORT_URL = 'https://ko-fi.com/irishtools'

// GOATCOUNTER_CODE: free pageview analytics from goatcounter.com (no cookies,
// no consent needed). Create a site there and put its code here — e.g.
// 'irishtools' if your dashboard is irishtools.goatcounter.com.
// Leave as '' to disable analytics entirely.
export const GOATCOUNTER_CODE = 'irishtools'

// NEWS_API: the URL of the deployed Cloudflare news Worker (see worker/README.md).
// While empty, the news falls back to a basic 2-source strip via rss2json.
// Set this to light up the full personalised aggregator.
// e.g. 'https://irish-tools-news.YOURNAME.workers.dev'
export const NEWS_API = 'https://irish-tools-news.irish-tools.workers.dev'

// QUIZ_API: the URL of the deployed Cloudflare quiz/leaderboard Worker
// (see worker/quiz/README.md). While empty, the Daily Quiz + leaderboard are
// hidden/disabled. e.g. 'https://irish-tools-quiz.YOURNAME.workers.dev'
export const QUIZ_API = 'https://irish-tools-quiz.irish-tools.workers.dev'

// GOOGLE_CLIENT_ID: your Google OAuth Web client ID for "Sign in with Google"
// (https://console.cloud.google.com → Credentials). Safe to expose publicly.
// Must match the GOOGLE_CLIENT_ID set in the quiz Worker. e.g.
// '1234567890-abc123.apps.googleusercontent.com'. Empty disables sign-in.
export const GOOGLE_CLIENT_ID = '888849269201-22j27mevvoc13bmsfnhf669ptato4pdb.apps.googleusercontent.com'

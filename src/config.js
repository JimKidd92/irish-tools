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

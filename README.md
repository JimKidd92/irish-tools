# 🍀 Irish Tools

Fun and quirky tools for Irish people. First up: **Is the Immersion On?**

A growing collection of grand little tools for grand little problems, built with
Vite + React and deployable as a static site for next to nothing.

## Develop

```bash
npm install
npm run dev      # local dev server (usually http://localhost:5173)
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build locally
```

## Deploy (low / no cost)

The build is a plain static site (`./dist`), so any of these free tiers work:

- **Cloudflare Pages** — connect the repo, build command `npm run build`, output dir `dist`.
- **Netlify** — same settings; drag-and-drop `dist` also works.
- **GitHub Pages** — push `dist` (or use an action).
- **Vercel** — auto-detects Vite.

## Adding a new tool

1. Add an entry to [`src/data/tools.js`](src/data/tools.js). Set `live: true` when ready.
2. Build the tool component under [`src/components/`](src/components/).
3. Wire it into [`src/App.jsx`](src/App.jsx).

## Ads

Ad slots live in [`src/components/AdSpace.jsx`](src/components/AdSpace.jsx) and show
placeholders until configured. To enable Google AdSense:

1. Paste your AdSense script into [`index.html`](index.html) (commented block at the top).
2. Pass real `slot` IDs and `live` to `<AdSpace />` and uncomment the `<ins>` block.

---

Sure it's only a bit of craic.

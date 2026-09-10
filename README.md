# Tagtin

Marketing site for **Tagtin** — an AI-driven fractional marketing agency in Singapore, plus **Tagtin Studio** (AI content curricula).

Story-led. AI-driven. Human always.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

Node 20+ recommended (the project was built on Node 22).

## Vercel

This is a standard Next.js App Router app. `vercel.json` sets `framework` to `nextjs` so leftover dashboard settings from the empty-README import cannot treat `public/` as a static site.

In the Vercel project, under **Settings → Build and Deployment**:

- **Framework Preset:** Next.js (not Other / not static)
- **Output Directory:** leave the default — do **not** set `public` or `out`
- **Build Command:** default (`next build` / `npm run build`)
- **Root Directory:** repository root (`.`)

If `/` 404s but files like `/brand/wordmark.png` load, Vercel is publishing `public/` as static files instead of running Next.js.

## Pages

- `/` — Home
- `/fractional-marketing` — Fractional offer
- `/studio` — Tagtin Studio / AI Video Producer
- `/work` — Case cards (Pokémon, Disney, Robinsons, Hello Kitty)
- `/insights` — Static insight cards (stub)
- `/contact` — Book a 2-week Sprint

Primary CTA everywhere: **Book a Sprint** → `/contact`.

## Contact form

The form is **Formspree-ready**.

1. Create a form at [formspree.io](https://formspree.io).
2. Copy the form id (the `xxxxxxxx` in `https://formspree.io/f/xxxxxxxx`).
3. Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` (see `.env.example`).

Until that id is set, submit opens a **mailto** draft to **hello@tagtin.com**.

Please confirm the public inbox. The previous WordPress site used a Cloudflare-protected address; this rebuild uses `hello@tagtin.com` as the placeholder specified for launch. Phone / WhatsApp (`+65 8123 4900`) is carried over from the live site.

## Brand (locked)

Do not invent alternate taglines, colours, or mystical/fairy language.

| Role | Line |
| --- | --- |
| Philosophy (primary) | Story-led. AI-driven. Human always. |
| System / outcome | Attract. Engage. Retain. |
| Commercial offer | Fractional marketing. Full storytelling. |

Colours: Navy `#183050` · Slate `#407898` · Mist `#A0B8C8` · Charcoal `#303030` · Cream `#FAF8F5` · White `#FFFFFF`.

Official marks live in `public/brand/` (wordmark, mark, lockups, SVG mark). Use `components/Logo.tsx` and `components/BrandMark.tsx` in UI.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · `next/font` (Plus Jakarta Sans + Newsreader).

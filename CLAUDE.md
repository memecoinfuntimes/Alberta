# Alberta Construction LLC website

Marketing site for Bill's handyman business. Live at https://albertaconstructionpdx.com (Netlify, auto-deploys on push to `claude/alberta-construction-website-prd-xrat8c`, the repo's only/default branch).

Full spec: `docs/PRD.md`. Setup and editing guide: `README.md`.

## Business facts
- Alberta Construction LLC, owner Bill. North Portland, OR 97217 (lives on N Alberta St; never put the street number on the site or in the repo).
- (971) 409-6661 · wjshambaughjr@gmail.com · Oregon CCB #261415 (must appear on every page, required by Oregon law).
- Mon–Fri 9am–5pm. 30+ years of experience. Licensed & insured.
- $75–$150/hr, $150 minimum per visit, free written estimates on bigger jobs. Never mention materials billing.
- Serves Greater Portland, **Oregon side only** (not registered in Washington, so no Vancouver/Camas).
- 16 services in 5 categories, including Pictures & Art (see `src/data/site.ts`).
- One job photo so far: a fence, used as the home hero background (`public/fence-hero.webp`, `fence-hero-900.webp` on mobile). No reviews yet. The gallery and reviews sections render automatically once `workPhotos` / `reviews` have entries.

## Tech
- Astro static site, plain CSS (`src/styles/global.css`), Inter + Libre Caslon via @fontsource, Lucide icons via `src/components/Icon.astro`.
- **Almost all content is in `src/data/site.ts`**: business info, pricing, payments, services, service area, FAQs, reviews, photos.
- Pages: `src/pages/` (index, services, about, quote, pay, thanks, 404). Layout: `src/layouts/Base.astro`.
- Logo: round badge (Mt. Hood, Portland skyline, trees) in `public/logo-256.webp` / `logo-512.webp`, used by `src/components/Logo.astro`; favicon `public/favicon.svg`. `brand/` still holds the older "Bold Block" files, no longer used on the site.
- Quote forms (`quick-quote` on home, `quote` on /quote/) use Netlify Forms and post to `/thanks/`. Form detection is ON in Netlify.
- Commands: `npm install`, `npm run dev`, `npm run build`.

## Design rules
- Palette from the badge logo (tokens in `:root` of `global.css`): forest green `--charcoal #14261b` / `--accent #2d5b3b`, cream `--paper #fbf8f0`, gold `--accent-light #dcaa4a` for text on dark green, cedar `#9a5a24`.
- Headlines: Inter 800, ALL CAPS. Body 18px. Tone: friendly, plain-spoken, first person ("I").
- Copy answers 3 customer worries: what's happening, what it costs, whether the contractor's on top of it.

## Open to-dos
- Netlify form email notifications to wjshambaughjr@gmail.com (owner is setting up in the Netlify UI).
- The "Powered by Netlify" badge (fixed bottom-right) covers the mobile Free Quote button. Remove it in Netlify settings, or move `.mobile-cta`.
- Match the site's service-area list (`serviceArea` in `site.ts`) to the Google Business Profile.
- Fill `payments.squarePayUrl` and `payments.zelle` once Square/Zelle are set up.
- Add `business.ownerPhoto` when Bill sends a photo.

## Working style (owner is on a tight budget)
- Keep sessions short and focused. Skip screenshots for text-only changes; use them for layout/design changes.
- Commit and push when done (that deploys the site).

# Alberta Construction LLC website

Marketing site for Bill's handyman business. Live at https://albertaconstructionpdx.com (Netlify, auto-deploys on push to `claude/alberta-construction-website-prd-xrat8c`, the repo's only/default branch).

Full spec: `docs/PRD.md`. Setup and editing guide: `README.md`.

## Business facts
- Alberta Construction LLC, owner Bill. North Portland, OR 97217 (lives on N Alberta St; never put the street number on the site or in the repo).
- (971) 409-6661 · wjshambaughjr@gmail.com · Oregon CCB #261415 (must appear on every page, required by Oregon law).
- Mon–Fri 9am–5pm. 30+ years of experience. Licensed & insured.
- $75–$150/hr, $150 minimum per visit, free written estimates on bigger jobs. Never mention materials billing.
- Serves Greater Portland, **Oregon side only** (not registered in Washington, so no Vancouver/Camas).
- 14 services in 4 categories (see `src/data/site.ts`).
- No job photos and no reviews yet. The gallery and reviews sections render automatically once `workPhotos` / `reviews` have entries.

## Tech
- Astro static site, plain CSS (`src/styles/global.css`), Inter + Libre Caslon via @fontsource, Lucide icons via `src/components/Icon.astro`.
- **Almost all content is in `src/data/site.ts`**: business info, pricing, payments, services, service area, FAQs, reviews, photos.
- Pages: `src/pages/` (index, services, about, quote, pay, thanks, 404). Layout: `src/layouts/Base.astro`.
- Logo "Bold Block": `src/components/Logo.astro`, `public/favicon.svg`, print/social files in `brand/`.
- Quote forms (`quick-quote` on home, `quote` on /quote/) use Netlify Forms and post to `/thanks/`. Form detection is ON in Netlify.
- Commands: `npm install`, `npm run dev`, `npm run build`.

## Design rules
- White / charcoal `#1F1F1F` / one accent, brick red `#B8321F` (`#F08A76` for text on dark).
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

# Alberta Construction LLC: Website

Marketing website for Alberta Construction LLC, a licensed and insured handyman business in North Portland, OR (CCB #261415).

The product spec is in [`docs/PRD.md`](docs/PRD.md).

## Tech

- [Astro](https://astro.build): static site, no server needed
- Plain CSS (`src/styles/global.css`), self-hosted Inter + Libre Caslon fonts
- [Lucide](https://lucide.dev/icons) line icons
- Quote forms handled by **Netlify Forms**

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Updating the site

Almost everything lives in **`src/data/site.ts`**:

| To change… | Edit in `src/data/site.ts` |
|---|---|
| Phone, email, hours, CCB # | `business` |
| Rates / minimum | `pricing` |
| Square payment link, Zelle | `payments` (leave `''` to show "coming soon") |
| Services and descriptions | `serviceCategories` |
| FAQ | `faqs` |
| Bill's photo | put the file in `public/` and set `business.ownerPhoto` (e.g. `'/bill.jpg'`) |
| Customer reviews | `reviews` (the section appears automatically once there's at least one) |
| Job photos | put files in `public/work/`, add them to `workPhotos` (the gallery appears automatically) |

## Logo files

`brand/` has the logo for print and social:

- `alberta-logo-light.png` / `alberta-logo-dark.png`: full logo for white or dark backgrounds
- `alberta-icon-512.png`: square icon (social profile pictures, Google Business Profile)
- `alberta-mark.svg`: the "A" square as a vector file (for printers, sign shops, truck decals)

## Deploying (Netlify)

1. Create a free Netlify account and choose **Add new site → Import an existing project**, then pick this GitHub repo. The build settings come from `netlify.toml`.
2. **Forms:** in Netlify → *Forms*, enable form detection. The `quote` and `quick-quote` forms show up after the first deploy.
3. **Email notifications:** Netlify → *Site configuration → Notifications → Form submission notifications → Email*, and send to `wjshambaughjr@gmail.com`.
4. **Domain:** `albertaconstructionpdx.com` (DNS managed by Netlify). It is set in `astro.config.mjs`. Only set a `SITE_URL` environment variable to override it, for example if the domain changes.

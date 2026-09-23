# Alberta Construction LLC — Website PRD

| | |
|---|---|
| **Status** | Draft v0.1 |
| **Owner** | Alberta Construction LLC |
| **Last updated** | 2026-09-23 |

---

## 1. Overview

Alberta Construction LLC is a licensed and insured handyman and light-construction business. The owner is friendly, honest, has many years of experience, and shows up and does the work. Right now customers find the business by word of mouth. There is no site where they can see the services, check that the business is legit, ask for a quote, or pay.

This project is a small, fast, mobile-first marketing website that turns local visitors into booked jobs and makes getting paid quick and easy.

## 2. Goals

| # | Goal | How we measure it |
|---|------|-------------------|
| G1 | Generate quote requests and phone calls | Form submissions + tap-to-call clicks per month |
| G2 | Build trust fast (licensed, insured, honest, experienced) | Bounce rate; time on page; reviews shown |
| G3 | Make paying an invoice take under a minute | % of invoices paid online; days to payment |
| G4 | Show up in local search ("handyman near me", "fence repair [town]") | Google Business Profile views; organic search clicks |
| G5 | Cheap and easy to run | Hosting ≤ ~$20/mo; owner can update prices/photos without a developer |

### Non-goals (v1)

- Online self-scheduling calendar (phone and form are enough to start)
- Customer accounts or logins
- E-commerce or a parts store
- Blog (maybe later, for SEO)

## 3. Target Audience

1. **Homeowners**: fences, decks, painting, grab bars, sheds, clean-ups. Most are on a phone and want a fast answer and a fair price.
2. **Older homeowners and their adult children**: grab bars and small safety jobs. They care most about trust and clear pricing, and they need large text.
3. **Pet owners**: pet containment, fencing, dog houses.
4. **Backyard gardeners and homesteaders**: chicken coops and raised beds.
5. **DIYers**: want a pro to help with or finish a project they started.
6. **Landlords and realtors**: property clean-ups, demolition, quick repairs between tenants or before a sale.

## 4. Brand & Tone

- **Voice:** friendly, plain-spoken, honest, no hype. Write like the owner talks.
- **Key messages:**
  - Licensed & Insured
  - Many years of experience
  - Honest, upfront pricing
  - Hard-working and reliable: shows up on time and gets the job done
- **Look:** clean and sturdy. Earthy or workwear colors (e.g., deep green or navy with a safety-orange accent), big readable type, and real photos of real jobs. No stock photos of models in hard hats.
- **Tagline ideas** (pick one or write your own):
  - "Honest work. Fair price. Done right."
  - "Your neighborhood handyman: licensed, insured, and on time."
  - "No job too small. No corners cut."

> ⚠️ "Not a log humper": we read this as "not lazy, actually does the work" and wrote it into the reliability message above. It's slang, so we would **not** put the phrase on the site unless you want it there as a signature line. Please confirm.

## 5. Services

These are grouped so the page is easy to scan. Each service gets a card (icon/photo + 1–2 sentence description) on the Services page. The most popular ones also appear on the home page.

| Category | Services |
|----------|----------|
| **Fencing & Pets** | Fence Installation · Fence Repair · Pet Containment · Dog Houses |
| **Outdoor & Yard** | Deck Repair · Shed Installation · Chicken Coops · Raised Beds · Property Clean-ups |
| **Indoor** | Interior Painting · Cabinet & Furniture Assembly · Grab Bar Installation |
| **Projects & Heavy Work** | Demolition · Help on DIY Projects |

**Featured on home page (suggested):** Fence Installation & Repair, Deck Repair, Interior Painting, Grab Bars, Property Clean-ups, Shed Installation.

## 6. Pricing: Recommendation

**Question:** Should hourly rates ($75–$150/hr) be listed?

**Recommendation: yes, show a starting rate and say what changes it, and offer free estimates.**

- Shows **"Starting at $75/hour"** plus a short line: *"Most jobs fall between $75–$150/hr depending on the type of work, materials, and equipment. Bigger projects (fences, decks, sheds) get a free written quote with a flat price."*
- Why:
  - Up-front pricing fits the "honest" brand and screens out tire-kickers.
  - Customers are wary of handymen who won't name a price. A range builds trust.
  - A flat quote for big jobs avoids "the meter is running" worries.
- Don't publish a per-service price list in v1. It's hard to keep current and invites nitpicking.

**Open questions for the owner:** Is there a minimum charge (e.g., 1-hour minimum)? A trip fee outside the service area? Are materials billed at cost or with a markup?

## 7. Payments: Recommendation

**Goal:** paying takes under a minute, from a phone, with no account needed.

**Recommended setup:**

1. **Primary: Square** (free account, card reader available)
   - Send **invoices by text or email** with a "Pay now" link (card, Apple Pay, Google Pay, Cash App Pay).
   - Take cards **on-site** with the Square app or a $59 tap-to-pay reader. Tap to Pay on iPhone/Android needs no reader.
   - Can require **deposits** on big jobs (e.g., 50% for materials on a fence or shed).
   - Fees about 2.6–3.3% + 15¢ per card payment. No monthly fee.
2. **No-fee options:** Zelle, check, cash. List these on the invoice and the Pay page.
3. **Optional:** Venmo Business / PayPal for customers who ask for it.

**On the website:** a simple **"Pay Your Invoice"** page with:
- A button linking to the Square payment page (or "use the link in your invoice text/email")
- Zelle info (business email/phone), and check payable to "Alberta Construction LLC"
- A note on deposits and when payment is due

*Alternative:* Stripe Payment Links or QuickBooks Payments work too. Square is the simplest for a solo operator doing jobs on-site.

## 8. Site Map

```
Home
├── Services            (all services, grouped; each links to request a quote)
├── About               (owner story, experience, licensed & insured, values)
├── Our Work            (photo gallery: before/after)
├── Reviews             (testimonials + link to Google reviews)
├── Get a Free Quote    (contact / quote request form)
└── Pay Your Invoice
Footer: phone · email · service area · hours · license # · "Licensed & Insured" badge
```

In v1, **Services, Our Work, and Reviews can be sections on the home page** with a separate Services page, to keep the build small.

## 9. Page Requirements

### 9.1 Global (every page)
- **Sticky header** with logo, nav, and a **tap-to-call button** that's always visible on mobile.
- **"Get a Free Quote"** button in the header.
- Footer with contact info, service area, hours, license number, and a "Licensed & Insured" badge.

### 9.2 Home
1. **Hero:** headline + tagline, trust badges (Licensed & Insured · X+ Years Experience · Free Estimates), buttons **Call Now** and **Get a Free Quote**, and a real job photo.
2. **Featured services:** 6 cards linking to Services.
3. **Why choose us:** 3–4 points: Honest pricing · Shows up on time · Licensed & insured · Cleans up after the job.
4. **Recent work:** 4–8 before/after photos.
5. **Reviews:** 3 testimonials + "See more on Google".
6. **Pricing blurb:** "Starting at $75/hr · Free estimates on larger projects."
7. **Service area:** list of towns + optional embedded map.
8. **Final call to action:** "Ready to get it done?" → Call / Quote.

### 9.3 Services
- All 14 services, grouped by category (Section 5).
- Each service: name, icon or photo, 1–2 sentence description, "Request a quote for this" link (pre-fills the form).

### 9.4 About
- Owner photo and short story (background, years in the trade, why they started the business).
- Values: honesty, reliability, quality work, respect for your home.
- License and insurance details.

### 9.5 Get a Free Quote (form)
| Field | Type | Required |
|-------|------|----------|
| Name | text | ✅ |
| Phone | tel | ✅ |
| Email | email | ✅ |
| Address / town | text | ✅ |
| Service needed | dropdown (14 services + "Other") | ✅ |
| Project description | textarea | ✅ |
| Photos | file upload (up to 5) | optional |
| Preferred contact method | radio: call / text / email | optional |
| Timeline | dropdown: ASAP / within 2 weeks / within a month / flexible | optional |

- On submit: confirmation message ("Thanks! We'll get back to you within 1 business day."), an email to the owner (and a text alert if possible), and spam protection (honeypot + hCaptcha/Turnstile).

### 9.6 Pay Your Invoice
- See Section 7.

## 10. Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| F1 | Mobile-first responsive design (most traffic will be phones) | Must |
| F2 | Tap-to-call and tap-to-text links | Must |
| F3 | Quote request form with email notification to owner | Must |
| F4 | Photo uploads on quote form | Should |
| F5 | Pay Your Invoice page with Square link + Zelle/check info | Must |
| F6 | Photo gallery (before/after) | Should |
| F7 | Testimonials section; link to Google Business Profile reviews | Should |
| F8 | Owner can update photos, services, prices, and reviews without code (simple CMS or well-documented content files) | Should |
| F9 | Pre-fill the service in the quote form from a service card | Could |
| F10 | Text (SMS) alert to owner on new quote request | Could |

## 11. Non-Functional Requirements

- **Performance:** Lighthouse ≥ 90 on mobile. Page loads in under 2s on 4G. Compress images (WebP/AVIF).
- **Accessibility:** WCAG 2.1 AA. Base text ≥ 18px, strong color contrast, and large tap targets, which matter for older customers.
- **SEO:**
  - Unique title/meta description per page, including "handyman" + town names.
  - `LocalBusiness` / `HomeAndConstructionBusiness` schema markup (name, phone, area served, hours).
  - Sitemap.xml and robots.txt.
  - Set up and link a **Google Business Profile**. For a local handyman this matters more than anything else on this list.
- **Security:** HTTPS, form spam protection, no card data stored on our site (payments go through Square).
- **Hosting:** Static site on Netlify, Cloudflare Pages, or Vercel (free tier). Custom domain (~$12/yr), e.g. `albertaconstructionllc.com`.
- **Analytics:** Privacy-friendly analytics (e.g., Plausible, or GA4) tracking calls, form submits, and Pay clicks.

## 12. Suggested Tech Stack

- **Framework:** Astro (or plain HTML/CSS). Static, fast, and cheap to host.
- **Styling:** Tailwind CSS or simple custom CSS.
- **Forms:** Netlify Forms or Formspree (email notification, file uploads, spam filter).
- **Content:** Markdown/JSON content files for services, reviews, and gallery. Optionally Decap CMS so the owner can edit from a browser.
- **Payments:** Square (external links only).
- **Hosting:** Netlify or Cloudflare Pages, auto-deployed from this GitHub repo.

## 13. Content Checklist (needed from owner)

- [ ] Logo (or we make a simple text logo)
- [ ] Business phone number and email
- [ ] Service area (towns/counties) and business hours
- [ ] License number and insurer (or just "Licensed & Insured")
- [ ] Years of experience
- [ ] Owner photo + short bio (a few sentences is fine)
- [ ] 10–20 job photos, before/after if possible
- [ ] 3–5 customer reviews (with permission to use first name + town)
- [ ] Payment details: Square account, Zelle email/phone
- [ ] Pricing answers: minimum charge, trip fee, materials policy
- [ ] Confirm the "not a log humper" wording (Section 4)
- [ ] Domain name preference

## 14. Milestones

| Phase | Deliverable |
|-------|-------------|
| 1. PRD | This document, approved by owner |
| 2. Design | Color/type choices + home page mockup |
| 3. Build v1 | Home, Services, About, Quote form, Pay page |
| 4. Content | Real photos, bio, reviews dropped in |
| 5. Launch | Domain, hosting, Google Business Profile, analytics |
| 6. Post-launch | Gallery growth, more reviews, service-area SEO pages |

## 15. Open Questions

1. What town/region is the business based in, and how far will you travel? (This drives SEO and the service-area section.)
2. Is "Alberta" a place name, a family name, or something else? Knowing this helps with the About page story.
3. Minimum charge, trip fee, and materials policy? (Section 6)
4. Do you already have a Square, Zelle, or other payment account?
5. Do you have an existing Google Business Profile, Facebook page, or reviews anywhere?
6. Any jobs you **don't** want to advertise, e.g. demolition size limits?
7. Should quote requests go to email, text, or both?

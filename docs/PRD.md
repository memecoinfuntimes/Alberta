# Alberta Construction LLC — Website PRD

| | |
|---|---|
| **Status** | Draft v0.2 |
| **Owner** | Alberta Construction LLC |
| **Based in** | North Portland, OR 97217 |
| **Serves** | Greater Portland metro area |
| **Last updated** | 2026-09-23 |

---

## 1. Overview

Alberta Construction LLC is a licensed and insured handyman and light-construction business in North Portland. The owner is friendly, honest, has many years of experience, and shows up and does the work. The business is new online: no website, no Google Business Profile, no online reviews, and no job photos yet.

This project is a small, fast, mobile-first marketing website that turns local visitors into booked jobs and makes getting paid quick and easy. **Because there are no job photos or reviews yet, v1 has to earn trust through strong design, clear copy, credentials, and a clear process instead of a portfolio.** Photos and reviews get added once they exist (Section 9.7).

## 2. Goals

| # | Goal | How we measure it |
|---|------|-------------------|
| G1 | Generate quote requests and phone calls | Form submissions + tap-to-call clicks per month |
| G2 | Build trust without photos or reviews (licensed, insured, honest, experienced) | Bounce rate; time on page; quote conversion rate |
| G3 | Make paying an invoice take under a minute | % of invoices paid online; days to payment |
| G4 | Show up in Portland local search ("handyman North Portland", "fence repair Portland") | Google Business Profile views; organic search clicks |
| G5 | Cheap and easy to run | Hosting ≤ ~$20/mo; owner can add photos/reviews later without a developer |

### Non-goals (v1)

- Photo gallery / portfolio (no photos yet; planned for v1.1)
- Reviews section (no reviews yet; planned for v1.1)
- Online self-scheduling calendar
- Customer accounts or logins
- Blog

## 3. Target Audience

1. **Portland-area homeowners**: fences, decks, painting, grab bars, sheds, clean-ups. Mostly on phones, and they want a fast answer and a fair price.
2. **Older homeowners and their adult children**: grab bars and small safety jobs. They care about trust and clear pricing, and they need large text.
3. **Pet owners**: pet containment, fencing, dog houses.
4. **Backyard gardeners and urban homesteaders**: chicken coops and raised beds. This is a strong fit for Portland; backyard chickens and garden beds are very common in North and NE Portland.
5. **DIYers**: want a pro to help with or finish a project they started.
6. **Landlords, property managers, and realtors**: property clean-ups, demolition, quick repairs between tenants or before a sale.

## 4. Brand & Tone

- **Voice:** friendly, plain-spoken, honest, no hype. Write like the owner talks: a neighbor who's good with tools.
- **Key messages:**
  - Licensed & Insured (with Oregon CCB number)
  - Many years of experience
  - Honest, upfront pricing
  - Hard-working and reliable: shows up on time, does the job, cleans up
  - Local: based in North Portland
- **Tagline ideas** (pick one or write your own):
  - "Honest work. Fair price. Done right."
  - "North Portland's hard-working handyman."
  - "Licensed, insured, and actually shows up."
- The phrase "not a leg humper" is **not** used on the site. Its meaning (hard-working, not lazy, gets the job done) is carried by the reliability message above.

## 5. Design Direction

### 5.1 References
- **[Neil Kelly](https://www.neilkelly.com/)** (Portland design-build remodeler): the overall look and feel. Refined and trustworthy, warm and earthy, lots of white space, confident typography, and a craftsman quality that feels established rather than "cheap handyman".
- **[My Handyman LA](https://myhandymanla.com/)**: the structure. It works with **few or no job photos**, relying on clear service listings, icons, and strong calls to action. This is what we need for v1.

> Note: the build environment couldn't load these two sites, so the notes above come from general knowledge of them. Before design mockups, we'll check the reference sites against the mockup.

### 5.2 Visual system
- **Palette (earthy, Pacific Northwest):**
  - Primary: deep forest/evergreen green (e.g., `#2F4A3A`)
  - Neutral base: warm off-white/cream (e.g., `#F7F4EE`) and charcoal text (`#232323`)
  - Accent: warm cedar/rust (e.g., `#B5562B`) for buttons and calls to action
  - Supporting: muted sage or stone gray for section backgrounds
- **Typography:** a classic serif for headings (e.g., *Fraunces*, *Playfair Display*, or *Lora*) paired with a clean sans-serif for body text (e.g., *Inter* or *Source Sans*). Body text ≥ 18px.
- **Layout:** generous white space, wide sections that alternate between cream and green, and a max content width of ~1200px.

### 5.3 Visuals without job photos
Until real job photos exist, the site uses:
1. **Custom line icons** for each service (fence, deck, paintbrush, shed, chicken, grab bar, etc.) in one consistent style.
2. **Typography-led hero**: a big serif headline on a solid or subtly textured background (wood grain, blueprint grid, or a topographic pattern) instead of a photo.
3. **Optional, tasteful Portland imagery**: a licensed, *non-job* photo such as a North Portland street, St. Johns Bridge, or a craftsman house exterior, used as atmosphere. **Never present a stock photo as the business's own work.**
4. **Simple illustrations** (optional): e.g., a line drawing of a craftsman house with the services around it.
5. **Owner photo** (strongly recommended): one friendly photo of the owner with their truck or tools does more for trust than any stock image. This can be taken with a phone.

## 6. Services

Each service gets a card (icon + 1–2 sentence description) on the Services page. The featured ones also appear on the home page.

| Category | Services |
|----------|----------|
| **Fencing & Pets** | Fence Installation · Fence Repair · Pet Containment · Dog Houses |
| **Outdoor & Yard** | Deck Repair · Shed Installation · Chicken Coops · Raised Beds · Property Clean-ups |
| **Indoor** | Interior Painting · Cabinet & Furniture Assembly · Grab Bar Installation |
| **Projects & Heavy Work** | Demolition · Help on DIY Projects |

**Featured on home page:** Fence Installation & Repair, Deck Repair, Interior Painting, Grab Bars, Chicken Coops & Raised Beds, Property Clean-ups.

## 7. Pricing (on the website)

Show a starting rate with a range, and offer free estimates on bigger jobs. **Do not mention materials billing anywhere on the site.**

Suggested copy:

> **Starting at $75/hour.** Most jobs run $75–$150/hr depending on the type of work. Bigger projects like fences, decks, and sheds get a **free written estimate** with a set price, so there are no surprises.

- Don't publish a per-service price list in v1.
- **Still open:** Is there a minimum charge (e.g., 1-hour minimum) or trip fee for far edges of the metro area? If yes, add one short line; if no, leave it off.

## 8. Payments

**Goal:** paying takes under a minute, from a phone, with no account needed.

The owner does not have Square or Zelle yet. Recommended setup (both free to open):

1. **Square (primary)**
   - Send **invoices by text or email** with a "Pay now" button (card, Apple Pay, Google Pay, Cash App Pay).
   - Take cards **on-site** with Tap to Pay on iPhone/Android (no reader needed).
   - Require **deposits** on bigger jobs if wanted.
   - Fees about 2.6–3.3% + 15¢ per card payment. No monthly fee.
2. **Zelle (no fees)**: set up through the business bank account.
3. **Cash and check** (payable to "Alberta Construction LLC").

**On the website:** a simple **"Pay Your Invoice"** page with:
- A **Pay Online** button (Square payment link) + "or tap the link in your invoice text/email"
- Zelle details (business email or phone)
- Check payee name and mailing address (optional)

### Owner setup checklist (before launch)
- [ ] Open a business bank account for the LLC (if not already)
- [ ] Create a free Square account → turn on Invoices and Tap to Pay
- [ ] Enable Zelle for the business account
- [ ] Send the Square payment link + Zelle info so we can add them to the site

## 9. Site Map & Page Requirements

```
Home
├── Services            (all services, grouped by category)
├── About               (owner, experience, licensed & insured, values)
├── Get a Free Quote    (quote request form)
└── Pay Your Invoice
Footer: phone · email · service area · hours · Oregon CCB # · "Licensed & Insured"
```

### 9.1 Global (every page)
- **Sticky header** with logo, nav, and a **tap-to-call button** always visible on mobile.
- **"Get a Free Quote"** button in the header (accent color).
- **Footer:** contact info, "Based in North Portland, serving the Greater Portland area", hours, **Oregon CCB license number**, and "Licensed & Insured".

### 9.2 Home
1. **Hero** (typography-led, no work photo): headline + tagline, trust badges (Licensed & Insured · CCB #XXXXXX · X+ Years Experience · Free Estimates), buttons **Call Now** and **Get a Free Quote**.
2. **Featured services:** 6 icon cards linking to Services.
3. **Why choose us:** 4 points: Honest, upfront pricing · Shows up on time · Licensed & insured · Leaves your place clean.
4. **How it works** (builds trust in place of a portfolio): ① Call or send a quote request → ② We talk through the job and give you a price → ③ We show up and get it done → ④ Pay easily by card, Zelle, cash, or check.
5. **Pricing blurb:** see Section 7.
6. **Service area:** "Based in North Portland (97217), serving the Greater Portland metro." List of areas (Section 10) + optional simple map.
7. **Our promise / guarantee:** e.g., "If something's not right, call us and we'll make it right." (owner to confirm wording)
8. **FAQ** (4–6 questions): Are you licensed and insured? Do you give free estimates? How do I pay? What areas do you serve? How soon can you start? Is there a job too small?
9. **Final call to action:** "Ready to get it done?" → Call / Quote.

### 9.3 Services
- All 14 services grouped by category (Section 6).
- Each: icon, name, 1–2 sentence description, and a "Request a quote" link that pre-fills the form.

### 9.4 About
- Owner photo (recommended) and short story: background, years in the trade, why they started the business, and that they're a North Portland local.
- Values: honesty, reliability, quality work, respect for your home.
- License (CCB #) and insurance details.

### 9.5 Get a Free Quote (form)
| Field | Type | Required |
|-------|------|----------|
| Name | text | ✅ |
| Phone | tel | ✅ |
| Email | email | ✅ |
| Address / neighborhood or city | text | ✅ |
| Service needed | dropdown (14 services + "Other") | ✅ |
| Project description | textarea | ✅ |
| Photos of the project | file upload (up to 5) | optional |
| Preferred contact method | call / text / email | optional |
| Timeline | ASAP / within 2 weeks / within a month / flexible | optional |

- On submit: a confirmation message ("Thanks! We'll get back to you within 1 business day."), an email to the owner (and text if possible), and spam protection (honeypot + Turnstile/hCaptcha).
- Photos from *customers* help the owner quote remotely. This is different from the portfolio, which the site doesn't have yet.

### 9.6 Pay Your Invoice
- See Section 8.

### 9.7 Later additions (v1.1, once content exists)
Build these **ready to switch on** without a redesign:
- **Our Work gallery** (before/after). Start taking before/after phone photos on every job now.
- **Reviews section** + "Leave us a review" link to Google.
- Swap the hero's text/texture for a real job photo if it looks better.

## 10. Service Area

**Base:** North Portland, OR 97217 (Arbor Lodge, Kenton, Overlook, Piedmont, Humboldt area)

**Service area (Greater Portland metro):**
- **Portland:** North, Northeast, Southeast, Southwest, Northwest (St. Johns, Kenton, Arbor Lodge, Overlook, University Park, Alberta Arts, Irvington, Hollywood, Sellwood, Hawthorne, etc.)
- **Westside:** Beaverton, Hillsboro, Tigard, Tualatin, Sherwood
- **South:** Lake Oswego, West Linn, Milwaukie, Oregon City, Happy Valley, Clackamas
- **East:** Gresham, Troutdale, Fairview
- **Washington side (Vancouver, Camas):** ⚠️ only if the owner is also registered as a contractor in **Washington** (WA L&I). An Oregon CCB license does not cover work in WA. Leave it off the site until confirmed.

> Fun fit: the name "Alberta" matches Portland's well-known Alberta Street / Alberta Arts District in NE Portland. It's worth mentioning on the About page if that's where the name comes from.

## 11. Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| F1 | Mobile-first responsive design | Must |
| F2 | Tap-to-call and tap-to-text links | Must |
| F3 | Quote request form with email notification to owner | Must |
| F4 | Photo uploads on quote form | Should |
| F5 | Pay Your Invoice page with Square link + Zelle/check/cash info | Must |
| F6 | Oregon CCB license number shown on every page (footer) | Must |
| F7 | "How it works", FAQ, and guarantee sections on home page | Must |
| F8 | Gallery and reviews components built but hidden until content exists | Should |
| F9 | Owner can add photos/reviews/edit text without code (content files or simple CMS) | Should |
| F10 | Pre-fill the service in the quote form from a service card | Could |
| F11 | Text (SMS) alert to owner on new quote request | Could |

## 12. Non-Functional Requirements

- **Performance:** Lighthouse ≥ 90 on mobile; page loads in under 2s on 4G. This is easy to hit since there are few images.
- **Accessibility:** WCAG 2.1 AA. Body text ≥ 18px, strong contrast (check the green/cream/rust palette), large tap targets.
- **SEO (Portland local):**
  - Titles and descriptions with "handyman" + "North Portland" / "Portland, OR".
  - `HomeAndConstructionBusiness` schema: name, phone, address/area served (Portland metro), hours.
  - Sitemap.xml and robots.txt.
  - **Google Business Profile** (to be created, see Section 14). Set it up as a service-area business so the home address stays hidden.
- **Legal/compliance:** Oregon requires the **CCB license number in all advertising**, including the website. It goes in the footer and on the About page.
- **Security:** HTTPS, form spam protection, no card data stored on the site (payments go through Square).
- **Hosting:** static site on Netlify or Cloudflare Pages (free tier) + custom domain (~$12/yr).
- **Analytics:** privacy-friendly (Plausible or GA4) tracking calls, form submissions, and Pay clicks.

## 13. Suggested Tech Stack

- **Framework:** Astro (static, fast, cheap to host)
- **Styling:** Tailwind CSS or custom CSS using the Section 5.2 palette
- **Icons:** a consistent line-icon set (e.g., Lucide/Phosphor) plus a few custom icons (chicken coop, fence, grab bar)
- **Fonts:** Google Fonts (serif heading + sans body)
- **Forms:** Netlify Forms or Formspree
- **Content:** Markdown/JSON files for services, FAQ, and future gallery/reviews. Decap CMS is optional.
- **Payments:** Square payment link (external)
- **Hosting:** Netlify or Cloudflare Pages, auto-deployed from this GitHub repo

## 14. Content & Setup Checklist (owner)

**Needed for launch**
- [ ] Business phone number and email
- [ ] Business hours
- [ ] **Oregon CCB license number** and insurance confirmation
- [ ] Years of experience
- [ ] Short bio (a few sentences is fine) + owner photo (recommended)
- [ ] Logo (or we make a simple text logo)
- [ ] Square payment link + Zelle info (Section 8)
- [ ] Minimum charge / trip fee answer (Section 7)
- [ ] Guarantee wording (Section 9.2)
- [ ] Domain name preference (e.g., `albertaconstructionpdx.com`)

**Right after launch**
- [ ] Create a **Google Business Profile** (service-area business, North Portland, link to the website)
- [ ] Ask the first 5–10 happy customers for Google reviews
- [ ] Take before/after photos on every job for the future gallery
- [ ] Optional: Nextdoor business page (popular for Portland handyman referrals), Yelp, Facebook

## 15. Milestones

| Phase | Deliverable |
|-------|-------------|
| 1. PRD | This document, approved by owner |
| 2. Design | Palette/type + home page mockup (checked against the Neil Kelly / My Handyman LA references) |
| 3. Build v1 | Home, Services, About, Quote form, Pay page |
| 4. Content | Phone, CCB #, bio, payment links dropped in |
| 5. Launch | Domain, hosting, analytics, Google Business Profile |
| 6. v1.1 | Turn on gallery + reviews as photos and reviews come in |

## 16. Open Questions

1. Minimum charge or trip fee? (Section 7)
2. Is "Alberta" named after the Alberta Arts District / Alberta Street, or something else? (for the About story)
3. Registered to work in Washington (Vancouver)? (Section 10)
4. Any jobs you **don't** want to advertise, e.g. demolition size limits?
5. Should quote requests go to email, text, or both?
6. Guarantee wording you're comfortable with?

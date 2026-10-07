# SEO Audit — ceramic-my-car.com (Phase 1)

Date: 2026-10-07 | Branch: `seo/gsc-rebuild` | GSC baseline: `seo-data/gsc-data.md`
Scope: read-only audit of the live Next.js 15 + Tailwind codebase. No site code changed.

## 0. Executive summary

The site is technically well-built (SSG/ISR, self-referencing canonicals, valid JSON-LD, AI-crawler-friendly
robots, llms.txt, IndexNow route) but has **three high-risk problems** and a set of fixable on-page gaps:

1. **Scaled thin content risk (HIGH):** 98 `/locations/{area}/{service}` pages are generated from 7 service
   templates with only the location name swapped (~95% identical text). This matches Google's "scaled content
   abuse" pattern. A handful already rank well (pos 3-11) — protect those; the long tail needs a decision:
   write genuinely unique local content per page, or `noindex` the tail.
2. **Trust/factual risk (HIGH):** testimonials with specific names/dates/cars (`content/testimonials.ts`),
   `aggregateRating: 4.9/847`, "GYEON Certified", "Xpel Authorized", specific prices, and invented drive times
   ("15–25 minutes from {every location}") are baked into copy AND schema. Per the master prompt's hard rule,
   all of these need owner verification — collected in `seo-data/TODO_BUSINESS_FACTS.md`.
3. **Cannibalisation + thin pillars (MEDIUM):** the homepage outranks `/services/ceramic-coating` for
   "ceramic coating dubai" queries (1,099 vs 365 impressions). Service pages are 400–650 words vs the
   1,500–2,200 blueprint; 5 of 7 have fewer than 6 FAQs; all 7 titles are 66–78 chars with "Near Me" stuffing.

## 1. Site inventory

| Route pattern | Count | Rendering | Template |
|---|---|---|---|
| `/` | 1 | ISR (1h) | `app/page.tsx` + Hero, ServicesGrid, WhyUs, Testimonials, FAQSection, CTABanner, LocationsSection, GalleryPreview |
| `/services` | 1 | ISR | `app/services/page.tsx` |
| `/services/[slug]` | 7 | ISR (24h), static params | `app/services/[slug]/page.tsx` |
| `/locations` | 1 | ISR | `app/locations/page.tsx` |
| `/locations/[slug]` | 14 | ISR (24h), static params | `app/locations/[slug]/page.tsx` |
| `/locations/[slug]/[service]` | 98 | ISR (24h), static params | `app/locations/[slug]/[service]/page.tsx` |
| `/pricing`, `/gallery`, `/reviews`, `/faq`, `/about`, `/contact`, `/book` | 7 | ISR/SSG | individual pages |
| `/admin/*`, `/api/indexnow` | — | — | blocked in robots; not in sitemap |
| **Total in sitemap** | **129** | | `app/sitemap.ts` (10 static + 7 services + 14 locations + 98 combos) |

Data sources: `content/services.ts` (7 services), `lib/constants.ts` (`DUBAI_LOCATIONS` ×14, `SITE_CONFIG`),
`content/faqs.ts`, `content/pricing.ts`, `content/testimonials.ts`.

## 2. URL table (GSC data + verdicts)

GSC columns: impressions | clicks | avg position (last 7 days, from §12.2). "Cluster" = §12.3 target.

### 2.1 Static + hub pages

| URL | Impr | Clicks | Pos | Mapped cluster | Title (chars) / H1 | Words | Schema | Verdict |
|---|---|---|---|---|---|---|---|---|
| `/` | 1099 | 5 | 16.2 | Service: ceramic coating (cannibalised) | 78-char stuffed title / H1 "Car Ceramic Coating Services Dubai" | ~1,200 | LocalBusiness, WebSite, FAQPage, BreadcrumbList | **KEEP-OPTIMISE — de-cannibalise**: retarget to brand + "car protection Dubai", push link equity to `/services/ceramic-coating` |
| `/services` | 51 | 0 | 61.4 | — (hub) | default template title | ~400 | LocalBusiness, WebSite, BreadcrumbList | KEEP-OPTIMISE: strengthen as hub, add descriptive copy + links to all pillars |
| `/services/ceramic-coating` | 365 | 1 | 22.3 | Service: ceramic coating (164q/786 impr/pos 14) | 75 chars / H1 "Ceramic Coating Dubai" | ~600 | Service+Offer, FAQPage (6), BreadcrumbList, Speakable | **KEEP-OPTIMISE (P0)**: must become the clear winner for the cluster; needs 1,500+ words, answer block, 6-10 FAQs |
| `/services/ppf` | 672 | 0 | 38.8 | Service: ppf (98q/371 impr/pos 46) | 66 chars / H1 "Paint Protection Film (PPF) Dubai" | ~550 | Service+Offer, FAQPage (5), BreadcrumbList, Speakable | **KEEP-OPTIMISE (P0)**: biggest under-served opportunity; brand queries (xpel/3m/stek) need dedicated pages |
| `/services/graphene-coating` | 116 | 2 | 27.0 | Service: graphene (16q/88 impr/pos 33) | 76 chars / H1 "Graphene Coating Dubai" | ~450 | Service+Offer, FAQPage (4), BreadcrumbList | KEEP-OPTIMISE: expand FAQs to 6+, answer block |
| `/services/interior-detailing` | 83 | 0 | 60.2 | Service: interior-detailing (34q/92 impr/pos 50) | 78 chars / H1 "Interior Detailing Dubai" | ~350 | Service+Offer, FAQPage (1), BreadcrumbList | KEEP-OPTIMISE: only 1 FAQ — expand to 6-10 |
| `/services/paint-correction` | 21 | 0 | 30.5 | Service: paint-correction (22q/72 impr/pos 9) | 75 chars / H1 "Paint Correction Dubai" | ~400 | Service+Offer, FAQPage (2), BreadcrumbList | KEEP-OPTIMISE: pos 9 already — push into top 5 with content depth |
| `/services/window-tinting` | 54 | 0 | 38.4 | Service: window-tinting (13q/27 impr/pos 55) | 74 chars / H1 "Window Tinting Dubai" | ~450 | Service+Offer, FAQPage (3), BreadcrumbList | KEEP-OPTIMISE: expand FAQs, RTA/legal content is a strength |
| `/services/exterior-detailing` | 16 | 1 | 41.7 | Service: detailing (19q/55 impr/pos 24) | 72 chars / H1 "Exterior Detailing Dubai" | ~350 | Service+Offer, FAQPage (1), BreadcrumbList | KEEP-OPTIMISE: only 1 FAQ; merge risk with interior-detailing for "car detailing dubai" — keep both, differentiate |
| `/pricing` | 88 | 0 | 26.7 | Price: general (2q/2 impr/pos 4) | template title | ~500 | LocalBusiness, WebSite | KEEP-OPTIMISE: add price subpages (ceramic/ppf/paint-correction/window-tinting/graphene) per cluster map |
| `/locations` | 75 | 0 | 53.0 | Near-me clusters (hub) | template title | ~400 | LocalBusiness, WebSite | KEEP-OPTIMISE: "near me" intent hub — add suburb list, map, service links |
| `/faq` | 28 | 0 | 21.6 | Informational | template title | ~600 | FAQPage | KEEP-OPTIMISE: keep as general FAQ; guides take the deep informational intent |
| `/about` | 21 | 0 | 32.8 | — | template title | ~400 | LocalBusiness | KEEP-OPTIMISE: E-E-A-T page — needs real team/expertise content (owner input) |
| `/contact` | 12 | 0 | 82.3 | — | template title | ~300 | LocalBusiness | KEEP: NAP consistency, embedded map present |
| `/gallery` | 9 | 0 | 33.8 | — | template title | ~150 | ImageObject via sitemap-images.xml | KEEP: proof asset; expand with real job photos |
| `/reviews` | 26 | 1 | 12.5 | Informational ("service my car review") | template title | ~500 | **Review schema from `content/testimonials.ts`** | **KEEP-OPTIMISE but VERIFY FIRST**: reviews look fabricated — see §5. Do not expand until owner confirms |
| `/book` | 0 | 0 | — | — (conversion) | template title | ~200 | — | KEEP: conversion page, noindex not needed; keep out of aggressive SEO |

### 2.2 Location hub pages (`/locations/[slug]`, 14 pages, one template)

| URL | Impr | Clicks | Pos | Notes | Verdict |
|---|---|---|---|---|---|
| `/locations/al-quoz` | 99 | 1 | 44.0 | Workshop location; "car wrapping in al quoz" (11 impr) is NOT an offered service | KEEP-OPTIMISE: strongest location page; add wrapping disclaimer/redirect intent |
| `/locations/dubai-hills` | 115 | 0 | 60.0 | | KEEP-OPTIMISE |
| `/locations/bur-dubai` | 84 | 0 | 59.4 | | KEEP-OPTIMISE |
| `/locations/deira` | 29 | 0 | 54.2 | | KEEP-OPTIMISE |
| `/locations/downtown-dubai` | 22 | 0 | 69.3 | | KEEP-OPTIMISE |
| `/locations/dubai-marina` | 17 | 0 | 57.9 | | KEEP-OPTIMISE |
| `/locations/jvc` | 14 | 0 | 23.7 | "jvc car detailing" pos 11 | KEEP-OPTIMISE: closest to page 1 |
| `/locations/palm-jumeirah` | 6 | 0 | 76.5 | | KEEP-OPTIMISE |
| `/locations/motor-city` | 5 | 0 | 31.4 | | KEEP-OPTIMISE |
| `/locations/business-bay` | 5 | 0 | 33.0 | | KEEP-OPTIMISE |
| `/locations/arabian-ranches` | 5 | 0 | 68.4 | | KEEP-OPTIMISE |
| `/locations/emirates-hills` | 4 | 0 | 66.8 | | KEEP-OPTIMISE |
| `/locations/mirdif` | 4 | 0 | 91.0 | | KEEP-OPTIMISE |
| +1 more (jvt) | — | — | — | 14 locations in constants | KEEP-OPTIMISE |

Template: ~600-800 words, 4 "local authority" paragraphs with location tokens swapped, contextual links to
service pillars, FAQ (3, templated per location). **Uniqueness is weak** — same 4 paragraphs × 14 locations.

### 2.3 Location × service pages (`/locations/[slug]/[service]`, 98 pages, one template)

| URL | Impr | Clicks | Pos | Verdict |
|---|---|---|---|---|
| `/locations/jvc/window-tinting` | 5 | 1 | **3.4** | **PROTECT**: ranking page 1 — strengthen, do not restructure |
| `/locations/deira/interior-detailing` | 5 | 1 | **3.6** | **PROTECT** |
| `/locations/deira/ppf` | 7 | 0 | **3.0** | **PROTECT** |
| `/locations/mirdif/window-tinting` | 14 | 0 | **3.6** | **PROTECT** |
| `/locations/deira/window-tinting` | 4 | 0 | 6.3 | PROTECT: near page 1 |
| `/locations/motor-city/window-tinting` | 4 | 0 | 7.8 | PROTECT: near page 1 |
| `/locations/al-quoz/ppf` | 10 | 0 | 9.5 | PROTECT: page 1 |
| `/locations/al-quoz/ceramic-coating` | 3 | 0 | 3.0 | PROTECT |
| `/locations/jvc/ppf` | — | — | 3.0 | PROTECT (per §12.1 notes) |
| `/locations/downtown-dubai/ppf` | 16 | 0 | 54.0 | OPTIMISE or NOINDEX (see §4) |
| `/locations/palm-jumeirah/paint-correction` | 11 | 0 | 29.4 | OPTIMISE or NOINDEX |
| `/locations/downtown-dubai/graphene-coating` | 9 | 0 | 37.9 | OPTIMISE or NOINDEX |
| `/locations/downtown-dubai/window-tinting` | 7 | 0 | 35.1 | OPTIMISE or NOINDEX |
| `/locations/mirdif/ppf` | 5 | 0 | 48.2 | OPTIMISE or NOINDEX |
| `/locations/palm-jumeirah/graphene-coating` | 4 | 0 | 94.5 | NOINDEX candidate |
| `/locations/mirdif/graphene-coating` | 4 | 0 | 83.5 | NOINDEX candidate |
| `/locations/dubai-marina/graphene-coating` | 3 | 0 | 77.0 | NOINDEX candidate |
| `/locations/downtown-dubai/interior-detailing` | 3 | 0 | 69.7 | NOINDEX candidate |
| remaining ~80 combos | 0 | 0 | — | **NOINDEX** until/unless real unique local content is written |

Template: ~700-750 words — H1 `{Service} {Location}` + "Dubai — Professional {Service} Near Me" (stuffed),
3 context paragraphs per service with location tokens swapped, 6 benefits (first 6 of service list),
3 FAQs per service with location tokens swapped, price card, cross-link grids. **~95% identical across
locations for the same service.** Title pattern `{label} {location} Dubai | Near Me From AED {price} | 4.9★`
is keyword-stuffed and over 70 chars on every page.

## 3. Duplicate / near-duplicate content analysis

| Pair | Similarity | Notes |
|---|---|---|
| Any two `/locations/{a}/{service}` vs `/locations/{b}/{service}` | **~95%** | Only location tokens differ. 98 pages. **Scaled-content risk.** |
| Any two `/locations/{a}` vs `/locations/{b}` | **~85-90%** | Same 4 authority paragraphs with tokens swapped. 14 pages. |
| `/services/ppf` FAQ vs `/locations/*/ppf` FAQs | ~40% | Same questions re-answered with local framing — acceptable if kept. |
| Homepage vs `/services/ceramic-coating` | topical overlap | Same query cluster ("ceramic coating dubai") — cannibalisation, not duplication. |

No exact-duplicate titles/descriptions site-wide (each location×service title is unique via tokens), but
**uniqueness-by-token-swap does not satisfy the "truly unique" bar** in §2 of the master prompt.

## 4. Cannibalisation list

1. **Homepage vs `/services/ceramic-coating`** for "ceramic coating dubai" variants (69+59+45+33+32+29+28 impr).
   Homepage: 1,099 impr / pos 16.2. Service page: 365 impr / pos 22.3. Google prefers the homepage today.
   Fix: retarget homepage to brand + "car protection Dubai"; make the service page the unambiguous best answer
   (1,500+ words, answer block, 6-10 FAQs, stronger internal links from homepage).
2. **`/services/exterior-detailing` vs `/services/interior-detailing`** for "car detailing dubai" (19 impr).
   Keep both pages but differentiate sharply (exterior = paint/decontamination; interior = cabin/leather).
3. **`/pricing` vs future price subpages**: build `/pricing/{service}-price-dubai` and link from `/pricing`;
   keep `/pricing` as the hub (it already ranks pos 4 for "price" queries).

## 5. Trust & factual risks (→ `TODO_BUSINESS_FACTS.md`)

1. **Testimonials look fabricated** (`content/testimonials.ts`): 8+ reviews with full names, cars (Lamborghini
   Urus, Ferrari 488 Spider), exact dates, all 5-star, `verified: true, platform: 'google'`. Rendered with
   `Review` JSON-LD on `/reviews`. If not real Google reviews, this violates Google's spam policies and the
   master prompt's hard rule 3. **#1 owner question.**
2. **`aggregateRating` 4.9 / 847 reviews** in site-wide LocalBusiness schema + "4.9★ 847 Reviews" in the
   homepage title/description and "2,400+ cars protected" stat. Verify against the real Google Business Profile.
3. **Certifications**: "GYEON Certified Installer", "Xpel Authorized Dealer", "Ceramic Pro Certified",
   "IDA Certified Detailer" appear in copy, schema-adjacent content, and PPF FAQs. Verify each.
4. **Invented drive time**: PPF location FAQ claims "approximately 15–25 minutes from {locName}" for ALL
   14 locations — impossible (Deira ≠ Dubai Marina). Replace with real drive-time bands or remove.
5. **Prices**: "From AED 1,500/2,500/800/400/250" in titles, descriptions, schema `Offer`s, and price cards.
   Confirm each starting price is real and current.
6. **Service areas**: LocalBusiness `areaServed` claims Abu Dhabi, Sharjah, Ajman; homepage keywords target
   "car ceramic coating Abu Dhabi". Confirm actual service coverage before building city pages.
7. **"Free pickup" thresholds** vary by page (AED 3,000 / 5,000 / 600 / 500) and "Warranty registered to your
   VIN", "lifetime film support", "satisfaction guaranteed" — confirm or remove.
8. **Geo/hours**: lat 25.1405 / lng 55.2195, "Al Quoz Industrial Area 4", hours incl. Friday 14:00–20:00 —
   confirm against the real shop.

## 6. Technical issues (master prompt §6)

| # | Issue | Severity | Fix (Phase 2) |
|---|---|---|---|
| T1 | **Sitemap: identical `lastmod` (= build time) on all 129 URLs + `changefreq`/`priority`** — Google distrusts this | High | Per-page real `lastmod` (git mtime of content source); drop changefreq/priority; split into sitemap index if >50 URLs per child |
| T2 | **OG images 404**: `og-home.jpg` and `og-default.jpg` referenced in metadata but missing from `public/images/` — every page shares without an image | High | Add real OG images (1200×630) or point to existing assets |
| T3 | **All 7 service titles 66–78 chars** (blueprint: 50–60); homepage title 78 chars; "Near Me" stuffing in 3 titles + 98 location titles; rating in titles | High | Rewrite per §4 blueprint |
| T4 | **98 location×service pages ~95% templated** — scaled-content risk | High | Decision: unique local content or `noindex` tail (see §2.3) |
| T5 | **Review/AggregateRating schema on unverified reviews** | High | Verify with owner first; remove schema until confirmed |
| T6 | **Service pages 350–650 words** vs 1,500–2,200 blueprint; 5/7 have <6 FAQs; **no 40–60 word answer block** under H1 | Medium | Phase 3 content expansion |
| T7 | `robots.txt` OK (AI crawlers allowed) but `sitemap-images.xml` is a **static file** — won't grow with the gallery | Low | Generate dynamically or document manual updates |
| T8 | Homepage `keywords` meta targets "car ceramic coating Abu Dhabi" — unconfirmed city | Medium | Remove until service area confirmed |
| T9 | "Dense anchor text for crawlers" paragraph on location×service pages (13 keyword links in one `<p>`) — reads as link stuffing | Medium | Replace with natural contextual links |
| T10 | `SpeakableSpecification` cssSelector `['h1','h2','.speakable']` — overly broad, low value | Low | Narrow to `.speakable` answer blocks |
| T11 | Middleware only matches `/admin/*` — no SEO impact. ISR 24h on money pages is fine. | — | None |
| T12 | 6 empty `alt=""` images — all decorative hero backgrounds with `aria-hidden="true"` | — | OK as-is, no fix needed |

### What's already good (protect in later phases)
- SSG/ISR: all SEO content server-rendered; `next/image` with sizes; `next/font` display:swap; GA4 afterInteractive
- Self-referencing canonicals everywhere; noindex nowhere accidental; `/admin` blocked in robots and excluded from sitemap
- BreadcrumbList (visible + schema), FAQPage schema matches visible FAQ text exactly, Service+Offer schema (drives the GSC "Product snippets" appearance — keep valid)
- AI crawlers allowed (GPTBot, ClaudeBot/Claude-Web, PerplexityBot, Google-Extended + others); `public/llms.txt` exists (149 lines, current phone)
- IndexNow API route (`/api/indexnow/route.ts`) with key file at `/ceramicmycar-indexnow-key.txt`
- Strong internal-link components (`TopicalClusterLinks`, `ServiceAreaLinks`) — keep the architecture, fix the stuffing (T9)
- Mobile position (16.8) already beats desktop (32.3) — mobile-first is working

## 7. Query-gap pages (from §12.3 — Phase 4 backlog, confirmation-gated)

| Page | Cluster impr | Gate |
|---|---|---|
| `/pricing/ceramic-coating-price-dubai`, `/pricing/ppf-price-dubai` | 130 / 108 | Needs owner-confirmed prices |
| `/brands/xpel-ppf`, `/brands/xpel`, `/brands/3m-ppf`, `/brands/3m-ceramic-coating`, `/brands/stek-ppf`, `/brands/ceramic-pro-ceramic-coating`, `/brands/gyeon-ceramic-coating` | 77→1 | Needs owner-confirmed brand relationships |
| `/vehicles/mercedes/ceramic-coating`, `/vehicles/range-rover/ppf` | 9 / 2 | Build after brand pages |
| `/guides/ppf-faq-hub`, `/guides/ceramic-coating-faq-hub`, `/guides/general-faq-hub`, `/guides/detailing-faq-hub`, `/guides/window-tinting-faq-hub`, `/guides/graphene-faq-hub` | 14→1 | Unblocked — pure informational |
| `/locations/abu-dhabi/*`, `/locations/sharjah/*`, `/locations/ajman/*` | 35→1 | **Owner must confirm service area** |
| `/ar` Arabic hub | 8 | Owner decision (translation quality) |

## 8. Recommended phase order (unchanged from master prompt)

Phase 2 (technical): T1, T2, T3, T5 (schema removal until verified), T7, T8, T9, T10.
Phase 3 (content): homepage de-cannibalisation → `/services/ceramic-coating` → `/services/ppf` → remaining
pillars → location hubs → protect the 9 ranking location×service pages; decide noindex vs unique-content for
the tail.
Phase 4 (new pages): guides (unblocked) → price subpages → brand pages → vehicle pages → cities/Arabic (gated).
Phase 5: indexing protocol per §8.

**Open decisions for the owner** (all in `TODO_BUSINESS_FACTS.md`): review authenticity, rating numbers,
certifications, prices, service areas, drive times, pickup thresholds, geo/hours, brand relationships,
Arabic.

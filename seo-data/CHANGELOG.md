# SEO Rebuild Changelog

Branch: `seo/gsc-rebuild` · Base: `master` @ 9ab880b (phone-number push)
All work: 2026-10-07. Branch is local-only until the owner approves a push.

## Phase 1 — Audit (3c33cc9)
- `seo-data/gsc-data.md` — full GSC baseline: 2,770 impr / 14 clicks / CTR 0.5% / pos ~26
- `seo-data/AUDIT.md` — technical + content audit, cluster map, cannibalisation findings
- `seo-data/TODO_BUSINESS_FACTS.md` — single consolidated owner question batch
- Key findings: homepage cannibalising /services/ceramic-coating; 98 location×service
  pages ~95% templated; titles 66–78 chars; unverified rating/price/certification claims

## Phase 2 — Technical SEO (cc30813, 19b5899, fd1e0bd, 99b3531)
- Sitemap: flat `app/sitemap.ts` → `/sitemap.xml` index + per-section children with
  honest lastmods from git history (`lib/seo/sitemap-utils.ts`, `lib/seo/sitemap-data.ts`);
  removed changefreq/priority; robots.txt points at index
- Schema: removed unverified AggregateRating + Review JSON-LD; trimmed areaServed to
  Dubai + 14 configured areas (Abu Dhabi/Sharjah/Ajman removed pending confirmation);
  speakable narrowed to `.speakable`
- Metadata/OG/security: real branded 1200×630 OG images; HSTS; www→apex 301
- Internal linking: keyword-stuffed crawler paragraph → natural hub links

## Phase 3 — Content (batches 1–4)
- **Pillars (2ace712, db0db64):** all 7 service pages expanded to ~1,500–2,000 words —
  AEO answer blocks, how-it-works, Dubai factors, 5-step processes, comparisons,
  myths, cost factors, 7–10 FAQs each. All 7 titles rewritten to 41–58 chars.
- **Homepage (fc1e6c2):** de-cannibalised — retargeted from "ceramic coating Dubai"
  to brand + "car protection studio Dubai"; H1 now brand-first.
- **Hubs (527c914):** /pricing (answer block, FAQPage schema, pillar links),
  /locations (near-me answer block, 5 FAQs + schema, crawler-block + drive-time fixes),
  14 location hubs (titles de-stuffed, rating/drive-time claims removed, Area 1→4 fix).
- **Tail (43c9370):** 89 location×service tail pages → `noindex,follow` + removed from
  sitemap; 9 GSC-proven combos (pos 3–10) stay indexed. Reversible via
  `INDEXED_SERVICE_LOCATIONS`.
- **Honest-claims sweep:** removed unverified 4.9★/847-review claims from homepage
  hero, footer, /reviews, /gallery, /about, /book, STATS; removed invented drive
  times (15–25/10–25 min + per-area minute claims) from templates and FAQs;
  removed "Dubai's #1 / highest-rated / most trusted" puffery; fixed Al Quoz
  Industrial Area 1→4 inconsistency (contact page + location template);
  removed Abu Dhabi/Sharjah/Ajman service-area claims from homepage footer line
  (schema already Dubai-only); softened VIN-registered warranty claim.

## Phase 4 — New pages
- **4a (5e16987):** /pricing/ceramic-coating-price-dubai, /pricing/ppf-price-dubai —
  live price tables, cost factors, 6 FAQs + schema each.
- **4b (6593333):** /guides/ppf-faq-hub, /guides/ceramic-coating-faq-hub (10 FAQs +
  Article schema), /brands/xpel-ppf; new pricing/guides/brands sitemap children.
- **4c (df7701c):** /vehicles/mercedes/ceramic-coating, /vehicles/range-rover/ppf;
  vehicles.xml sitemap.
- **4d (2747081):** /guides/ppf-vs-ceramic-coating, /guides/graphene-vs-ceramic-dubai,
  /guides/what-is-paint-correction (head-to-head tables); merged duplicate-intent
  ceramic FAQ variant into existing hub.

## Phase 5 — QA & handover
- `scripts/seo-lint.mjs` — 8-check SEO quality gate (banned claims, title/desc
  lengths, canonicals, sitemap integrity, noindex consistency, assets, speakable)
- `.github/workflows/seo.yml` — CI: lint + production build on every push/PR
- `seo-data/INDEXING_CHECKLIST.md` — deploy, GSC resubmission, top-10 URL
  Inspection, IndexNow, GBP checklist, 30/60/90-day measurement plan
- `seo-data/PROGRESS.md` — phase tracker

## Deliberately NOT done (blocked on owner)
- Review/aggregateRating schema (testimonials unverified)
- Price subpages for graphene/tinting/detailing (await price confirmation)
- Brand pages for 3M/SunTek/GYEON (await relationship confirmation)
- Abu Dhabi/Sharjah/Ajman + Arabic pages (await confirmation)
- New pages depending on any TODO_BUSINESS_FACTS.md answers

# SEO Rebuild Progress — ceramic-my-car.com

Branch: `seo/gsc-rebuild` | Baseline: `seo-data/gsc-data.md` (2,770 impr / 14 clicks / pos ~26, last 7d)

## Phase 1 — Audit ✅ (2026-10-07, commit 3c33cc9)
- Saved GSC data, full audit (`AUDIT.md`), owner question list (`TODO_BUSINESS_FACTS.md`)
- No site code changed

## Phase 2 — Technical fixes ✅ (2026-10-07)
- [x] 2a (cc30813): sitemap index (`/sitemap.xml` → pages/services/locations/service-locations + images),
      real per-page lastmod from git history, dropped changefreq/priority
- [x] 2b (19b5899): removed aggregateRating + Review JSON-LD (unverified), trimmed areaServed to Dubai areas,
      narrowed SpeakableSpecification
- [x] 2c (fd1e0bd): generated real 1200×630 OG images, HSTS header, www→apex 301, removed Abu Dhabi keyword
- [x] 2d (pending): replaced keyword-stuffed crawler link block with natural copy
- Build verification: ⏳ pending

## Phase 3 — Content optimisation (IN PROGRESS — batch 1 done 2026-10-07)
- [x] 3a (2ace712): pillar content model (answer/how-it-works/process/myths/comparison/cost-factors sections)
- [x] 3a: `/services/ceramic-coating` → ~2,000 words, answer block, 10 FAQs (was 6)
- [x] 3a: `/services/ppf` → ~1,900 words, answer block, 10 FAQs (was 5)
- [x] 3a: all 7 service titles rewritten to 41–58 chars (were 66–78), "Near Me"/rating stuffing removed
- [x] 3b (fc1c6c2): homepage de-cannibalised → brand + "car protection studio Dubai"; hero links to 4 pillars
- [x] 3c (db0db64): deep content for remaining 5 pillars — graphene (8 FAQs), paint-correction (8),
  interior-detailing (7), exterior-detailing (7), window-tinting (9); all with answer/process/myths/comparison
- [x] 3d (527c914): pricing hub (answer block, FAQ schema, pillar links), locations hub (near-me
  answer block, 5 FAQs + schema, crawler-block + drive-time fixes), location hub template ×14
  (titles de-stuffed, rating/drive-time claims removed, Area 1/4 address fix)
## Phase 4 — New Pages (from cluster map)
- [x] 4a (5e16987): /pricing/ceramic-coating-price-dubai (130 impr), /pricing/ppf-price-dubai (108 impr)
  — answer blocks, live price tables, cost factors, 6 FAQs each + schema
- [x] 4b (6593333): /guides/ppf-faq-hub, /guides/ceramic-coating-faq-hub (10 FAQs each + Article
  schema), /brands/xpel-ppf (77 impr); new pricing/guides/brands sitemap children
- [x] 4c (df7701c): /vehicles/mercedes/ceramic-coating, /vehicles/range-rover/ppf (5 FAQs each,
  model-aware content, vehicles.xml sitemap)
- [x] 4d (2747081): /guides/ppf-vs-ceramic-coating (24 impr), /guides/graphene-vs-ceramic-dubai
  (16 impr), /guides/what-is-paint-correction — head-to-head tables + FAQs + schema
- [ ] Remaining new pages: more brand pages (3M, SunTek, GYEON — after brand-relationship
  confirmation), more guides/vehicles as GSC data justifies
- [ ] Phase 5: INDEXING_CHECKLIST, GSC resubmission, top-10 URL Inspection, GBP checklist, 30/60/90-day plan
- [ ] CHANGELOG.md, scripts/seo-lint.ts, CI quality gate
- Build verification: ✅ green (159 pages, 2026-10-07)

## Phase 4 — New pages (NOT STARTED)
Backlog: price subpages → guides (unblocked) → brand pages → vehicle pages → Abu Dhabi/Sharjah/Ajman + Arabic (gated).

## Phase 5 — Indexing & monitoring (NOT STARTED)
Needs: GSC sitemap-index submission, URL Inspection on top 10 URLs, GBP checklist.

## Open owner questions
See `seo-data/TODO_BUSINESS_FACTS.md` — 7 sections, ~30 questions. Nothing in Phase 3+ starts without §1–§3.

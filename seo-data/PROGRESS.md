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
- [ ] `/pricing` hub, `/locations` hub, 14 location hubs
- [ ] Location×service: protect the 9 ranking pages; DECISION NEEDED on the ~89 tail pages (unique content vs noindex)
- Build verification: ✅ green (145 pages, 2026-10-07)

## Phase 4 — New pages (NOT STARTED)
Backlog: price subpages → guides (unblocked) → brand pages → vehicle pages → Abu Dhabi/Sharjah/Ajman + Arabic (gated).

## Phase 5 — Indexing & monitoring (NOT STARTED)
Needs: GSC sitemap-index submission, URL Inspection on top 10 URLs, GBP checklist.

## Open owner questions
See `seo-data/TODO_BUSINESS_FACTS.md` — 7 sections, ~30 questions. Nothing in Phase 3+ starts without §1–§3.

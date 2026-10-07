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

## Phase 3 — Content optimisation (NOT STARTED)
Order: `/services/ceramic-coating` → `/services/ppf` → `/` (de-cannibalise) → graphene → interior-detailing →
paint-correction → window-tinting → exterior-detailing → `/pricing` → `/locations` hub → location hubs →
location×service (protect the 9 ranking pages first; decide noindex vs unique content for the tail).
Blocked on: owner answers in TODO_BUSINESS_FACTS.md (reviews, prices, certifications at minimum).

## Phase 4 — New pages (NOT STARTED)
Backlog: price subpages → guides (unblocked) → brand pages → vehicle pages → Abu Dhabi/Sharjah/Ajman + Arabic (gated).

## Phase 5 — Indexing & monitoring (NOT STARTED)
Needs: GSC sitemap-index submission, URL Inspection on top 10 URLs, GBP checklist.

## Open owner questions
See `seo-data/TODO_BUSINESS_FACTS.md` — 7 sections, ~30 questions. Nothing in Phase 3+ starts without §1–§3.

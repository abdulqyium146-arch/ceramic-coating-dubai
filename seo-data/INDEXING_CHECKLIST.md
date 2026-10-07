# Indexing & Measurement Checklist — Ceramic My Car SEO Rebuild

Branch: `seo/gsc-rebuild` (unpushed as of 2026-10-07 — needs owner push approval).
Run this list top to bottom after the branch is merged and deployed.

## 1. Pre-deploy verification

- [ ] `npm run build` green on the merge commit (159 pages expected)
- [ ] `node scripts/seo-lint.mjs` → 0 failures
- [ ] Spot-check 3 noindexed tail URLs return `noindex,follow` in meta robots
      (e.g. /locations/jvc/ceramic-coating — a non-protected combo)
- [ ] Spot-check a protected combo (e.g. /locations/deira/ppf) has NO robots noindex
- [ ] Confirm `/sitemap.xml` renders and lists 8 children:
      pages, services, locations, service-locations, pricing, guides, brands, vehicles
      (+ sitemap-images.xml)
- [ ] Confirm `service-locations.xml` contains exactly 9 URLs (the protected combos)

## 2. Deploy

- [ ] Merge `seo/gsc-rebuild` → `master`, push (owner supplies token)
- [ ] Vercel production deploy completes; verify homepage HTTP 200 on apex
- [ ] Verify www → apex 301 still working

## 3. Google Search Console — sitemap resubmission

1. Open GSC → Sitemaps.
2. **Remove** any old submissions of individual child sitemaps if previously added
   (the old `app/sitemap.ts` generated a single flat sitemap — stale entries
   cause "couldn't fetch" noise).
3. **Submit** `https://ceramic-my-car.com/sitemap.xml` (the index). GSC discovers
   children automatically — do NOT submit children individually.
4. Wait 48–72h, then check each child shows "Success" (not "Couldn't fetch").
   Transient fetch errors on first submission are normal; re-submit once if a
   child errors, then leave it — GSC retries on its own schedule.

## 4. URL Inspection — top 10 (request indexing)

Inspect + "Request indexing" for each, in this order:

1. `https://ceramic-my-car.com/` (homepage — de-cannibalised)
2. `https://ceramic-my-car.com/services/ceramic-coating` (money page)
3. `https://ceramic-my-car.com/services/ppf` (money page)
4. `https://ceramic-my-car.com/pricing/ceramic-coating-price-dubai` (new)
5. `https://ceramic-my-car.com/pricing/ppf-price-dubai` (new)
6. `https://ceramic-my-car.com/guides/ppf-vs-ceramic-coating` (new)
7. `https://ceramic-my-car.com/brands/xpel-ppf` (new)
8. `https://ceramic-my-car.com/locations/deira/ppf` (protected combo, pos 3.0)
9. `https://ceramic-my-car.com/locations` (hub rewrite)
10. `https://ceramic-my-car.com/pricing` (hub rewrite)

Note: "Request indexing" is rate-limited (~10/day). Do the rest via sitemap.

## 5. IndexNow

- [ ] If `INDEXNOW_KEY`/`INDEXNOW_SECRET` are set in Vercel env, submit the 10 new
      page URLs via the existing IndexNow integration after deploy.
- [ ] If not configured, skip — GSC sitemap submission covers discovery.

## 6. GBP (Google Business Profile) checklist

- [ ] NAP matches site exactly: Ceramic My Car, Al Quoz Industrial Area 4, Dubai,
      +971 55 515 8223, https://ceramic-my-car.com/
- [ ] Primary category: "Auto detailing service" (or closest verified category)
- [ ] Add services matching the 7 site pillars with descriptions
- [ ] Upload 10+ real studio/work photos (before/after, team, premises)
- [ ] Publish first GBP post linking to /pricing/ceramic-coating-price-dubai
- [ ] Start review-request flow (QR at handover) — do NOT fabricate reviews
- [ ] Check GBP insights monthly alongside GSC

## 7. The 89 noindexed tail pages — what to expect

- They remain crawlable (`follow`) and user-visible; only the index directive changed.
- GSC → Pages → "Excluded by 'noindex' tag" will grow over 2–6 weeks. This is
  **expected and desired** — do not "fix" it.
- The 9 protected combos must stay in "Valid". If any flips to excluded,
  check `INDEXED_SERVICE_LOCATIONS` in `lib/seo/sitemap-data.ts`.

## 8. Measurement plan

### Baseline (2026-10-07, pre-rebuild)
- ~2,770 impressions / 28d, 14 clicks, CTR ~0.5%, avg position ~26
- Homepage: 1,099 impr @ 16.2 · /services/ceramic-coating: 365 @ 22.3 · /services/ppf: 672 @ 38.8

### Day 30 — is it indexed?
- [ ] New pages indexed: check `site:ceramic-my-car.com/pricing/` in Google
- [ ] GSC: impressions on /pricing/ceramic-coating-price-dubai > 0
- [ ] GSC: no coverage errors on new URLs
- [ ] Homepage avg position for "ceramic coating dubai" — direction vs 16.2

### Day 60 — is it ranking?
- [ ] /services/ceramic-coating avg position vs 22.3 baseline (target: < 15)
- [ ] /services/ppf avg position vs 38.8 baseline (target: < 25)
- [ ] FAQ rich results appearing (GSC → Enhancements → FAQ)
- [ ] CTR on price-intent queries vs 0.5% baseline (target: > 1.5%)

### Day 90 — is it converting?
- [ ] Clicks trend on the 7 service pillars + 2 price pages
- [ ] WhatsApp/booking conversions attributed to organic (ask "how did you hear")
- [ ] Decide: expand vehicle pages (more models) and guides based on winning queries
- [ ] Revisit owner question list (seo-data/TODO_BUSINESS_FACTS.md) — answers
      unlock: review schema, price subpages for remaining services, brand pages

### Red flags (investigate immediately)
- Any protected combo (the 9) drops out of index
- Homepage re-cannibalises ceramic-coating queries (check GSC query → page mapping)
- Impressions drop > 30% week-on-week on previously stable pages
- Manual action in GSC (unlikely — noindex tail removed the scaled-content risk)

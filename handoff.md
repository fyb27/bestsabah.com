# Handoff — June 11, 2026

## What we did this session: site-wide SEO pass

Audited all 14 pages (4 core + 10 posts). The site was already in good shape
(unique titles, meta descriptions, canonicals, OG tags, JSON-LD on posts, 1 H1
each, full alt text coverage). Found and fixed three gaps:

### 1. Twitter Card tags added to ALL 14 pages
- Previously: zero pages had `twitter:` tags.
- Added `twitter:card` (summary_large_image), `twitter:title`,
  `twitter:description`, `twitter:image` — mirrored from each page's existing
  OG values, inserted right after the `og:type` line.
- Improves how links render when shared on X.

### 2. BreadcrumbList schema added to all 10 posts
- Each post now has a `BreadcrumbList` JSON-LD: Home › Blog › [Post Title].
- Helps Google show breadcrumb rich results and understand site structure.

### 3. blog.html got structured data
- Was the only content page with no JSON-LD.
- Added `Blog` schema + `BreadcrumbList` (Home › Blog).

### Bonus: removed every em dash on the site (hard house rule)
Found 13 em dashes across 7 files, including in `<title>` and og/twitter text
that surfaces in search results. All replaced with periods, colons, or commas
to fit the short-sentence voice. Verified: 0 em dashes remain site-wide.
- about.html title/og/twitter: "About — Best Sabah" → "About | Best Sabah"
- blog.html og/twitter desc: em dash → period
- Prose fixes in badminton, imago, climbing (4x), yii-siang posts
- index.html: an HTML comment

### sitemap.xml
- Bumped all 14 `<lastmod>` dates to 2026-06-11 (freshness signal). URL count
  unchanged at 14 — sitemap was already complete.

All JSON-LD validated as parseable. 348 insertions across 14 files.

---

## GSC status (checked this session)

GSC MCP here is **read-only** — it can query analytics and inspect URLs, but
canNOT submit sitemaps or request indexing. Use the property
`https://bestsabah.com/` (the `sc-domain:bestsabah.com` property returns a
permission error for this account).

- **Sitemap**: `sitemap.xml` is registered and processing cleanly (0 errors,
  auto-resubmitted Jun 10). After this push, Google will recrawl it naturally.
- **Homepage**: Submitted and indexed. Healthy.
- **Newest post** (`best-guo-tie-dumplings-kota-kinabalu.html`): still "unknown
  to Google" — not yet crawled. Will get picked up via the sitemap, or request
  indexing manually in GSC to speed it up.

### Manual GSC to-dos (owner, in browser — I can't do these via API)
1. **Remove the stale `sitemap_index.xml`** from GSC. That file does not exist
   in the repo and shows 2 errors (last downloaded May 25). Delete the
   submission so it stops flagging.
2. Optionally **Request Indexing** on the guo-tie dumplings post to speed it up.

---

## Current site state

Posts live (10):
- best-guo-tie-dumplings-kota-kinabalu.html (Best Food) — newest, not yet indexed
- desa-ice-cream-kk.html (Best Food)
- andrew-wong-chicken-rice.html (Best Food)
- best-seafood-kota-kinabalu.html (Best Food)
- best-bak-kut-teh-kota-kinabalu.html (Best Food)
- yii-siang-beef-noodle-kk.html (Best Food)
- best-shopping-mall-kota-kinabalu-imago.html (Things To Do)
- hiking-bukit-padang-kk.html (Things To Do)
- climbing-mount-kinabalu-guide.html (Things To Do)
- best-badminton-shop-kota-kinabalu-ast-sports-centre.html (Sports)

Homepage Latest Stories (locked at 3, do not change):
- Andrew Wong Chicken Rice
- Yii Siang Beef Noodle
- Mount Kinabalu Guide

---

## Next up (no confirmed plans)
- Owner: clear the manual GSC to-dos above.
- blog.html / about.html could get dedicated OG images (still using the
  Kinabalu above-clouds site default). Not urgent.
- Content ideas in CLAUDE.md: durian stalls, Ramadan bazaars, beaches,
  pickleball, cost of living.

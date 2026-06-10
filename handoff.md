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

### Analytics: switched GA4 to GoatCounter
- Briefly added GA4 (`G-HNZPVMELX2`), then swapped it out for GoatCounter at the
  owner's call: lighter (~3.5KB vs ~90KB), cookie-free, privacy-friendly, and
  enough depth for a blog.
- GoatCounter snippet (`https://bestsabah.goatcounter.com/count`) in `<head>` of
  all 14 pages. Dashboard: https://bestsabah.goatcounter.com/
- GA4 fully removed from all pages (0 references remain). The GA property still
  exists in the owner's Google account if ever needed again.

### Private footer view counter
- All 14 pages have a hidden `<p id="footer-stats">` in the footer + a small
  inline script before `</body>`. Reuses the existing `footer-copy` /
  `footer__copy` class, so no new CSS.
- It does nothing for normal visitors. Add `?me` to any URL (e.g.
  `https://bestsabah.com/?me`) and it fetches GoatCounter's counter API and
  shows "<N> views on this page · <M> total site views".
- Uses `…/counter/<path>.json` (per page) and `…/counter/TOTAL.json` (site
  total). Both verified live and returning valid JSON.
- **Status: working.** The "allow using the visitor counter" setting is now
  enabled in GoatCounter, so the 403 is gone. Endpoints currently return
  `count: 0` (brand-new tracker + owner's IP ignored = expected). Will climb
  once real outside visitors land.
- Note: the counter endpoint is cached, so the footer number can lag real
  traffic by a while. The GoatCounter dashboard is the real-time source of truth.

### GoatCounter settings
- **Data retention: 0 days** = keep data forever. Left as-is (we want long-term
  trend data; a retention limit would shrink the footer "total" over time).
- **Ignore IPs**: owner's current public IP is `60.53.212.64` (dynamic, may
  rotate). Add it under Settings → Ignore IPs so own visits don't inflate counts.
  Also set the per-browser ignore flag on phone / other devices (IP only covers
  the home network).

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
- Owner: clear the manual GSC to-dos above (remove stale sitemap_index.xml;
  optionally request indexing on the guo-tie post).
- Owner: in GoatCounter, confirm visitor-counter endpoint is enabled and add
  the ignore-IP / browser flag (see GoatCounter settings above).
- blog.html / about.html could get dedicated OG images (still using the
  Kinabalu above-clouds site default). Not urgent.
- Content ideas in CLAUDE.md: durian stalls, Ramadan bazaars, beaches,
  pickleball, cost of living.

---

*Session ended ~3am, Jun 11. Everything above is committed and pushed to
`main` / live. Footer counter confirmed working (returns 0, as expected for a
new tracker). Goodnight.*

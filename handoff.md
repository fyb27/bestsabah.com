# Handoff — June 16, 2026

## What we did this session: cleared the Ahrefs issue report (SEO)

Ahrefs flagged 11 actual issues across the site. Fixed all the controllable ones.
Commit `6c9d65a` on `main`, pushed + verified live.

### Fixed
- **Broken image** — `hiking-bukit-padang-kk.html` linked
  `andrew-wong-sliced-chicken-rice.jpg` (wrong word order). Repointed to the real
  file `andrew-wong-chicken-rice-sliced.jpg`. Live → 200.
- **Canonical homepage had no incoming internal links** — every "Home" link + logo
  pointed to `index.html`, but canonical is `/`. Changed all 28 links site-wide to
  `/`. This also kills the `/index.html` 3XX-redirect chain (nothing links to it now).
- **Titles too long (10 posts)** — shortened all post `<title>`s to ≤60 chars,
  kept keyword + `| Best Sabah`. Synced `og:title` + `twitter:title`.
- **Meta descriptions** — trimmed 8 over-long ones to ≤160; expanded 3 short ones
  (index, blog, contact) above 110. Everything now lands 140–159 chars. Synced
  `og:description` + `twitter:description`.
- **IndexNow** — generated key, committed `d68d315701bbd6450fb40da1d1b86232.txt` to
  repo root (live, served by Pages). Submitted all 14 URLs: api.indexnow.org → 202,
  Bing → 200. Key + how-to saved in claude-mem (reference_indexnow.md).
- **sitemap.xml** — bumped all `lastmod` to 2026-06-16.

### Not a problem
- **HTTP → HTTPS redirect (2)** — that's GitHub Pages correctly forcing HTTPS.
  Expected, no code change. Should be the only thing left on the next Ahrefs crawl.

### Note
All edits preserved CRLF line endings (the repo's HTML files use CRLF).

---

## Prior session: sticky hero curtain effect (homepage)

Added a scroll-driven "curtain" effect to the homepage hero. The hero now stays
pinned while the rest of the page slides up over it. All in `index.html`, no new
files, no libraries.

### How it works
- `.hero` changed from `position: relative` to `position: sticky; top: 0`, so it
  never scrolls away.
- Everything after the hero (intro → footer) is wrapped in a new
  `<main class="page-content">` with `z-index: 3` and a white background. That's
  the curtain: content slides up and covers the pinned hero.
- New `.hero-media` wrapper around the Kinabalu image. A `requestAnimationFrame`
  scroll ticker drifts it up at 30% of scroll speed and zooms to 110% over the
  first viewport (parallax).
- The headline + "Read the guide" link drift up at 22% speed and fade to 0 by
  ~62% of the first screen, then get `pointer-events: none` so the invisible link
  can't be clicked.
- All transforms clamp at one viewport height (no runaway motion on deep scroll).
- `prefers-reduced-motion: reduce` skips the whole effect.

### No video
Original reference had a video hero with play/pause management. Our hero is a
static image, so all of that was dropped. Simpler.

### Verified
Tested in a real browser (local server + Playwright): hero stays pinned, content
covers it, text fades to 0 and becomes unclickable, transforms clamp correctly
past one viewport, everything resets cleanly scrolling back to top. Clean seam
where the white intro meets the bright cloud image at the hero's bottom.

### SEO / performance check
No regression. Same hero image loaded the same way (LCP unchanged). Effect uses
GPU transforms only, so no layout shift (CLS unchanged). Scroll listener is
`passive` + rAF-throttled, so it can't block input (INP unchanged). All content
stays in normal HTML flow, Googlebot sees the same thing. ~40 lines inline, a
few hundred bytes added.

**Scope note:** homepage only. Post pages use `post.css` with a different layout
(no full-screen hero), so the effect does not apply there.

Committed + pushed: `549721d` on `main`.

---

## Still open (carried from prior sessions)

### Manual GSC to-dos (owner, in browser — can't do via API)
1. **Remove the stale `sitemap_index.xml`** from GSC. That file doesn't exist in
   the repo and shows errors. Delete the submission so it stops flagging.
2. Optionally **Request Indexing** on the newest post(s) to speed up crawling.
   GSC MCP here is read-only (can query + inspect, can't submit). Use the
   `https://bestsabah.com/` property (not `sc-domain:`).

### GoatCounter
- Add owner's public IP under Settings → Ignore IPs so own visits don't inflate
  counts (IP is dynamic, may rotate). Also set the per-browser ignore flag on
  phone / other devices.
- Private footer view counter is live on all pages: add `?me` to any URL to see
  "<N> views on this page · <M> total site views". Counter endpoint is cached, so
  the footer number lags; the GoatCounter dashboard is the real-time source.

### Content ideas (from CLAUDE.md)
durian stalls, Ramadan bazaars, beaches, pickleball, cost of living, third-wave
cafes, day trips.

### Misc
- blog.html / about.html could get dedicated OG images (still using the Kinabalu
  above-clouds site default). Not urgent.

---

## Current site state

Posts live (10):
- best-guo-tie-dumplings-kota-kinabalu.html (Best Food)
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

*Session ended Jun 16. Ahrefs SEO issues cleared (`6c9d65a`) + pushed to `main` / live. Re-crawl Ahrefs in a day or two to confirm counts drop.*

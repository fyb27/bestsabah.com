# Handoff — July 3, 2026

## This session: footer credit + SabahWebs backlink post (Lifestyle)

Two jobs. Both live on `main`, all deploys verified on production.

### 1. Footer credit changed site-wide
Changed the footer credit line from "Web design Sabah" to **"Website by SabahWebs"**
across all 16 pages (link to `https://sabahwebs.com` was already there on 15;
only the visible text changed). `contact.html` had no credit line, added one to
match. Commit `3365eb0`.

### 2. New post: `posts/sabahans-building-things-worth-knowing.html` (Lifestyle)
Owner wants sabahwebs.com to rank for **"web design sabah"** / "web design kota
kinabalu". This bestsabah post is **backlink #1** toward that, written as a
"local makers" spotlight so the sabahwebs link reads as a genuine editorial
citation, not a plant.

- **Format:** spotlight of 4 real Sabah businesses, each linked out (so the
  sabahwebs link isn't the only outbound link):
  1. Permai Polyclinics Fortuna (24hr clinic) → permaipolyclinicsfortuna.com
  2. ProSteel (scaffolding) → prosteelmy.com
  3. Orou Sapulot (eco-tours) → borneo.tours
  4. **SabahWebs** (web design studio) → sabahwebs.com
  - The 3 non-sabahwebs sites are sabahwebs's own clients, so featuring them
    also props up its portfolio context.
- **Backlink mechanics (what actually passes ranking value):**
  - Link #1 anchor = **"web design in Sabah"** (partial-match, the keyword one).
  - Link #2 anchor = **"SabahWebs"** (brand). One keyword + one brand anchor =
    natural, not over-optimized.
  - Deliberately NOT exact-match "web design sabah" as anchor (single-source
    exact-match from an owned site reads as manipulation). Owner asked to see
    the exact phrase, so it's present as **visible body text** ("...Googling
    'web design Sabah'...") instead, which is safe.
- **Ownership hidden:** first draft said "close to home for me, since I run this
  site" — removed, because it would out the owner as running both sites.
- **Image:** used a **Playwright screenshot of the sabahwebs.com homepage**
  (`posts/images/sabahwebs-web-design-sabah.jpg`, the "Web design & SEO, built
  from Sabah" hero). No Mount Kinabalu stock pic (owner rejected it). Screenshot
  is the post's inline image + og/twitter/schema image + blog card thumbnail.
- **Integration:** blog card added at the **bottom** of the grid (owner wanted it
  low, not top), `data-cat="lifestyle"`. `sitemap.xml` entry added (lastmod
  2026-07-03, priority 0.9). **index.html Latest Stories left alone** (locked at 3).
  Fixed a broken related-card image (`imago-mall-exterior.jpg` →
  `imago-mall-kk-exterior.jpg`).
- **IndexNow:** post + blog.html submitted, 200.
- Commits: `76a2be2` (post), `fc1642f` (screenshot + ownership/anchor fixes),
  `f455dfb` (empty retrigger, see below), `130b2e9` (imago fix + visible keyword).

### Deploy gotcha (for next time)
GitHub Pages threw a transient `Deployment failed, try again later.` on one push
(`fc1642f`) mid `syncing_files`, and the auto-rerun got stuck `queued`. Fix that
worked: push an **empty commit** (`git commit --allow-empty`) to grab a clean
runner. Check real deploy status via **Actions** (`gh run list`), NOT the legacy
`/pages/builds` API (it showed a stale stuck "building" the whole time).

### Still open on the sabahwebs ranking goal
This post is one backlink. It will NOT rank "web design sabah" alone. The real
levers are all on the **sabahwebs side**, still untouched:
1. sabahwebs's own service-page title/H1/body targeting the keyword.
2. **Google Business Profile** (the query fires a map pack; no GBP = invisible
   there). Service-area business, video verification.
3. Local citations with consistent NAP (Bing Places, directories).
Owner was offered a sabahwebs on-page audit or a GBP/citation plan next.

Post count is now **13** (added 1 Lifestyle). Site's first Lifestyle post.

---

# Handoff — June 22, 2026

## Latest session: backdated post dates (spread March → June)

Owner didn't like that all 12 posts showed **June 2026**. Spread them
**3-per-month across March, April, May, June** so the blog reads like it's been
running for months. **Display order on blog.html unchanged** (still newest-first,
top to bottom) — only the dates changed, so the existing top-to-bottom order now
maps cleanly to newest→oldest.

Date assignment (top of blog = newest):
- **June**: weng-foh tamparuli (Jun 22, kept), towering tenom (Jun 18), guo-tie (Jun 10)
- **May**: desa ice cream (May 24), hiking bukit padang (May 15), andrew wong (May 3)
- **April**: imago mall (Apr 26), AST badminton (Apr 14), climbing kinabalu (Apr 5)
- **March**: yu kee bak kut teh (Mar 22), sasa seafood (Mar 12), yii siang (Mar 4)

Updated every date surface for consistency:
- Each post: Schema `datePublished` + `dateModified` (set equal) + visible
  `.post-date` label.
- `blog.html`: all 12 card footers.
- `index.html`: the 3 Latest Stories dates (andrew/yii-siang/climbing).
- `sitemap.xml`: per-post `lastmod` set to each post's backdated date (site
  pages left at 2026-06-16).

Not done: no IndexNow resubmit (dates only, no content change). Didn't touch
the two genuinely-recent June noodle posts' June labels.

---

## Earlier today: two new noodle posts (Tenom Mee + Tamparuli Mee) + wider post layout

Added two **Best Food** posts from owner's own watermarked photos, plus a
site-wide post-layout/image fix. Three commits on `main`, all pushed + live.

### New posts
- **towering-tenom-mee-kota-kinabalu.html** — Towering Tenom Mee (丹南面家),
  Towering Industry Centre, Jalan Penampang. 7 photos. RM12 a plate, hours
  6:30am–2pm, closed Monday. Owner wrote the copy, I adjusted to voice.
  Commit `159b778`.
- **weng-foh-tamparuli-mee-kota-kinabalu.html** — Restoran Weng Foh (永和茶餐室),
  Block E, Jalan Damai, 88300 KK. 3 photos. Tamparuli fried noodles (egg, char
  siew, egg rolls). **Price unknown** (owner forgot — left out of body, schema
  just `$$`). **Hours unconfirmed** — wrote "breakfast or lunch, not open at
  night", left exact hours out of schema. Owner wrote copy, I adjusted.
- Both: keyword-first H1/title ("Best <X> Mee in Kota Kinabalu: <shop>"), full
  template, OG/Twitter/Breadcrumb/Article/Restaurant schema, map embed, verdict.
- **Cross-linked both ways** (tenom ⇄ tamparuli) in body + related cards, since
  owner wanted the Sabah-noodle posts to connect.
- Added cards to top of `blog.html`; both URLs added to `sitemap.xml`
  (lastmod 2026-06-22). **index.html Latest Stories left alone** (locked at 3).
- IndexNow: submitted tenom post + blog.html → 200.

### Image workflow note
Photos came from `pics/tenom mee/` and `pics/tamparuli mee/` (owner already ran
`watermark.py`, which places the "bestsabah.com" mark inside the visible 16:9
band). Copied + renamed into `posts/images/` with SEO names
(`towering-tenom-mee-*.jpg`, `weng-foh-tamparuli-mee-*.jpg`). Originals in
`pics/` are untracked, left in place.

### Site-wide layout fix (`css/post.css`, commit `ab6bccb`)
Owner felt posts were too narrow + images cropped poorly.
- `.post` container 1080px → **1280px**; gap 40→32; TOC 200→180. Reading column
  grew ~700px → ~940px.
- Inline body images 16:9 → **4:3** (`object-fit: cover`) so portrait food shots
  keep the whole dish. **Hero stays 16:9** (specificity bumped to
  `.post-img.post-img--hero img` so the body rule can't override it).
- Affects ALL posts. Many older photos are 4:3 native, so for them this is
  near-zero crop. Watermarks (baked for 16:9) still land bottom-right in 4:3.

### Voice note (new memory saved)
Owner pushed back that my cleaned-up tamparuli draft "doesnt sound very
optimistic." Lesson saved to claude-mem (`feedback-keep-energy`): when adjusting
owner's drafts, fix typos / em dashes / forced slang but NEVER flatten the
enthusiasm. Re-punched the tamparuli copy warmer.

---

## Earlier — June 16, 2026

## Wove keyword-research terms into existing posts (SEO)

Took the **BestSabah** sheet from `keyword_research_3_sites.xlsx` (50 keywords,
Google Keyword Planner, pulled 16 Jun 2026) and folded the terms into the 9
existing posts where they fit naturally. No new posts (owner only wants posts
with real photos). Commit `dd4210b` on `main`, pushed + live.

### Edits by post
- **climbing-mount-kinabalu-guide.html** (richest target — the Mount Kinabalu
  keyword cluster lives here):
  - Added "Mount KK" + "Gunung Kinabalu" local/Malay names.
  - Folded climb / hike / trek / trekking synonyms into one natural line.
  - "Sabah trip" framing + a packages/tours/price paragraph
    ("Mount Kinabalu packages and tours", "climb package").
  - **New Via Ferrata section** (world's highest, Mountain Torq, Walk the Torq /
    Low's Peak Circuit) + matching FAQ-schema entry. Keyword #3
    (`mount kinabalu via ferrata`, 1K–10K, low comp) had zero coverage before.
  - "places to visit in Sabah" in the closing verdict.
- **hiking-bukit-padang-kk.html** — "things to do in Kota Kinabalu",
  "places to visit in KK", "Kota Kinabalu attractions".
- **best-shopping-mall-kota-kinabalu-imago.html** — "places to visit in Kota
  Kinabalu" + tourist rainy-day angle.
- **Food posts** (seafood, andrew-wong chicken rice, yii-siang ngiu chap,
  bak kut teh, guo tie) — "Kota Kinabalu food" worked into existing lines.
- **desa-ice-cream-kk.html** — "Kundasang trip" + "Kundasang tour packages"
  (honest: the dairy farm is in Kundasang).

### Deliberately skipped
- **Badminton post** untouched — no keyword in the list fits it naturally.
- Keywords with no matching post (sabah airport, sandakan hostel,
  semporna/tawau, kinabatangan, standalone day-tour package terms) left out
  rather than stuffed.

### Checks
- No em dashes introduced. All JSON-LD re-validated as parseable.
- Pre-existing `--` (em-dash-style) in two titles (`andrew-wong-chicken-rice`,
  `desa-ice-cream-kk`) left as-is — owner said no need to change.

### HTTPS / "exclamation in Chrome" (no action needed)
Owner saw a "Not secure"-style exclamation on mobile Chrome. Investigated:
`http://` 301-redirects to `https://`, apex + `www` both serve valid certs with
no TLS error, and there's zero mixed content (`http://` resources) in the HTML.
Site is secure. The mobile icon was transient (stale cache / mid-redirect) and
cleared on its own. Nothing to fix.

---

## Earlier this session: cleared the Ahrefs issue report (SEO)

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

Posts live (12):
- weng-foh-tamparuli-mee-kota-kinabalu.html (Best Food) — NEW Jun 22
- towering-tenom-mee-kota-kinabalu.html (Best Food) — NEW Jun 22
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

*Session ended Jun 22. Three commits on `main`, all live: Tenom Mee post (`159b778`), wider post layout + 4:3 images (`ab6bccb`), Tamparuli Mee post + cross-links + handoff (`d03c55b`). IndexNow pinged for both new posts + blog (200). **Open follow-ups:** get the Weng Foh tamparuli mee **price** + exact **opening hours** from owner and fill them in (body + Restaurant schema); optionally submit both new URLs to GSC for indexing. Owner called it a day.*

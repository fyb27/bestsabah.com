# CLAUDE.md — bestsabah.com

*Read this at the start of every session. No exceptions.*

\---

## What this site is

bestsabah.com is a local guide for Kota Kinabalu and Sabah, Malaysia. Written by a real Sabahan. Side project, slow build. No vlogging, no face showing.

**Audience:** Tourists planning a Sabah trip, expats, diaspora Sabahans, digital nomads considering KK.

\---

## Tech stack

* Pure HTML + CSS + vanilla JS. No frameworks. No build tools. No CMS.
* Hosted on GitHub Pages (free, static)
* Repo: github.com/fyb27/bestsabah.com
* Local folder: Z:/sites/bestsabah/
* Domain: bestsabah.com (DNS on Hostinger → GitHub Pages)
* Fonts: Playfair Display (headings) + DM Sans (body) via Google Fonts
* Contact form: Formspree — https://formspree.io/f/xpqngrwj → help@bestsabah.com

\---

## File structure

```
bestsabah.com/
├── index.html
├── blog.html
├── about.html
├── contact.html
├── CLAUDE.md
├── css/
│   ├── style.css       ← site-wide styles
│   └── post.css        ← post page only
├── js/
│   ├── main.js         ← mobile nav toggle
│   └── post.js         ← progress bar, TOC, back to top
└── posts/
    ├── island-hopping-kk.html
    ├── kopi-shops-kk.html
    ├── supper-spots-kk.html
    ├── kundasang-morning.html
    └── wfh-kk.html
```

\---

## Design system (from style.css)

```css
--bg:       #FAF9F7
--bg2:      #F3F1EC
--green:    #2D5016
--green2:   #4A7C2F
--dark:     #1a1a1a
--text:     #1C1C1A
--muted:    #6B6B67
--border:   #E0DAD2
--white:    #ffffff
--max:      1160px
--header-h: 64px
```

Always use these CSS variables. Never hardcode colours.

Design reference: kinfolk.com — editorial, clean, minimal.

\---

## Code style rules

* 2-space indentation
* CSS class names: BEM-style (`.post-share\_\_btn`, `.card\_\_title`, `.site-header`)
* No inline styles except where absolutely necessary
* CSS variables for all colours, never hex values directly in new rules
* JS: vanilla only, no libraries
* Comments in CSS use `/\* ══ Section ══ \*/` style (match existing)

\---

## Nav categories (exact slugs — use these everywhere)

|Label|slug|
|-|-|
|Food \& Drinks|food|
|Cafes|cafes|
|Things To Do|things-to-do|
|Lifestyle|lifestyle|
|Hidden Gems|hidden-gems|
|Travel \& Outdoors|travel|
|Shopping|shopping|

\---

## Post template structure

Every post file must follow this layout exactly:

```
1. <div class="reading-progress"></div>
2. <header class="site-header"> (same nav as all pages)
3. <div class="post">  ← flex row
   a. <aside class="post-share"> — share sidebar left (X, Facebook, copy link)
   b. <main class="post-main">
      - .post-header: date, title, badges, intro
      - .post-img.post-img--hero (hero image)
      - .post-body: h2 sections + inline images
   c. <aside class="post-sidebar"> — TOC right, sticky at 35vh
4. <section class="post-related"> — 3 related cards
5. <footer class="site-footer">
6. <button id="back-to-top">
```

CSS: `../css/style.css` + `../css/post.css`
JS: `../js/post.js`

Post file naming: `posts/\[slug].html` — lowercase, hyphens only.

\---

## Share buttons (exact HTML pattern)

```html
<aside class="post-share">
  <span class="post-share\_\_label">Share</span>
  <a class="post-share\_\_btn post-share\_\_btn--x" href="https://twitter.com/intent/tweet?url=PAGE\_URL" target="\_blank" aria-label="Share on X">𝕏</a>
  <a class="post-share\_\_btn post-share\_\_btn--fb" href="https://www.facebook.com/sharer/sharer.php?u=PAGE\_URL" target="\_blank" aria-label="Share on Facebook">f</a>
  <button class="post-share\_\_btn post-share\_\_btn--copy" onclick="navigator.clipboard.writeText(window.location.href)" aria-label="Copy link">⎘</button>
  <div class="post-share\_\_divider"></div>
</aside>
```

\---

## When adding a new post

1. Create `posts/\[slug].html` using the post template
2. Add card to `blog.html` posts grid with correct `data-cat` attribute
3. Add card to `index.html` Latest Stories section
4. Update `sitemap.xml` with new URL
5. Commit and push

\---

## SEO rules (apply to every page)

* Unique `<title>` tag per page — format: `Post Title | Best Sabah`
* `<meta name="description">` — max 155 characters, plain language, no keyword stuffing
* Open Graph tags on every post:

```html
  <meta property="og:title" content="">
  <meta property="og:description" content="">
  <meta property="og:image" content="">
  <meta property="og:url" content="">
  <meta property="og:type" content="article">
  ```

* One `<h1>` per page only
* Alt text on every image — descriptive, not keyword-stuffed
* Post slugs must be descriptive: `posts/best-malls-kota-kinabalu.html`
* `sitemap.xml` must be updated when new pages are added
* `<link rel="canonical">` on every page

\---

## Voice profile

* Friend visiting for the first time — enthusiastic but direct
* Specific: actual prices, parking, what to order
* Honest about downsides without complaining
* Subtle Sabahan cadence (kan, lah, one) — max 1-2 per post, never forced
* No tourism brochure language
* No generic openers ("Sabah is a beautiful...")

**Approved tagline:**

> "Born in Sabah. Still here. Writing about the places worth your time, from someone who never had a reason to leave."

**Hard rule: NEVER use em dashes. Anywhere. Ever. In content or code.**

\---

## Pending tasks

* Enable HTTPS: tick "Enforce HTTPS" in GitHub Settings > Pages (owner does this manually in browser)
* Replace placeholder photos on about.html
* Submit sitemap.xml to Google Search Console

\---

## Content ideas (unwritten)

Food: durian stalls, Ramadan bazaars, Sabah dishes, seafood
Cafes: specialty coffee, third wave
Things To Do: beaches, hiking, pickleball, badminton
Hidden Gems: viewpoints/sunsets, day trips
Lifestyle: cost of living, digital nomads, moving to KK, Sabah vs KL
Shopping: best malls in KK (photos coming)
Services: car workshops, coworking spaces

\---

## Rules for Claude

* Never add unrequested features
* Never use em dashes anywhere
* Match existing code style exactly
* Always use CSS variables for colours
* When writing posts, follow voice profile exactly
* Commit message format: `add post: best-malls-kk` / `seo: add meta tags` / `fix: mobile nav`
* Ask before deleting any file
* When unsure, ask


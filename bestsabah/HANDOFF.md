# bestsabah.com — GitHub Pages Handoff
_Last updated: June 1, 2026_

---

## Project Overview

**bestsabah.com** is a tourist-facing local guide for Kota Kinabalu and Sabah, Malaysia. Written by a real local (36-year-old Sabahan, WFH in KK). Side project, slow build over 2-3 years. No vlogging, no face showing.

**Target audience:** Tourists planning a Sabah trip, expats, diaspora Sabahans, digital nomads considering KK.

**Monetisation plan (long term):** Google AdSense + local business features + affiliate hotel links.

---

## Tech Stack

- **Hosting:** GitHub Pages (free, static)
- **Repo:** github.com/fyb27/bestsabah.com
- **Domain:** bestsabah.com (registered on Hostinger, DNS pointing to GitHub Pages)
- **Stack:** Pure HTML + CSS + vanilla JS. No frameworks, no build tools, no CMS.
- **Fonts:** Playfair Display (headings) + DM Sans (body) via Google Fonts

### GitHub Pages DNS (Hostinger)
Add these A records in Hostinger DNS panel:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Add CNAME: `www` → `fyb27.github.io`
In repo Settings → Pages → Custom domain: `bestsabah.com`

---

## File Structure

```
bestsabah.com/
├── index.html          # Homepage with hero + cards grid
├── blog.html           # Blog index with category filter
├── about.html          # About page
├── contact.html        # Contact form (Formspree)
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Mobile nav toggle
├── posts/
│   ├── island-hopping-kk.html
│   ├── kundasang-morning.html
│   ├── kopi-shops-kk.html
│   ├── supper-spots-kk.html
│   └── wfh-kk.html
└── HANDOFF.md
```

---

## Design System

### Colors
```css
--bg:      #FAF9F7   /* warm white background */
--bg2:     #F3F1EC   /* subtle beige surface */
--green:   #2D5016   /* forest green accent */
--green2:  #4A7C2F   /* lighter green */
--dark:    #1a1a1a   /* header, footer, dark sections */
--text:    #1C1C1A   /* dark charcoal body text */
--muted:   #6B6B67   /* secondary text */
--border:  #E0DAD2   /* soft borders */
```

### Typography
- **Headings:** Playfair Display, serif, 700 weight
- **Body:** DM Sans, sans-serif, 400/500 weight
- **Category labels:** DM Sans, 10-11px, 700, letter-spacing 2-2.5px, uppercase

### Key UI patterns
- Dark header (#1a1a1a), fixed position, 64px height
- Logo: "Best**Sabah**" — "Best" white, "Sabah" in --green2
- Cards: white background, 1px border, lift on hover (-5px + shadow)
- Category labels: forest green, uppercase, tiny tracking
- Buttons/CTAs: dark background or bordered outline style
- Hero: full viewport height, image + dark overlay gradient, centered text

### Aesthetic reference
Editorial travel magazine. Think Kinfolk, Cereal, roadbook.com. Clean, premium, zero clutter. No sidebars. No carousels. No pop-ups. Generous whitespace.

---

## Workflow

### Adding a new post
1. Owner sends: photos + notes/voice dump/bullet points
2. Claude writes full post as `.html` file in `/posts/` folder
3. Claude adds card to `index.html` (Latest Stories) and `blog.html` (posts grid)
4. Owner uploads files to GitHub → live in ~2 minutes

### Changing the hero (homepage featured post)
Edit `index.html` — find the `<section class="hero">` block. Update:
- `img src` — new featured image URL
- `.hero__eyebrow` — category name
- `.hero__title` — post title
- `.hero__sub` — excerpt/subtitle
- `.hero__btn href` — link to post file

### Post file naming convention
`posts/[slug].html` where slug = lowercase, hyphens, no special chars.
Example: "Best Gyms in KK" → `posts/best-gyms-kk.html`

---

## Post Template

Every post follows this structure:

```
1. post-hero       — full-width featured image, title overlay, category label
2. post-meta       — date, read time, category
3. post-body       — article content (max-width 720px, centered)
4. related section — 3 cards from same or adjacent category
5. site-footer
```

Use `../css/style.css` and `../js/main.js` paths from inside `/posts/`.

---

## Voice Profile

This is the most important part. Every post must sound like this:

- Talks to the reader like a friend visiting for the first time
- Enthusiastic but never try-hard. Warm but direct.
- **Specific:** actual prices, actual parking info, what to order, what to avoid
- **Honest about downsides** — queues, crowds, prices, disappointments — without complaining
- Subtle local Sabahan cadence (kan, lah, one) — not overdone, max 1-2 per post
- Punchy landing sentences after buildup paragraphs
- Never sounds like a food critic, tourism brochure, or SEO article

**Avoid:**
- "Nestled in the heart of..."
- "A hidden gem waiting to be discovered..."
- "Perfect for the whole family..."
- Any filler travel writing phrases
- Em dashes (never use these)
- Overlong sentences

**Good example tone:**
> "Pulau Manukan is the biggest and probably the best overall. Long beach, decent snorkelling on the eastern end, a small resort if you want to overnight it. This is my default recommendation for first-timers."

**Bad example tone:**
> "Nestled amidst the crystal-clear waters of the South China Sea, Pulau Manukan offers visitors an unparalleled tropical experience that is perfect for the whole family."

---

## SEO Notes

- Every post needs a `<title>` and `<meta name="description">`
- Title format: `[Post Title] — Best Sabah`
- Description: 1-2 sentences, natural language, include "KK" or "Kota Kinabalu" and "Sabah"
- Post slugs should match natural search queries where possible
  - "best gyms KK" → `best-gyms-kk.html`
  - "island hopping Kota Kinabalu" → `island-hopping-kk.html`
- H2 headings should be descriptive and natural, not keyword-stuffed

---

## Content Ideas (to be written)

### Food & Drinks
- Best supper spots KK
- Best durian stalls KK
- Best Ramadan bazaars KK
- Sabah dishes tourists must try
- Best seafood restaurants KK

### Cafes
- Best kopi shops KK ✓ (dummy post exists)

### Things To Do
- Island hopping KK ✓ (written)
- Best beaches near KK
- Best hiking trails Sabah
- Best cycling routes KK
- Best pickleball courts KK
- Best badminton halls KK

### Hidden Gems
- Kundasang in the morning ✓ (dummy post exists)
- Best viewpoints and sunsets KK
- Day trips from KK

### Lifestyle
- WFH in KK honest review ✓ (dummy post exists)
- Cost of living KK
- Is KK good for digital nomads
- Moving to KK honest guide
- Sabah vs KL comparison

### Shopping
- Best shopping malls KK

### Services
- Best car workshops KK
- Best barbershops/salons KK
- Best clinics KK
- Best coworking spaces KK

### Travel & Outdoors
- Best hotels KK
- Best swimming pools KK

---

## Contact Form

Using Formspree (free tier). Sign up at formspree.io, create a form, replace the placeholder action URL in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## Notes for Future Sessions

- WordPress was abandoned due to theme CSS conflicts and Kadence constraints
- GitHub Pages chosen for full code control, zero constraints, free hosting
- Owner is comfortable uploading files to GitHub manually
- Owner is NOT a developer — keep all instructions non-technical
- New context window: always ask owner to share this HANDOFF.md first

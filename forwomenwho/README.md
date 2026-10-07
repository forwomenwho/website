# For Women Who — static website (phase one)

Plain HTML, CSS and a little JavaScript. No framework, no build step, no server.

**To look at it:** double-click `index.html`. Every page links to the others.
**To put it online:** upload this whole folder to any static host (Netlify, Cloudflare Pages, GitHub Pages and so on). It works as it is.

Nothing is connected yet: the subscribe forms only show their success and error messages, and the Buy button goes nowhere. Everything a later phase needs to connect is marked `INTEGRATION:` in the code. Search for that word to find every spot.

---

## What each file is

| File | Page |
|---|---|
| `index.html` | Homepage |
| `work.html`, `life.html`, `style.html`, `beauty.html`, `culture.html` | The five section pages (one layout) |
| `article.html` | A sample article |
| `issues.html` | Issues archive |
| `issue-01.html` | A sample issue contents page |
| `about.html` | About |
| `shop.html` | Shop landing page |
| `product.html` | A sample product page (the layout for every product) |
| `the-edit.html` | The Edit: every product recommendation |
| `terms.html`, `privacy.html`, `refunds.html` | Legal pages |
| `404.html` | Page not found |
| `css/tokens.css` | **Every colour, font and size.** Change the look here. |
| `css/base.css` | Fonts, reset, typography, links, focus outlines |
| `css/components.css` | Header, footer, buttons, cards, bands, forms, marquee, swipe rows |
| `css/pages.css` | Layouts that belong to one page |
| `js/site.js` | Mobile menu, homepage sticky header, form messages |
| `assets/images/` | Placeholder images, named by slot |
| `assets/fonts/` | Self-hosted Bodoni Moda, EB Garamond, DM Sans |

Every page repeats the same header and footer, marked `<!-- HEADER -->` and `<!-- FOOTER -->`. If you change one, change it on every page (or ask for them to be turned into shared components in phase two).

---

## Common changes

### Change the accent colour

Open `css/tokens.css`. The line near the top:

    --accent: #6A1F2B;

Change it to one of the seasonal options and the whole site follows:

- `#A3242A` cherry (meant for small details, but it will also fill the big bands, so use with care)
- `#B48A60` camel. Also change the three `--on-accent` lines underneath to their "camel" values (written in the comments), or white text on camel will be hard to read.
- `#3A2820` espresso

### Swap an image

Replace the file in `assets/images/` with your photo, **keeping the same file name**, at the size in the table below. The layout won't move. Then update that image's `alt` text in the HTML (search for the file name) to describe the new photo.

| Slot (`data-slot`) | File name(s) | Upload at least |
|---|---|---|
| `hero` | `hero-placeholder.jpg` | 2400 × 1350 |
| `section-panel` | `section-panel-work.jpg` … `-culture.jpg` (also the section page headers) | 1000 × 2000 |
| `article-lead` | `article-lead-*.jpg` (also used on cards), `feature-eleven-minutes.jpg` | 2400 × 1600 (feature: 1600 × 2000) |
| `shop-figure` | `shop-figure.png` — transparent background | 900 × 1500 |
| `shop-category` | `shop-category-planners.jpg` and the other three | 800 × 1000 |
| `product-gallery` | `product-gallery-1.jpg` … `-5.jpg` | 1600 × 2000 |
| `edit-item` | `edit-item-*.jpg` | 1200 × 1200 |
| `issue-cover` | `issue-cover-01.jpg` … `-09.jpg` | 1600 × 2000 |
| `about-hero` | `about-hero.jpg` | 2400 × 1350 |
| share image | `share-placeholder.jpg` | 1200 × 630 |

### Change site-wide text

These live in one marked block each, repeated identically on every page. Search for `SITE SETTING`:

- the current-issue label in the black top bar (`Issue 01 · Sunday [DATE]`)
- the navigation links
- the social links in the footer
- the marquee lines, statement and hero button (homepage only)
- the contact email (About only)

### The accent script font (Relationship of Mélodrame)

The font file is **not included**, because its licence is personal use only until the designer confirms. Every script word uses the clearly marked fallback, Bodoni Moda italic. When the licence is confirmed:

1. Put the file in `assets/fonts/melodrame.woff2`.
2. In `css/tokens.css`, swap `--font-accent` and `--font-accent-style` for the two lines in the comment above them.

The `.gitignore` keeps the file out of the repository until then. Mélodrame will be a different width from Bodoni italic, so check the headlines afterwards and adjust `--accent-scale` in `tokens.css` if needed.

---

## Placeholders still to replace

Search the HTML for `[`. They are: `[DATE]`, `[PRODUCT NAME]`, `[PRICE]`, `[PAGE COUNT]`, `[FILE SIZE]`, `[HEADLINE]`, `[FEATURE HEADLINE]`, `[Feature headline]`, `[Edit headline]`, `[Headline]`, `[X] min read`, `[X] pieces`, `[Standfirst]`, `[Sub-topic]`, `[Item]`, `[One honest line.]`, `[Brand, notebook that lies flat]`, `[hello@YOUR-DOMAIN]`, the two `[Confirm or edit: …]` notes on About, the product's `[…]` details, the legal page text (`[Terms text]` and so on) and the page numbers `[00]` on the Issue 01 contents page.

---

## Where I followed the mockup over the brief, or had to guess

**Couldn't be done exactly as designed**

1. **One identical header on every page** (the brief) versus the product mockup's own top bar ("Instant digital downloads / Cart (0)"). Every page uses the standard top bar; there's no cart because the checkout isn't connected.
2. **Search icon.** The mockups show one, but search is out of scope this phase, so it's left out (an empty space keeps the wordmark centred on phones).
3. **"Subscribe" in the top bar** jumps to the subscribe band on the same page, so pages that weren't drawn with one (product, shop, The Edit, legal, 404) have the standard centred band above the footer.
4. **Giant footer wordmark.** The desktop mockup's size overflows with the real Bodoni Moda, so it uses the mobile mockup's ratio and always fits on one line. BEAUTY and CULTURE on their section pages are sized individually for the same reason.
5. **Type sizes.** Where the article mockup (72px headline) and the brief's type table (48–56px) disagreed, the type table won.
6. **Text over photos.** The darkening layers were tuned with a near-white and a near-black test photo. White text measures at least 5.5:1 contrast on the near-white photo. They are a little darker than the mockups imply; real photos may let them be lighter.
7. **Issue covers in the archive** all carry white text on a darkening layer, rather than the mockup's mix of black and white numbers, so they stay readable whatever cover image is used.
8. **Focus outlines** are in the accent colour, except on black and accent bands, where burgundy wouldn't show; there they're sand.
9. **Camel and cherry.** Camel needs dark text on the accent bands (see above). The brief says cherry is for small details only, but it is still the one `--accent` variable, so choosing it also fills the big bands.

**Guesses on the pages that weren't mocked up**

- **Shop landing:** a giant THE SHOP wordmark (from the homepage shop band), a sticky row of category tabs that jump to each category, and a grid of product tiles: image, category, name, price.
- **The Edit:** title with the script line, then each Edit piece as a group of square product tiles with a name and one honest line.
- **Issue 01 contents:** the latest-issue band from Issues, with the issue title as the heading, followed by a grid of the pieces in the issue. Page numbers are `[00]` placeholders.
- **404:** the Issues wordmark header with "404", one line ("We couldn't find that page.") and two buttons. These and the subscribe form's success and error messages are the only new lines of text: functional wording, not editorial copy. Change them freely.
- **Legal pages:** the article's typography, with placeholder text.
- **The other four section pages:** name, description (from the About page), section number and sample posts from the homepage. Their sub-topics aren't in any mockup, so they're `[Sub-topic]` placeholders.
- **Sample dates** are `Sunday [DATE]`, and links from cards all go to the one sample article.

**Opening from disk:** browsers block font preloading for files opened by double-click, so the fonts are loaded through the stylesheet only (no preload). On a real host you could add preload tags for a slightly faster first paint.

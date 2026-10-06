# For Women Who — Ghost theme

The website theme for forwomenwho.com. Written for Ghost 6 and checked with Ghost's own theme validator (gscan 6.6.1: "compatible with Ghost 6.x").

Everything below is done from the Ghost dashboard. You never need to edit code.

---

## 1. One-time setup

Do these once, in this order.

1. **Upload the theme.** Settings › Design & branding › Change theme › Upload theme › choose `for-women-who.zip` › Activate.
2. **Upload the routes file.** This gives sections short addresses (`/work/` instead of `/tag/work/`) and switches off author pages. Settings › Labs › Routes › Upload routes file › choose `routes.yaml` (it's in this folder).
3. **Make the staff account faceless.** Ghost puts the author's name into share previews and the RSS feed. Settings › Staff › your profile:
   - Full name: `For Women Who`
   - No profile picture, no cover picture, no bio, no location, no website, no social links.
   - Do the same for anyone else who ever publishes.
4. **Create the section tags.** Tags › New tag, one each for Work, Life, Style, Beauty, Culture. Set the slugs to `work`, `life`, `style`, `beauty`, `culture` (they are already like this if you type the names). For each one:
   - **Description:** the one line shown on the section page and on About ("Careers, ambition, money, and the things worth having on your desk.").
   - **Tag image:** the tall section photo (at least 1000 × 2000). The same photo is used tall on the homepage panel and wide across the top of the section page.
5. **Create the department tags.** These are *internal* tags: the name starts with `#`, so readers never see them as tags. Create exactly: `#The Feature`, `#The Edit`, `#Worth Knowing`, `#Notes`, `#One More Thing`.
6. **Create the shop category tags** (internal too): `#Planners`, `#Journals`, `#Magazine`, `#Wallpapers`.
7. **Create these pages** (Pages › New page). In each page's settings (the side panel), set the **Template** and the URL:

   | Page title | URL | Template | Excerpt |
   |---|---|---|---|
   | `About *the magazine*` | `about` | About | The paragraph under the headline |
   | `Issues` | `issues` | Issues | "A new issue every Sunday, each one about a five-minute read." |
   | `The Shop` | `shop` | Shop | Optional line under the wordmark |
   | `The Edit *things worth having*` | `the-edit` | The Edit | Optional line under the title |
   | `Terms`, `Privacy`, `Refunds` | `terms`, `privacy`, `refunds` | Default | — |

8. **Navigation.** Settings › Navigation.
   - Primary: Home `/`, Work `/work/`, Life `/life/`, Style `/style/`, Beauty `/beauty/`, Culture `/culture/`, Issues `/issues/`, Shop `/shop/`, About `/about/`.
   - Secondary (the small legal links in the footer): Terms `/terms/`, Privacy `/privacy/`, Refunds `/refunds/`.
9. **Newsletter.** Settings › Membership: keep it free, no paid tiers (Stripe isn't available in Egypt, and the theme has no paid content). Settings › Membership › Portal: turn **off** "Show portal button" so no pop-up button floats on the site. Settings › Newsletters › your newsletter › Customise:
   - Header image: upload `docs/email-masthead.png` (the stacked FOR WOMEN / WHO masthead).
   - Body style: **Serif** (Ghost's serif email font is Georgia).
   - Turn off the publication title and anything that shows the author's name or byline (the masthead image already says who you are).
10. **Theme settings.** Settings › Design & branding › Customise. See section 4.

---

## 2. Publishing a post

A published post appears on the site, in its section, in its issue, and goes out as the Sunday email, all in one step: click **Publish** and choose **Publish and email**.

| What you see on the site | Where it comes from in Ghost |
|---|---|
| Headline | Post title |
| Lead image (full-bleed at the top, and on every card) | Feature image. Upload at least 2400 × 1600. Fill in its **alt text** (click the image › Alt). |
| Standfirst (the italic line under the headline) | Post settings › **Excerpt** |
| Section label, section page, homepage row | The **first** tag on the post: Work, Life, Style, Beauty or Culture |
| Reading time | Worked out by Ghost |
| "This piece first appeared in Issue 01" | The issue tag (see below) |

**Tags on a post, in this order:**

1. The section: `Work` (always first — this is the post's "primary" tag)
2. Any sub-topic: `Careers`
3. The issue: `Issue 01`
4. The department, if it has one: `#The Feature`

**Pull quotes:** type `>` and a space at the start of a line (a quote block). It becomes a burgundy pull quote between two rules.

**Drop cap:** automatic, on the first paragraph.

**Product recommendations inside an article** ("From The Edit"): type `/product` and use Ghost's **Product** card (image, title, one honest line, button with the link). The theme styles it as the ivory "From The Edit" box.

**Subscribe box:** added automatically at the end of every article. Don't add Ghost's own signup cards in the middle of a piece.

### The accent word in a headline

Wrap the word or short phrase in asterisks in the title:

    Why am I avoiding a task that takes *eleven minutes?*

The theme draws `eleven minutes?` in the large accent script. Use it for one word or a short phrase, once per title.

**Important — fill in the Meta title whenever you use asterisks.** Ghost uses the raw title for share previews and the email subject, so the asterisks would show there. In post settings:

- **Meta data › Meta title:** the title without asterisks. This also fixes the Google, Facebook and X/Twitter previews.
- **Email subject** (if your Ghost shows the field when you publish): the title without asterisks.

The same `*asterisk*` rule works in page titles (About, The Edit) and in the homepage statement setting.

---

## 3. Sections, sub-topics, issues and departments

**Sections** are the five public tags. Each has its own page at `/work/`, `/life/` and so on.

**Sub-topics** filter a section page (the row under the big section name: All · Careers · Money · Routines · The Edit). Create them as ordinary tags whose **slug starts with the section's slug and a dash**:

| Name | Slug |
|---|---|
| Careers | `work-careers` |
| Money | `work-money` |
| Routines | `work-routines` |
| The Edit | `work-the-edit` |

The theme finds them automatically. To add a sub-topic to Life, name it and give it a slug like `life-friendships`.

**Issues** are tags named `Issue 01`, `Issue 02` and so on, with slugs `issue-01`, `issue-02`. Always use two digits. Give each issue tag a **tag image**: that's the cover (4:5, at least 1600 × 2000). The Issues page lists them newest first; each issue has its own contents page at `/tag/issue-01/`.

**Departments** (The Feature, The Edit, Worth Knowing, Notes, One More Thing) are the internal `#` tags. They decide:

- the order and labels in an issue's contents list;
- the homepage feature block: the newest post tagged `#The Feature` (if there isn't one, the newest *featured* post);
- the homepage Edit row and The Edit page: posts tagged `#The Edit`.

---

## 4. Theme settings (Settings › Design & branding › Customise)

**Site-wide:**

| Setting | What it does |
|---|---|
| Accent colour | Burgundy (default), Cherry, Camel or Espresso. Changes every accent on the site at once. |
| Current issue label | The black bar at the top, e.g. `Issue 01 · Sunday 8 November` |
| Contact email | Shown on About and used by "Contact" in the footer. Replace `[hello@YOUR-DOMAIN]`. |
| Instagram URL, Pinterest URL | Footer links. Leave empty to hide. |
| About hero image | The About page header (2400 × 1350, no faces) |

**Homepage:**

| Setting | What it does |
|---|---|
| Hero image | The full-bleed photo behind FOR WOMEN / WHO. At least 2400 × 1350. Keep the middle calm: the masthead sits there. On phones it's cropped tall, from the centre. |
| Hero button text / link | e.g. `Read Issue 01` → `/tag/issue-01/` |
| Marquee lines | The scrolling black strip. Separate lines with `|`. |
| Statement text | The big Bodoni statement. Wrap the oval word in `*asterisks*`. |
| Shop figure image | The cutout in front of THE SHOP. Transparent PNG or WebP, at least 900 × 1500, the figure standing on the bottom edge. |
| Shop planners / journals / magazine / wallpapers image | The four small pictures in the black shop strip (4:5, at least 800 × 1000) |

---

## 5. Adding a product

Each product is a **page** using the **Product** template. Buying happens in a Lemon Squeezy window over the page, so readers never leave the site.

1. Pages › New page. Title: the product name.
2. **Feature image:** the main product shot (4:5, at least 1600 × 2000). Add alt text.
3. In the page settings:
   - **Template:** Product
   - **Excerpt:** the price, as text, e.g. `£12`
   - **Tags:** the category, one of `#Planners`, `#Journals`, `#Magazine`, `#Wallpapers`. Optionally add a section tag such as `Work` first, to choose which pieces show under "Related reading".
4. In the page body, in this order:
   1. **The editorial note:** two or three sentences in the magazine voice, as ordinary paragraphs.
   2. **More photos:** a **Gallery** card (or Image cards). They move into the gallery beside the info panel. 4:5, at least 1600 × 2000.
   3. **The Buy button:** a **Button** card (`/button`). Button text: `Buy now`. Button URL: the product's Lemon Squeezy checkout link (Lemon Squeezy › Products › Share › Checkout link). The theme turns it into the black Buy button and makes it open as an overlay. The line "Checkout opens in a pop-up on this page" is added underneath automatically.
   4. **What's inside:** a heading that says `What's inside`, then a bulleted list, one row per line, label then colon then value:

          Pages: 120
          Formats: Printable PDF and hyperlinked tablet PDF, both included in one purchase
          Paper sizes: A4 and US Letter
          Works with: GoodNotes, Notability, or print at home
          File size: 24 MB

      These become the rows in the colour band.
5. Publish. The product appears on `/shop/` under its category straight away.

---

## 6. The About page

The About page uses the **About** template. From top to bottom:

- **Header:** the About hero image setting; the page title (`About *the magazine*`); the page excerpt as the paragraph underneath.
- **What we publish:** built automatically from the five section tags and their descriptions.
- **Page body.** Write it in the editor like this:
  1. A heading `How we write`, then straight after it a **Header** card (`/header`). Header text: the big sentence, with the script word in *italics* (select it, press ⌘/Ctrl + I; if your Ghost version doesn't allow formatting in the Header card, the sentence will simply show without the script word). Subheader: the smaller line. The theme makes the pair into the full-width black band.
  2. Small headings with a paragraph under each (`What we recommend`, `A note on our images`).
- **Write to us:** from the Contact email setting.
- **Subscribe** at the end.

The mockup's About copy, ready to paste (keep the two `[Confirm or edit: …]` notes until you've checked them):

> **How we write** — We try to write the way an intelligent friend talks. Some pieces are useful, some are funny, and some are only very *accurate.* / None of them are rules for being a better woman.
>
> **What we recommend** — Everything in The Edit is something we'd put on our own desk or in our own bag. [Confirm or edit: we say clearly when a link earns us a commission or when something was a gift.]
>
> **A note on our images** — [Confirm or edit: The photography in For Women Who is generated editorial imagery. The women in it are models and none of them is the editor.]

Everything on About speaks as "we". No names, faces, places or personal history.

---

## 7. The Edit

Write an Edit piece as an ordinary post tagged with its section, its sub-topic (e.g. `The Edit` under Work), its issue and `#The Edit`. Put each recommended thing in a **Product** card (square photo, at least 1200 × 1200; title; one honest line; button with the link).

- The homepage Edit row shows the first five Product cards from the newest `#The Edit` post.
- The Edit page (`/the-edit/`) shows every Product card from every `#The Edit` post, grouped by piece, newest first.

---

## 8. Images

Every image is a dashboard upload. Nothing is built into the theme.

| Slot | Where | Upload at least |
|---|---|---|
| Homepage hero | Theme setting | 2400 × 1350 |
| Section panels / section page header | Section tag image | 1000 × 2000 |
| Article lead | Post feature image | 2400 × 1600 |
| Feature block | Post feature image (shown 4:5) | 1600 × 2000 |
| Shop figure | Theme setting, transparent | 900 × 1500 |
| Shop categories | Theme settings | 800 × 1000 |
| Product gallery | Product page feature image + Gallery card | 1600 × 2000 |
| The Edit items | Product cards inside the post | 1200 × 1200 |
| Issue covers | Issue tag image | 1600 × 2000 |
| About hero | Theme setting | 2400 × 1350 |
| Social share | Post settings › Facebook/X card | 1200 × 630 |

Ghost makes smaller copies of every upload automatically; the theme picks the right size for each screen and loads images further down the page only as the reader reaches them.

---

## 9. The accent font (Relationship of Mélodrame) — licence

The download is licensed for **personal use only**, so the font file is **not** in this theme. Every script word currently uses the marked fallback, **Bodoni Moda italic**.

When the designer confirms the licence covers website use, whoever looks after the code:

1. Adds the web font as `assets/fonts/relationship-of-melodrame.woff2`.
2. Uncomments the `@font-face` block at the top of `assets/css/screen.css` and swaps the two `--font-accent` lines marked LICENSED.
3. Builds with `MELODRAME_LICENSED=yes npm run zip`.

Until then the build refuses to package any Mélodrame file (`scripts/check-licence.js`), and `.gitignore` keeps it out of the repository. Mélodrame will be narrower or wider than Bodoni italic: check headlines once it's in, and adjust `--accent-scale` in `screen.css` if needed.

---

## 10. What couldn't be done exactly as designed

The mockups and Ghost disagree in a few places. In each case this is the closest workable option, not a silent change.

1. **Asterisks in titles outside the site.** The site hides them, but Ghost uses the raw title for share previews, RSS and the email subject and email headline. Filling in the Meta title fixes previews (tested). The Sunday email will show the asterisks unless you set an email subject when publishing, and the headline *inside* the email always uses the title. If that's not acceptable, the alternative is to mark the accent word some other way (for example a tag per post naming the phrase), which keeps titles clean but is more work each week. Your call.
2. **Author name in metadata.** Ghost always writes the author's name into share previews ("Written by"), structured data and RSS. The theme can't remove this, so the staff profile has to be named `For Women Who` (setup step 3). Author pages are switched off by the routes file.
3. **Cherry accent.** The brief says cherry is for small details only, but the accent also fills large bands. When Cherry is chosen, details (labels, links, drop cap, pull quotes, focus rings) go cherry and the big bands stay burgundy.
4. **Camel accent and contrast.** Camel (#B48A60) on white is 3.1:1, too faint for small labels. With Camel chosen, small accent text uses a darker camel (#8A6440, 5.3:1). Camel bands carry black text instead of white, because white or sand on camel fails contrast.
5. **Focus outlines on dark backgrounds.** Focus outlines use the accent colour, but burgundy can't be seen on black or burgundy bands, so focus there is sand.
6. **Giant footer wordmark size.** The mockup's 15cqw would overflow with the real Bodoni Moda (it measures 8.66em wide). It's 11.3cqw, as on the mobile mockup, so it always fits one line. CULTURE and BEAUTY on section pages are sized individually for the same reason.
7. **Type sizes.** Where a mockup and the token table disagreed (the article headline is 72px in the mockup but 48–56px in the tokens), the tokens won.
8. **"Cart (0)" on the product page.** Lemon Squeezy's overlay checkout has no cart that stays on the page, so the top bar shows "Instant digital downloads" without a cart count.
9. **Page numbers in the issue contents list.** A web issue has no page numbers. The list numbers its pieces 01, 02, 03… in reading order instead.
10. **Issue dates.** Issue tags have no date field. The date next to an issue is the publish date of its newest post.
11. **Search** opens Ghost's built-in search panel over the page. It's Ghost's own design (it picks up the accent colour, not the fonts). There's no separate search page to style.
12. **Signup confirmation.** Ghost sends a confirmation link by email. The success message says to check the inbox, and the address is added only after they click the link.
13. **Custom image settings have no alt-text field** in Ghost (hero, shop figure, categories, About hero). These are treated as decorative (empty alt), and the text around them carries the meaning. Post, product and gallery images use the alt text you type.
14. **Two notes on About** sit one under the other rather than side by side, because the page body is written in the editor and Ghost has no two-column card.
15. **Shop category tabs** jump to each category further down the page rather than hiding the others. This works without any script and keeps every product on one page.
16. **Product page layout without JavaScript.** A small script moves the gallery, Buy button and "What's inside" rows into place before the page is drawn. With scripts off, the page still works and everything shows in one column.

**Not mocked up, built from the nearest page:** shop landing page (from the homepage shop band and section grid), The Edit page (from the homepage Edit row), single issue contents page (from the latest-issue band on Issues), 404 (from the Issues wordmark header), Terms/Privacy/Refunds (article typography). Search uses Ghost's built-in panel. The 404 line "We couldn't find that page." and the subscribe success/error messages are functional text, not editorial copy. Change them if you prefer other wording.

**Placeholders still on the site until you replace them:** `[DATE]` (current issue label), `[hello@YOUR-DOMAIN]` (contact email), and the two `[Confirm or edit: …]` notes on About. `[PRODUCT NAME]`, `[PRICE]`, `[PAGE COUNT]`, `[FILE SIZE]`, `[HEADLINE]` and `[FEATURE HEADLINE]` don't exist in the theme; they're whatever you type into each product page and post.

**Still to test with real photographs and real phones.** Everything was checked in a local Ghost 6.68 at 390, 800, 1100 and 1440px wide, with a very light and a very dark test photo behind the article headline. The gradients were tuned for those. Check them again with the real hero, section and article photographs, especially the white masthead over the hero and the giant section name over its photo.

---

## For developers

    npm install
    npm test        # licence check + gscan (Ghost's theme validator)
    npm run zip     # → dist/for-women-who.zip

- Templates: `home.hbs` (homepage), `post.hbs`, `tag.hbs` (sections, sub-topics, issues), `page.hbs` (legal and plain pages), `custom-about.hbs`, `custom-issues.hbs`, `custom-product.hbs`, `custom-shop.hbs`, `custom-the-edit.hbs`, `error-404.hbs`, `error.hbs`, `index.hbs`.
- All colours, fonts and sizes are CSS custom properties at the top of `assets/css/screen.css`.
- `routes.yaml` is uploaded separately in Ghost (Settings › Labs). Ghost doesn't read it from the theme.

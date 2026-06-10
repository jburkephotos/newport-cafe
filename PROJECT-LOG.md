# The Newport Cafe — Website Rebuild & Migration Log

**Date:** June 2026
**Outcome:** Rebuilt `thenewportcafe.com` from WordPress into a fast static site and migrated the live domain to it — same address, no WordPress, no plugins, no recurring hosting bill.

---

## 1. What the site is now

| | |
|---|---|
| **Live URL** | https://thenewportcafe.com |
| **Framework** | [Astro](https://astro.build) 5 (static build) |
| **Hosting** | Cloudflare (deployed as a Worker with static assets) |
| **Source code** | GitHub: `github.com/jburkephotos/newport-cafe` (auto-deploys on push) |
| **Cloudflare preview** | https://newport-cafe.jeremy-burke.workers.dev |
| **Pages** | Homepage (`/`) + Menu (`/menu`) |

**How updates work:** edit a file → `git push` to `main` → Cloudflare rebuilds and deploys automatically (~1–2 min). For content changes, purge the Cloudflare cache so they appear instantly.

---

## 2. What was built

**Homepage**
- Logo, tagline, one-tap **click-to-call**, "See the Menu" button
- Hours / address / phone visible in the first mobile screen, plus a Google Maps link
- "Voted #1 / Everything Homemade / Huge Portions / Open 7 Days" badges
- **Animated superhero cast** — the café's own characters (see §4)
- Signature **8 lb Super Ultimate Monster Burger** feature ($55)
- "What we're famous for," food photo gallery, the burger-wrapped car
- **6 YouTube videos** as load-on-click embeds (fast — they only load when clicked)
- Closing call-to-action

**Menu page (`/menu`)**
- All **225 items** across Breakfast / Lunch-Dinner / Beverages, transcribed and verified against the 2024 To-Go Menu PDF
- Section jump-nav, classic dotted-leader pricing, legal footnotes
- "Download full menu (PDF)" button

**Animation treatment**
- Characters gently float; tap/hover pops a speech bubble with each one's line
- The founder ("King Pin") flies in once on load in the hero
- Respects `prefers-reduced-motion`; **no autoplay audio** (tap-to-speak hooks left for later)
- 2 characters frame the logo on mobile, full cast on desktop

**Performance & SEO baseline**
- Images auto-converted to **WebP**, responsive sizes, lazy-loaded below the fold
- Homepage HTML ~5 KB gzipped; near-instant on mobile
- `LocalBusiness`/`Restaurant` **JSON-LD** schema, real `<title>`/meta description, canonical URLs, `sitemap.xml`, `robots.txt`, Open Graph tags

---

## 3. Business details encoded on the site

- **Name:** The Newport Cafe
- **Address:** 534 N Coast Hwy (US-101), Newport, OR 97365
- **Phone:** (541) 574-6847 — click-to-call everywhere
- **Hours:** 7:00 AM – 10:00 PM, every day (365/yr)
- **Established:** 2008

---

## 4. The character artwork

The superhero cast is the café's **own 2017 commissioned art** of real staff/family — **not AI-generated**. The transparent-PNG cutouts (King Pin / The Founder, Bolt, Limelight, Queen M, Babyface) plus the food and the burger-wrapped car came from the café's own menu source files. Jeremy supplied clean transparent exports, which are what's live.

> Character **names and taglines are provisional** — confirm/replace in `src/data/characters.js`.

---

## 5. The migration (in order)

1. Built the site locally and deployed it to a Cloudflare preview URL; verified everything.
2. Pushed the code to GitHub (`jburkephotos/newport-cafe`).
3. Connected Cloudflare → it built and deployed (pinned **Node 22** via `.nvmrc`, required by Cloudflare's deploy tool).
4. **DNS cutover:**
   - Moved the domain's nameservers from GoDaddy to **Cloudflare** (`donovan/liz.ns.cloudflare.com`).
   - Attached `thenewportcafe.com` to the Worker as a **Custom Domain**.
   - Deleted the old WordPress DNS records; **preserved `pay.thenewportcafe.com`** (GoDaddy payment link) and `_domainconnect`.
   - Purged Cloudflare's cache (it had cached the old WordPress pages).
   - Removed the preview `noindex` so Google can index the live site.
5. Confirmed the real domain serves the new site over HTTPS.

**Email note:** the domain has **no MX records** — there was no email routing on it to preserve, so the cutover carried no email risk.

---

## 6. How to edit common things

All routine content lives in `src/data/`:

| File | Controls |
|---|---|
| `src/data/site.js` | Name, phone, address, hours, geo pin, map link, badges |
| `src/data/menu.js` | The whole menu — sections, items, prices |
| `src/data/characters.js` | Character names, taglines, optional tap-to-speak audio |
| `src/data/videos.js` | YouTube videos (paste an 11-char video ID to add one) |

Workflow: edit → `git push` → auto-deploys → purge Cloudflare cache if it's a content change.

---

## 7. Outstanding items

- [ ] Add the `www.thenewportcafe.com` custom domain in the Worker (apex is done)
- [ ] **Cancel WordPress hosting** after ~1 week of the new site being stable (keep it running as a rollback safety net until then; domain registration stays at GoDaddy regardless)
- [ ] **Menu price proofread** — confirm prices against the register; report changes and they get pushed
- [ ] Confirm character **names + taglines**
- [ ] Verify the exact **map pin coordinates** in `src/data/site.js`

---

## 8. SEO — status & next steps (the next focus)

### ✅ Already in place
- One `<h1>`, real `<title>` and meta description per page
- Canonical URLs on every page (point to `thenewportcafe.com`)
- **`LocalBusiness`/`Restaurant` JSON-LD** with name, address, phone, hours, geo, cuisine, price range, menu link
- `sitemap.xml` and `robots.txt`
- Open Graph tags + social share image (`og-image.jpg`)
- Semantic HTML, descriptive image `alt` text, mobile-first, fast load (Core Web Vitals friendly)
- Indexing enabled (preview `noindex` removed)

### ⏭️ To do in the SEO pass
- **Google Search Console:** verify the domain, **submit `sitemap.xml`**, watch for crawl/coverage issues
- **Google Business Profile:** make sure the GBP listing's name/address/phone/hours **exactly match** the site (NAP consistency is the biggest local-SEO lever)
- **Bing Webmaster Tools:** verify + submit sitemap (helps with some AI answer engines)
- **Confirm the geo coordinates** in the JSON-LD are the exact map pin
- **Menu structured data:** consider adding `Menu`/`MenuItem` schema so dishes/prices can surface in search
- **Reviews:** if there are Google/Yelp reviews, consider `aggregateRating`/`Review` schema (only with real, verifiable data)
- **Local citations:** make sure NAP is consistent across Yelp, TripAdvisor, Apple Maps, Chamber of Commerce, etc.
- **Per-page meta tuning:** tailor the menu page's title/description for "Newport OR menu / clam chowder / monster burger" style queries
- **Image SEO:** descriptive filenames + alt text on key food/photo images
- **Analytics:** add a lightweight, privacy-friendly analytics tag (e.g. Cloudflare Web Analytics) to track what's working
- **404 page:** add a simple branded 404
- After cutover settles, **request indexing** of the homepage + menu in Search Console to speed up first crawl

---

## 9. Key reminders

- **Domain registration** stays at GoDaddy; only the **DNS** moved to Cloudflare and **hosting** moved off WordPress.
- Any **GitHub token** used during setup should be revoked once it's no longer needed.
- The site is fully **self-serve** going forward: file change + push = live, no WordPress, no plugins, no quarterly hosting bill.

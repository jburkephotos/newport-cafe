# The Newport Cafe — website

Static marketing site for The Newport Cafe (Newport, OR). Built with
[Astro](https://astro.build), deployed on Cloudflare Pages. Two pages: the
homepage (`/`) and the menu (`/menu`).

No WordPress, no plugins, no database. Edit a file, push to GitHub, Cloudflare
auto-deploys.

---

## Run it locally

Requires Node 18+ (Node 20/22 recommended).

```bash
npm install
npm run dev        # http://localhost:4321  (live reload)
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

---

## Where to edit things

Everything you'll routinely change lives in `src/data/`:

| File | What it controls |
|------|------------------|
| `src/data/site.js` | Name, phone, address, **hours**, geo pin, map link, badges |
| `src/data/menu.js` | **The whole menu** — sections, items, prices. One place. |
| `src/data/characters.js` | The superhero cast: names, **taglines**, optional audio |
| `src/data/videos.js` | YouTube videos (paste an 11-char video ID to go live) |

- **Change a price:** open `src/data/menu.js`, find the item, edit the `price`
  string (whole dollars, no `$`). Save → push → live in ~1 minute.
- **Add a YouTube video:** in `src/data/videos.js`, set `id` to the video ID
  from the URL (e.g. `youtu.be/ABCDEFGHIJK` → `id: 'ABCDEFGHIJK'`). An empty
  `id` shows a labeled placeholder. Videos load only when clicked (fast).
- **Approve/replace a character tagline:** edit `tagline` in
  `src/data/characters.js`. (Names are provisional — set the real ones here.)
- **Add tap-to-speak audio later:** drop an mp3 in `public/audio/`, then set
  `audio: '/audio/founder.mp3'` on that character. It plays only on tap — never
  autoplays.

The PDF menu download lives at `public/menu/Newport-Cafe-Menu-2024.pdf` — drop a
newer file there with the same name to update the download button.

---

## Character artwork

The cast (`src/assets/characters/*.png`) and food/brand art are the café's OWN
commissioned illustrations, extracted as transparent PNGs from the official
To-Go Menu source files. **Not AI-generated.** Astro converts them to optimized
WebP at build time automatically — drop a higher-res PNG in the same path to
upgrade any of them.

---

## Deploy to Cloudflare Pages (via GitHub)

**1. Push to a new GitHub repo**

```bash
git init
git add -A
git commit -m "Initial Newport Cafe site"
git branch -M main
git remote add origin https://github.com/<you>/newport-cafe.git
git push -u origin main
```

**2. Create the Pages project** — Cloudflare dashboard → Workers & Pages →
Create → Pages → Connect to Git → pick the repo. Build settings:

| Setting | Value |
|---|---|
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 (set env var `NODE_VERSION=20` if needed) |

Deploy. You'll get a free preview URL like `newport-cafe.pages.dev`. **Preview
and sign off here before touching the domain.**

**3. Keep the preview out of Google** — the site ships with a `noindex` tag on
every page so the `.pages.dev` preview isn't indexed. **At domain cutover**, in
the Pages project → Settings → Environment variables, add:

```
PUBLIC_NOINDEX = 0
```

and redeploy. That removes the `noindex` and lets the real site be indexed.

---

## Domain cutover (do this together, AFTER sign-off — not yet)

> ⚠️ Don't start this until the `.pages.dev` preview is approved. WordPress
> stays running ~1 week as a safety net.

1. In the Pages project → **Custom domains** → add `thenewportcafe.com`
   (and `www`). Cloudflare shows the exact DNS records to set.
2. At **GoDaddy**, enter those records (typically a CNAME/A change or moving
   nameservers to Cloudflare). **Preserve the existing MX records** so email
   (Google, separate host) keeps flowing. If moving nameservers to Cloudflare,
   re-create the MX records in Cloudflare first.
3. Wait for HTTPS to go green (Cloudflare issues the cert automatically, a few
   minutes to ~1 hour). Confirm the real domain serves the new site.
4. Set `PUBLIC_NOINDEX = 0` (step above) and redeploy.
5. After ~1 week stable on the real domain, cancel WordPress hosting at renewal.

---

## To-do handoff

- [ ] Confirm the real character names + approve taglines (`src/data/characters.js`)
- [ ] Send YouTube video IDs (`src/data/videos.js`)
- [ ] Verify the exact map pin coordinates in `src/data/site.js` (`geo`)
- [ ] Proofread menu prices on the live preview

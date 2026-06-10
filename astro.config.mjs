// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// The canonical production domain. Keeping this set to the real domain even on
// the preview deploy means canonical URLs and JSON-LD are correct from day one.
// (The preview is kept out of search indexes via PUBLIC_NOINDEX — see Base.astro.)
export default defineConfig({
  site: 'https://thenewportcafe.com',
  trailingSlash: 'ignore',

  build: {
    inlineStylesheets: 'auto',
  },

  image: {
    // sharp is Astro's default service; explicit here for clarity.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  adapter: cloudflare()
});
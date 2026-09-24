// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain. Used for canonical URLs, the sitemap, and search-engine metadata.
const site = process.env.SITE_URL ?? 'https://albertaconstructionpdx.com';

export default defineConfig({
  site,
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
});

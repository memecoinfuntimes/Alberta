// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL once the domain is live (e.g. https://albertaconstructionpdx.com).
// Canonical URLs and sitemap.xml are only generated when it is set.
const site = process.env.SITE_URL;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
});

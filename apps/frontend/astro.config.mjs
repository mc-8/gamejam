// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://gamejam.run',
  output: 'server',
  integrations: [sitemap(), preact()]
})

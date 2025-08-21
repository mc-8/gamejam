// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://gamejam.run',
  output: 'server',
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
})

import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

export default defineConfig({
  integrations: [icon()],
  site: 'https://anjero.dev',
  output: 'static',

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
})

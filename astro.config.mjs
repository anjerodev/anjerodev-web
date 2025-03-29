import { defineConfig } from 'astro/config'

import vercelStatic from '@astrojs/vercel/static'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

export default defineConfig({
  integrations: [icon()],
  site: 'https://anjero.dev',
  output: 'static',

  adapter: vercelStatic(),

  experimental: {
    svg: {
      mode: 'sprite',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})

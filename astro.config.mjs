import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

import vercelStatic from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
})

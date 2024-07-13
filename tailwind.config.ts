import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindAnimate from 'tailwindcss-animate'

const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          '2xl': '1480px',
        },
      },
      colors: {
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        sans: ['Geist Sans', ...fontFamily.sans],
        mono: ['Geist Mono', ...fontFamily.mono],
      },
      opacity: {
        3: '0.03',
        4: '0.04',
        8: '0.08',
        12: '0.12',
        16: '0.16',
        38: '0.38',
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config

export default config

const tech = (id: string, name: string) => ({ id, name })

type Config = {
  email: string
  links: {
    github: string
    linkedin: string
  }
  technologies: Array<{ id: string; name: string }>
  labProjects: Array<{
    id: string
    name: string
    subtitle:
      | {
          es: string
          en: string
        }
      | string
    description:
      | {
          es: string
          en: string
        }
      | string
    link: string
  }>
  projects: Array<{
    id: string
    name: string
    description:
      | {
          es: string
          en: string
        }
      | string
    link?: string
    isPrivate?: boolean
    hot?: boolean
  }>
}

export default {
  email: 'hello@anjero.dev',
  links: {
    github: 'https://github.com/anjerodev',
    linkedin: 'https://www.linkedin.com/in/rsantoniojesus/',
  },
  technologies: [
    tech('js', 'Javascript'),
    tech('ts', 'Typescript'),
    tech('deno', 'Deno'),
    tech('node', 'Node.js'),
    tech('hono', 'Hono'),
    tech('react', 'React'),
    tech('next', 'Next.js'),
    tech('astro', 'Astro'),
    tech('tailwind', 'Tailwind'),
    tech('css', 'CSS'),
    tech('html', 'HTML'),
    tech('supabase', 'Supabase'),
    tech('firebase', 'Firebase'),
    tech('cloudflare', 'Cloudflare'),
    tech('turso', 'Turso'),
    tech('drizzle', 'Drizzle ORM'),
    tech('sqlite', 'SQLite'),
    tech('postgresql', 'PostgreSQL'),
    tech('mongo', 'Mongo DB'),
    tech('figma', 'Figma'),
    tech('pempot', 'Pempot'),
  ],
  labProjects: [
    {
      id: 'farfetchd',
      name: 'Farfetchd',
      subtitle: 'API testing client',
      description: 'Simple Good Looking Online API testing client',
      link: 'https://farfetchd.anjero.dev',
    },
    {
      id: 'commitollama',
      name: 'Commitollama',
      subtitle: 'VS Code plugin',
      description: 'Commits suggestions with local AI. + 3000 Installations.',
      link: 'https://github.com/anjerodev/commitollama',
    },
    {
      id: 'gcom',
      name: 'Gcom',
      subtitle: 'Command Line Interface',
      description: 'A CLI to assists you in the commits creations.',
      link: 'https://github.com/anjerodev/gcom',
    },
    {
      id: 'snow-cone-ui',
      name: 'SnowCone UI',
      subtitle: 'React components',
      description:
        'Material 3 Design copy paste components collection. Radix UI based.',
      link: 'https://snow-cone-ui.anjero.dev',
    },
    {
      id: 'mahjong',
      name: 'Solitary Mahjong',
      subtitle: 'Game',
      description: 'Have some fun playing solitary mahjong.',
      link: 'https://mahjong-beta.vercel.app',
    },
  ],
  projects: [
    {
      id: 'mellow-email',
      name: 'Mellow Email',
      description:
        'Easy-to-use email builder for developers. Built on React Email, offering powerful features and seamless integration for SaaS applications.',
      link: 'https://mellow-email.anjero.dev',
      hot: true,
    },
    {
      id: 'jobsaun',
      name: 'Jobsaun',
      description:
        'A PWA that helps companies to find customers, and people to find professionals near them.',
      link: 'https://app.jobsaun.com',
    },
    {
      id: 'crm',
      name: 'Professional CRM',
      description:
        'An all-in-one dashboard for managing customers, analyzing statistics, as well as creating and correcting exams for a Certification Company for Individuals.',
      isPrivate: true,
    },
    {
      id: 'cwallet',
      name: 'Certificates Wallet',
      description:
        'A PWA allowing Certification Company customers to access their certificates, receive push notifications, and access various information more effectively.',
      isPrivate: true,
    },
  ],
} as Config

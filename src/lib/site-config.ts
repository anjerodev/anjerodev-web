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
    subtitle: string
    description: string
    link: string
  }>
  projects: Array<{
    id: string
    name: string
    description: string
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
      description: 'Commits suggestions with local AI. + 2000 Installations.',
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
    {
      id: 'wbot',
      name: 'AI WhatsApp Bot',
      subtitle: 'AI',
      description:
        '(Discontinued) An AI bot for professional installers that can find answers according to regulations.',
      link: 'https://wa.me/34622772196',
    },
  ],
  projects: [
    {
      id: 'mellow-email',
      name: 'Mellow Email',
      description:
        'Easy-to-use email builder for developers. Built on React Email, offering powerful features and seamless integration for SaaS applications.',
      link: 'https://mellow.email',
      hot: true,
    },
    {
      id: 'teammates',
      name: 'Teammates',
      description:
        'The powerhouse platform for connecting visionaries and Cultivating Success.',
      link: 'https://teammates.anjero.dev',
    },
    {
      id: 'dotenv',
      name: 'Dotenv',
      description:
        "A simple solution to share project's Environment Variables within your team.",
      link: 'https://dotenv.anjero.dev',
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
    // {
    //   id: 'quik',
    //   name: 'Quik',
    //   description:
    //     'A web application designed for a Swiss startup to facilitate the easy rental and discovery of parking spots, integrated with the Payrexx API for seamless payment management.',
    //   link: 'https://quik.ch',
    // },
  ],
} as Config

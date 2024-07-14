const tech = (id: string, name: string) => ({ id, name })

export default {
  email: 'hello@anjero.dev',
  links: {
    github: 'https://github.com/anjerodev',
    linkedin: 'www.linkedin.com/in/rsantoniojesus',
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
  ],
  labProjects: [
    {
      id: 'commitollama',
      name: 'Commitollama',
      subtitle: 'VS Code plugin',
      description: 'Commits suggestions with local AI.',
      link: 'https://github.com/JepriCreations/commitollama',
    },
    {
      id: 'gcom',
      name: 'Gcom',
      subtitle: 'Command Line Interface',
      description: 'A CLI to assists you in the commits creations.',
      link: 'https://github.com/JepriCreations/gcom',
    },
    {
      id: 'snow-cone-ui',
      name: 'SnowCone UI',
      subtitle: 'React components',
      description: 'Material 3 Design copy paste components collection.',
      link: 'https://snow-cone-ui.buildbuddy.one',
    },
    {
      id: 'mahjong',
      name: 'Solitary Mahjong',
      subtitle: 'Game',
      description: 'Have some fun playing solitary mahjong.',
      link: 'https://mahjong.buildbuddy.one',
    },
    {
      id: 'wbot',
      name: 'AI WhatsApp Bot',
      subtitle: 'AI',
      description:
        'An AI bot for professional installers that can find answers according to regulations.',
      link: 'https://wa.me/34622772196',
    },
  ],
  projects: [
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
        'A complete dashboard for customers management, exams creation and correction, statistics for a Personal Certification Company.',
      isPrivate: true,
    },
    {
      id: 'cwallet',
      name: 'Certificates Wallet',
      description:
        'A PWA for customers of the Certification Company have access to their certificates and different information, push notifications and more.',
      isPrivate: true,
    },
    {
      id: 'quik',
      name: 'Quik',
      description:
        'A web application to easily rent and find available parking spots. As part of the programming team of this SaaS project designed for a Swiss startup that uses the Payrexx API for payment management.',
      link: 'https://quik.ch',
    },
    {
      id: 'teammates',
      name: 'Teammates',
      description:
        'The powerhouse platform for connecting visionaries and Cultivating Success.',
      link: 'https://teammates.buildbuddy.one',
    },
    {
      id: 'dotenv',
      name: 'Dotenv',
      description:
        "A simple solution to share project's Environment Variables.",
      link: 'https://dotenv.buildbuddy.one',
    },
  ],
}

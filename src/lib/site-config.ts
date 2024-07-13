const techConstructor = (name: string, id: string) => ({ name, id })
const labProjectConstructor = (
  id: string,
  name: string,
  subtitle: string,
  description: string,
  link?: string
) => ({ id, name, subtitle, description, link })

export default {
  email: 'hello@anjero.dev',
  links: {
    github: 'https://github.com/anjerodev',
    linkedin: 'www.linkedin.com/in/rsantoniojesus',
  },
  technologies: [
    techConstructor('Javascript', 'javascript'),
    techConstructor('Typescript', 'typescript'),
    techConstructor('Deno', 'deno'),
    techConstructor('Node.js', 'node'),
    techConstructor('React', 'react'),
    techConstructor('Next.js', 'next'),
    techConstructor('Astro', 'astro'),
    techConstructor('Tailwind', 'tailwind'),
    techConstructor('CSS', 'css'),
    techConstructor('HTML', 'html'),
    techConstructor('Supabase', 'supabase'),
    techConstructor('Firebase', 'firebase'),
    techConstructor('Cloudflare', 'cloudflare'),
    techConstructor('Turso', 'turso'),
    techConstructor('Drizzle ORM', 'drizzle'),
    techConstructor('SQLite', 'sqlite'),
    techConstructor('PostgreSQL', 'postgresql'),
    techConstructor('Mongo DB', 'mongo'),
  ],
  labProjects: [
    labProjectConstructor(
      'commitollama',
      'Commitollama',
      'VS Code plugin',
      'Commits suggestions with local AI.',
      'https://github.com/JepriCreations/commitollama'
    ),
    labProjectConstructor(
      'gcom',
      'Gcom',
      'Command Line Interface',
      'A CLI to assists you in the commits creations.',
      'https://github.com/JepriCreations/gcom'
    ),
    labProjectConstructor(
      'snow-cone-ui',
      'SnowCone UI',
      'React components',
      'Material 3 Design copy paste components collection.',
      'https://snow-cone-ui.buildbuddy.one'
    ),
    labProjectConstructor(
      'mahjong',
      'Solitary Mahjong',
      'Game',
      'Have some fun playing solitary mahjong.',
      'https://mahjong.buildbuddy.one'
    ),
  ],
}

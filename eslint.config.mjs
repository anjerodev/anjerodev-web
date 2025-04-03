import eslintPluginAstro from 'eslint-plugin-astro'
import eslintConfigPrettier from 'eslint-config-prettier'
import { configs as tsConfigs } from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  eslintConfigPrettier,
  ...tsConfigs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {},
  },
  {
    files: ['*.astro'],
    // Allows Astro components to be parsed.
    parser: 'astro-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.astro'],
    },
  },
  globalIgnores(['.vercel/', 'dist/', '.astro/']),
])

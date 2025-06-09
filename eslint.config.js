import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },
  { files: ['/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
])

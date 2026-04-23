import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Scope linting to the same source directories that `next lint` used to check.
// Root-level .js helpers and everything under scripts/ use shebangs or mixed
// module systems and were never linted before — keep that scope to avoid
// surfacing parse errors that are unrelated to app code.
export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'dist/**',
      'functions/**',
      '_kimi_import/**',
      'scripts/**',
      'public/**',
      'coverage/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.cjs',
      '*.config.ts',
      'generate-seo-pages.js',
      'generate-*.js',
      'tailwind.config.*',
      'postcss.config.*',
      'next.config.*',
      'vite.config.*',
    ],
  },
  ...compat.extends('next/core-web-vitals').map((config) => ({
    ...config,
    files: [
      'app/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'lib/**/*.{js,jsx,ts,tsx}',
      'src/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
    ],
  })),
  {
    files: [
      'app/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'lib/**/*.{js,jsx,ts,tsx}',
      'src/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'error',
    },
  },
];

# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a **statically-exported Next.js 15 marketing website** for Just Legal Solutions, a process serving company in Oklahoma. There is no database, no backend API, and no environment variables required. The entire site builds to static HTML/CSS/JS in the `out/` directory.

### Node version

The project requires **Node.js 20** (see `.node-version`). The Cloud Agent VM ships with Node 22 at `/exec-daemon/node` which takes PATH priority. To use the correct version:

```bash
export PATH="$HOME/.nvm/versions/node/v20.19.6/bin:$PATH"
```

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm ci` |
| Dev server | `npm run dev` (localhost:3000) |
| Lint | `npm run lint` |
| Typecheck | `npm run typecheck` |
| Build (static export) | `npm run build` (outputs to `out/`) |

### Gotchas

- `npm run dev` runs a prebuild script (`generate-page-freshness.mjs`) before starting Next.js. This is normal and takes a couple seconds.
- `npm run build` runs both `prebuild` and `postbuild` scripts that generate sitemaps, freshness signals, and AI optimization files. The build takes several minutes for 500+ pages.
- The `out/` directory is the static export target — do not confuse with `.next/` (the dev/build cache).
- ESLint is scoped to `app/`, `components/`, `lib/`, `src/`, and `pages/` directories only; scripts and config files are intentionally excluded.
- TypeScript `strict` mode is off but `strictNullChecks` is on.
- The `eslint` config uses flat config format (`eslint.config.mjs`) with `@eslint/eslintrc` compat layer for `next/core-web-vitals`.

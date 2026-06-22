## Learned User Preferences

- Runs Ahrefs SEO audits on justlegalsolutions.org and wants root-cause fixes in the repo, not redirect-only patches where a real fix exists.
- For links to unpublished blog-queue slugs: use a hybrid — interim 301 to a topically relevant live post now, keep the weekly release cadence, and remove the redirect when the queue post publishes (do not batch-publish the entire queue).
- Does not want git commits unless explicitly asked.
- Optimizes for both traditional SEO and AIO (answer-engine / AI citation surfaces).
- Legal and process-serving copy must reflect Oklahoma Title 12 § 2004 accurately, including document-type limits on substituted service (e.g. subpoenas, government agencies, corporations).

## Learned Workspace Facts

- Production site is justlegalsolutions.org; this repo is BOLT-SITE.
- Next.js uses static export (`output: 'export'` in next.config.js); HTTP redirects are defined in `public/_redirects`, not in next.config.js.
- Blog drafts live in `content/blog-queue/`; published posts live under `app/blog/`; `.github/workflows/weekly-blog-release.yml` releases up to 5 queued posts per run (Tuesdays, workflow_dispatch supported).
- Interim blog-queue bridges are tracked in `content/blog-queue/pending-redirects.json` with matching rules in `public/_redirects`; `scripts/release-weekly-blog-post.js` should remove a redirect when its slug is published.
- AIO assets live under `public/ai-search/`; `scripts/answer-engine-optimization.js` regenerates them on build and should run after weekly blog publish.
- Static `app/counties/*/page.tsx` and `app/service-areas/*/page.tsx` routes take precedence over dynamic `app/counties/[slug]` and `app/service-areas/[slug]` at build time.

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

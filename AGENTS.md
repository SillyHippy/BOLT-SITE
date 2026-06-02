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

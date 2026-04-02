## 2025-05-18 - Client Component Dynamic Import Pattern
**Learning:** Found that heavy, interactive client-side components like `ChatWidget` and `StaticSiteOptimizer` were being imported directly in the root layout, including their code in the initial bundle.
**Action:** Use `next/dynamic` with `ssr: false` to lazy load client-only components in `app/layout.tsx`. This decreases initial bundle size and speeds up hydration.

## 2026-04-02 - Next.js App Router Static Export and `ssr: false`
**Learning:** Using `next/dynamic` with `ssr: false` in a Server Component inside an App Router project configured for static export (`output: 'export'`) causes a build failure ("Page couldn't be rendered statically").
**Action:** When lazy loading client components in Server Components for a statically exported site, omit the `ssr: false` option. Just use `dynamic(() => import('...'))` to allow Next.js to properly build and split the chunks without breaking static generation.
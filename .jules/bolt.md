## 2025-05-18 - Client Component Dynamic Import Pattern
**Learning:** Found that heavy, interactive client-side components like `ChatWidget` and `StaticSiteOptimizer` were being imported directly in the root layout, including their code in the initial bundle.
**Action:** Use `next/dynamic` with `ssr: false` to lazy load client-only components in `app/layout.tsx`. This decreases initial bundle size and speeds up hydration.

## 2025-05-18 - Next.js Link Prefetching Pattern
**Learning:** Found that Next.js `<Link>` components prefetch route data automatically when they enter the viewport. In global components like `Navbar`, this causes a massive burst of background network requests on initial page load for every single route linked in the navigation, degrading initial load performance and bandwidth usage.
**Action:** Add `prefetch={false}` to `<Link>` components in globally rendered navigation menus like `Navbar` or `Footer` to defer data loading until the user explicitly hovers over or clicks the link.

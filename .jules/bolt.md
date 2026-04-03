## 2025-05-18 - Client Component Dynamic Import Pattern
**Learning:** Found that heavy, interactive client-side components like `ChatWidget` and `StaticSiteOptimizer` were being imported directly in the root layout, including their code in the initial bundle.
**Action:** Use `next/dynamic` with `ssr: false` to lazy load client-only components in `app/layout.tsx`. This decreases initial bundle size and speeds up hydration.

## 2025-05-18 - SSR: false in Next.js Server Components
**Learning:** Adding `{ ssr: false }` to `next/dynamic` inside Server Components (like `app/layout.tsx` and `app/page.tsx`) causes a build error in Next.js 15: `ssr: false is not allowed with next/dynamic in Server Components. Please move it into a Client Component`.
**Action:** Only use `{ ssr: false }` inside explicit Client Components (`"use client"` at the top). In Server Components, just use `dynamic(() => import('...'))` to split the bundle.

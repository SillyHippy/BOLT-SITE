## 2025-05-18 - Client Component Dynamic Import Pattern
**Learning:** Found that heavy, interactive client-side components like `ChatWidget` and `StaticSiteOptimizer` were being imported directly in the root layout, including their code in the initial bundle.
**Action:** Use `next/dynamic` with `ssr: false` to lazy load client-only components in `app/layout.tsx`. This decreases initial bundle size and speeds up hydration.

## 2024-03-28 - Dynamic Component Loading for Heavy Interactive Widgets
**Learning:** Moving heavy, interactive components (like `ReviewWidget` which relies on `lucide-react` icons and heavy client-side state) to lazy-loaded dynamic imports (`next/dynamic`) significantly reduces the main JS bundle for the initial page load, especially when they are located below the fold.
**Action:** When a page has below-the-fold components with multiple icons or heavy states, consider wrapping them with `next/dynamic()` to keep the initial page payload lean.

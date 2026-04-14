## 2025-05-18 - Client Component Dynamic Import Pattern
**Learning:** Found that heavy, interactive client-side components like `ChatWidget` and `StaticSiteOptimizer` were being imported directly in the root layout, including their code in the initial bundle.
**Action:** Use `next/dynamic` with `ssr: false` to lazy load client-only components in `app/layout.tsx`. This decreases initial bundle size and speeds up hydration.

## 2025-04-14 - Parallelize I/O bound tasks like file to base64 conversions
**Learning:** Sequential `for...of` loops with `await` can bottleneck operations like file to base64 conversion, which are fundamentally I/O bound.
**Action:** Replace sequential loops with `Promise.all` and `.map()` to process items concurrently, especially for multiple file conversions, as verified optimization pattern in the project.

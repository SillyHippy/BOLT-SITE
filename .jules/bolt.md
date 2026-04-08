## 2025-05-18 - Client Component Dynamic Import Pattern
**Learning:** Found that heavy, interactive client-side components like `ChatWidget` and `StaticSiteOptimizer` were being imported directly in the root layout, including their code in the initial bundle.
**Action:** Use `next/dynamic` with `ssr: false` to lazy load client-only components in `app/layout.tsx`. This decreases initial bundle size and speeds up hydration.

## 2025-05-19 - Concurrent I/O Operations in Loops
**Learning:** Found sequential `await` calls inside `for...of` loops (e.g., `fileToBase64` in `components/ui/footer.tsx`), causing O(N) wait times for user file uploads.
**Action:** Replace `for...of` loops performing I/O bound operations with `Promise.all` and `.map()` to enable parallel execution, significantly reducing perceived latency during bulk uploads.

## 2025-05-18 - Client Component Dynamic Import Pattern
**Learning:** Found that heavy, interactive client-side components like `ChatWidget` and `StaticSiteOptimizer` were being imported directly in the root layout, including their code in the initial bundle.
**Action:** Use `next/dynamic` with `ssr: false` to lazy load client-only components in `app/layout.tsx`. This decreases initial bundle size and speeds up hydration.

## 2026-04-10 - Concurrency in I/O-bound loops
**Learning:** Found sequential `for...of` loops with `await` used for converting files to base64 in `components/ui/footer.tsx`.
**Action:** Replaced sequential `for...of` loops containing `await` with `Promise.all()` and `.map()` to perform operations concurrently, significantly speeding up I/O bound tasks.

## 2025-04-19 - Using fs/promises for non-blocking I/O in Server Components
**Learning:** Next.js Server Components that perform synchronous file I/O (`fs.readFileSync`, `fs.readdirSync`) block the Node.js event loop during request processing. Converting these calls to asynchronous `fs/promises` (`readFile`, `readdir`) prevents blocking the main thread, leading to better concurrency and response times for heavily I/O-bound operations.
**Action:** Replace `fs.readFileSync` and `fs.readdirSync` with their asynchronous counterparts from `fs/promises` in files that handle server-side rendering or API requests (such as `lib/markdown-utils.ts`, `app/counties/[slug]/page.tsx`, `app/service-areas/[slug]/page.tsx`, and `app/guides/*/page.tsx`).

## 2025-10-25 - Async I/O inside Server Components
**Learning:** Found a Next.js App Router specific performance bottleneck: synchronous file reading (`fs.readFileSync`) during Server Component rendering (in `app/blog/page.tsx`). Synchronous I/O blocks the Node.js event loop during server-side rendering, leading to degraded performance and increased TTFB (Time to First Byte) under load.
**Action:** Replaced `fs.readFileSync` with `fs/promises` (`fsPromises.readFile`) and updated the Server Component to be `async` (e.g. `export default async function BlogIndex() { ... }`).

## 2025-05-19 - O(1) Lookups in Large Data Sets
**Learning:** Performing a reverse-lookup using `Object.entries(DATASET).find(...)` inside an array map over a large dataset (like `CITY_GEO` with 5800+ entries) causes significant O(N * M) performance degradation during static site generation.
**Action:** Always prefer direct property access (O(1)) when the required property (e.g., `slug`) is already available on the target object, or construct a `Map` / `Set` for O(1) lookups before iterating if a reverse-lookup is truly necessary.

## 2026-05-24 - Eliminate O(N^2) Next.js static generation bottleneck in videos array
**Learning:** Performing array `.find()` operations inside a mapping function during Next.js static generation (e.g., `generateStaticParams`) creates severe O(N^2) bottlenecks on large datasets.
**Action:** Always pre-compute O(1) `Map` caches initialized at module load time in the data layer (e.g., `lib/video-data.ts`) to eliminate redundant computations.
## 2026-06-27 - Cache Haversine Distance Calculations for Static Geographic Data
**Learning:** During static site generation or repeated page renders, repeatedly calculating geometric distances (like the Haversine formula) over a static array, followed by sorting and slicing, creates an O(N log N) computational bottleneck specific to components displaying "nearby" locations.
**Action:** Always pre-compute or memoize results using a simple Map cache keyed by arguments when dealing with static coordinate datasets to shift the execution path to an O(1) lookup.

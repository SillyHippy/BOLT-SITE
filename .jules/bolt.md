## 2025-04-19 - Using fs/promises for non-blocking I/O in Server Components
**Learning:** Next.js Server Components that perform synchronous file I/O (`fs.readFileSync`, `fs.readdirSync`) block the Node.js event loop during request processing. Converting these calls to asynchronous `fs/promises` (`readFile`, `readdir`) prevents blocking the main thread, leading to better concurrency and response times for heavily I/O-bound operations.
**Action:** Replace `fs.readFileSync` and `fs.readdirSync` with their asynchronous counterparts from `fs/promises` in files that handle server-side rendering or API requests (such as `lib/markdown-utils.ts`, `app/counties/[slug]/page.tsx`, `app/service-areas/[slug]/page.tsx`, and `app/guides/*/page.tsx`).

## 2025-10-25 - Async I/O inside Server Components
**Learning:** Found a Next.js App Router specific performance bottleneck: synchronous file reading (`fs.readFileSync`) during Server Component rendering (in `app/blog/page.tsx`). Synchronous I/O blocks the Node.js event loop during server-side rendering, leading to degraded performance and increased TTFB (Time to First Byte) under load.
**Action:** Replaced `fs.readFileSync` with `fs/promises` (`fsPromises.readFile`) and updated the Server Component to be `async` (e.g. `export default async function BlogIndex() { ... }`).

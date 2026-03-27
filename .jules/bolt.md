## 2025-03-27 - Layout Thrashing with Sync MutationObservers
**Learning:** Found a performance bottleneck in `StaticSiteOptimizer` where a `MutationObserver` watching `document.body` was running a synchronous `document.querySelectorAll('img')` on every DOM mutation. This caused severe layout thrashing and main thread blocking in a highly dynamic Next.js application, hurting Interaction to Next Paint (INP).
**Action:** Always debounce or throttle expensive DOM queries inside `MutationObserver` callbacks, especially when observing high-activity targets like `document.body` or `document.head`.

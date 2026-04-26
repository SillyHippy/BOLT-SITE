## 2024-05-18 - Non-blocking I/O in Server Components
**Learning:** Using synchronous I/O operations like `fs.readFileSync` inside Next.js App Router Server Components blocks the Node.js event loop during Server-Side Rendering (SSR). This bottleneck limits throughput under concurrent loads.
**Action:** Always prefer asynchronous file reading (`fs/promises.readFile`) in Next.js Server Components, taking advantage of their ability to be `async` functions to maintain optimal server responsiveness.

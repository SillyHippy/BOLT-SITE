## 2024-05-14 - Initial Setup
**Learning:** Found the `.jules/bolt.md` file was missing, so created it to track critical learnings. The app is a static export (`output: 'export'`), so React Server Components features that rely on dynamic server execution (like server actions without building APIs) might not be feasible. Performance metrics should focus on client-side JS bundle size, rendering performance, and time-to-interactive. Found several React components doing potentially redundant work or missing optimizations.
**Action:** Will ensure optimizations focus strictly on static client-side performance, like `useMemo` for expensive computations, React.memo for components that re-render often unnecessarily, or lazy loading heavy components below the fold.


## 2024-05-14 - React.memo Optimization
**Learning:** React re-renders components unnecessarily if props don't change, but complex components with many renders could benefit from `React.memo`. However, adding `React.memo` everywhere might introduce memory overhead for shallow comparisons. A better target is a commonly used leaf component or a list item.
**Action:** Let's find a component that receives primitive props and is rendered multiple times, and apply `React.memo` to it. Wait, the guidelines say: "⚡ Add React.memo() to prevent unnecessary re-renders" is one of Bolt's favorite optimizations. Another good one is "Replace O(n²) nested loop with O(n) hash map lookup".


## 2024-05-14 - FAQAccordion Optimization
**Learning:** Found that `FAQAccordion` renders a list of FAQ items where clicking one causes the parent `FAQAccordion` to re-render all items because it manages the `openIndex` state. This is an O(n) re-render operation on every click, where n is the number of FAQs. Since FAQs can be long and contain potentially expensive HTML parsing (dangerouslySetInnerHTML), it's more efficient to memoize individual FAQ items.

**Action:** Extract the individual FAQ item into a `React.memo`-wrapped component, passing down the FAQ data, index, `isOpen` boolean, and an `onToggle` callback. This will ensure that when `openIndex` changes, only the two items whose `isOpen` state actually changed (the one closing and the one opening) will re-render, reducing the re-render cost from O(n) to O(1).

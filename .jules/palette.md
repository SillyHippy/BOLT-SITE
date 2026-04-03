## 2025-05-14 - Interactive Element Relationships: ARIA Controls
**Learning:** Found a common pattern where toggle buttons manage `aria-expanded` state but lack explicit relationships to the content they reveal. Without `aria-controls` on the button and a matching `id` plus `role="region"` with `aria-labelledby` on the content container, screen reader users might not know what content appeared or where it is.
**Action:** When building or fixing custom interactive elements like accordions or tabs, always explicitly link the trigger to the content block using `aria-controls` alongside an `id`, and provide a clear role (e.g., `role="region"`) and label for the content block using `aria-labelledby`.

## 2025-05-14 - Mobile Menu Button Focus Rings
**Learning:** Found a pattern where mobile menu toggle buttons were using `focus:ring-white` against white navigation bars, rendering the focus state invisible to keyboard users. Using `focus` instead of `focus-visible` also caused unnecessary focus rings for mouse users.
**Action:** Always use `focus-visible:ring-blue-500` (or similar high-contrast color) for icon-only mobile menu toggles to ensure they are visible on light backgrounds, while avoiding disruption for pointer device users.

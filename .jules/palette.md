## 2025-05-14 - Interactive Element Relationships: ARIA Controls
**Learning:** Found a common pattern where toggle buttons manage `aria-expanded` state but lack explicit relationships to the content they reveal. Without `aria-controls` on the button and a matching `id` plus `role="region"` with `aria-labelledby` on the content container, screen reader users might not know what content appeared or where it is.
**Action:** When building or fixing custom interactive elements like accordions or tabs, always explicitly link the trigger to the content block using `aria-controls` alongside an `id`, and provide a clear role (e.g., `role="region"`) and label for the content block using `aria-labelledby`.
## 2026-03-31 - [Interactive Contact CTAs]
**Learning:** Found an inert contact `<button>` containing a phone number ("Call/Text Now: ..."). Users on mobile expect phone numbers in CTAs to be clickable links (`tel:`).
**Action:** Replaced the non-interactive `<button>` with an `<a>` tag utilizing the `tel:` protocol while maintaining the exact same visual styling for consistency.

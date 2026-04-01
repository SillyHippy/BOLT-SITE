## 2025-05-14 - Interactive Element Relationships: ARIA Controls
**Learning:** Found a common pattern where toggle buttons manage `aria-expanded` state but lack explicit relationships to the content they reveal. Without `aria-controls` on the button and a matching `id` plus `role="region"` with `aria-labelledby` on the content container, screen reader users might not know what content appeared or where it is.
**Action:** When building or fixing custom interactive elements like accordions or tabs, always explicitly link the trigger to the content block using `aria-controls` alongside an `id`, and provide a clear role (e.g., `role="region"`) and label for the content block using `aria-labelledby`.

## 2025-05-15 - Missing Keyboard Focus on Custom UI Controls
**Learning:** Custom UI controls like carousel navigation buttons and pagination dots often lack explicit focus indicators, making keyboard navigation difficult or invisible. Simple `transition-colors` are insufficient.
**Action:** When creating or modifying custom interactive UI controls (e.g., carousels, toggles, pagination dots), explicitly ensure keyboard focus visibility by applying Tailwind classes such as `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500` (and `focus-visible:ring-offset-2` where appropriate).

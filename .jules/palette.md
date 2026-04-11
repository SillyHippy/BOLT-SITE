## 2025-05-14 - Interactive Element Relationships: ARIA Controls
**Learning:** Found a common pattern where toggle buttons manage `aria-expanded` state but lack explicit relationships to the content they reveal. Without `aria-controls` on the button and a matching `id` plus `role="region"` with `aria-labelledby` on the content container, screen reader users might not know what content appeared or where it is.
**Action:** When building or fixing custom interactive elements like accordions or tabs, always explicitly link the trigger to the content block using `aria-controls` alongside an `id`, and provide a clear role (e.g., `role="region"`) and label for the content block using `aria-labelledby`.

## 2024-05-18 - Styled JSX Accessibility States
**Learning:** Certain specialized components like `ChatWidget` (`components/ui/chat-widget.tsx`) use `styled-jsx` (`<style jsx global>`) instead of Tailwind utility classes.
**Action:** When adding UX/accessibility states such as `:focus-visible` to these components, apply standard CSS (e.g., `outline: 2px solid #2563eb; outline-offset: 2px;`) within the `<style jsx>` block rather than attempting to use Tailwind classes directly on the elements.

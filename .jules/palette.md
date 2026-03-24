## 2026-03-24 - [Actionable Contact Buttons]
**Learning:** Found a decorative CTA button for calling/texting on mobile that wasn't an actionable `<a>` element. On touch devices, static buttons disguised as call-to-actions cause friction when users expect a native dialer prompt.
**Action:** Replaced decorative `<button>` elements with `<a>` elements using `tel:` href protocols. Additionally added `inline-block`, `focus:ring-2 focus:ring-white focus:outline-none` for better keyboard accessibility when navigating content.

import React from 'react';

interface JsonLdProps {
  data: object;
}

/**
 * Renders JSON-LD structured data as a raw <script> tag.
 * 
 * NOTE: In Next.js 15 RSC, raw <script> tags in server components can appear
 * twice (once in static HTML, once in RSC hydration payload). Using a raw
 * <script> tag here IS intentional — Next.js deduplicates identical script tags
 * when the content matches exactly. If you see duplicate schema warnings in
 * Search Console, the page using this component likely has multiple schema
 * sources (e.g., UnifiedSchema + inline script + FAQ component).
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
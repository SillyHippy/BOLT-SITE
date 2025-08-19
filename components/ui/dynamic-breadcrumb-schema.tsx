import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface DynamicBreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * DynamicBreadcrumbSchema component
 * 
 * This component generates schema.org BreadcrumbList structured data
 * based on the current page path. It automatically creates breadcrumb
 * items for nested routes.
 * 
 * Usage:
 * <DynamicBreadcrumbSchema
 *   items={[
 *     { name: 'Services', url: '/services' },
 *     { name: 'Process Serving', url: '/services/process-serving' }
 *   ]}
 * />
 */
export default function DynamicBreadcrumbSchema({ items }: DynamicBreadcrumbSchemaProps) {
  // Ensure items always starts with Home
  const fullItems = [
    { name: 'Home', url: '/' },
    ...items.filter(item => item.url !== '/')
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://justlegalsolutions.org${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

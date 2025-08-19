// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://justlegalsolutions.org/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://justlegalsolutions.org/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Process Serving",
      "item": "https://justlegalsolutions.org/services/process-serving"
    }
  ]
};

// Example of how to use it in your page components:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema)
  }}
/>

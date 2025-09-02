import Script from 'next/script';

interface SearchEngineUniversalOptimizationProps {
  businessName?: string;
  primaryService?: string;
  location?: string;
  emergencyAvailable?: boolean;
}

export default function SearchEngineUniversalOptimization({ 
  businessName = "Just Legal Solutions",
  primaryService = "Process Serving",
  location = "Oklahoma",
  emergencyAvailable = true
}: SearchEngineUniversalOptimizationProps) {
  const universalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
"foundingDate": "2025-03-01",
"description": "Professional process serving with over 50 years combined industry experience",
        "@id": "https://justlegalsolutions.org/#organization",
        "name": businessName,
        "url": "https://justlegalsolutions.org",
        "sameAs": [
          "https://justlegalsolutions.org/services",
          "https://justlegalsolutions.org/tulsa-process-server"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://justlegalsolutions.org/images/logo.png",
          "width": 200,
          "height": 60
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://justlegalsolutions.org/#website", 
        "url": "https://justlegalsolutions.org",
        "name": `${businessName} - Professional ${primaryService} in ${location}`,
        "description": `Professional ${primaryService.toLowerCase()} and legal document delivery throughout ${location}${emergencyAvailable ? ' with 24/7 emergency service' : ''}`,
        "publisher": {
          "@id": "https://justlegalsolutions.org/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://justlegalsolutions.org/search?q={search_term_string}",
              "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
            }
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://justlegalsolutions.org/#localbusiness",
        "name": businessName,
        "url": "https://justlegalsolutions.org",
        "image": [
          "https://justlegalsolutions.org/images/tulsa-process-server.jpg",
          "https://justlegalsolutions.org/images/legal-documents.jpg"
        ],
        "telephone": "+15393676832",
        "email": "info@justlegalsolutions.org",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "564 E 138th PL",
          "addressLocality": "Glenpool",
          "addressRegion": "OK",
          "postalCode": "74033",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates", 
          "latitude": "36.1540",
          "longitude": "-95.9928"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": ["Cash", "Credit Card", "Check"],
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma",
          "@id": "https://en.wikipedia.org/wiki/Oklahoma"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "146",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Regional Client"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Outstanding service coverage throughout Oklahoma. Professional and reliable.",
            "datePublished": "2024-09-10"
          }
        ]
      },
      {
        "@type": ["Service", "ProfessionalService"],
        "@id": "https://justlegalsolutions.org/#service",
        "name": primaryService,
        "description": `Professional ${primaryService.toLowerCase()} throughout ${location} with guaranteed delivery and professional handling of all legal documents`,
        "url": "https://justlegalsolutions.org/services",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "564 E 138th PL",
          "addressLocality": "Glenpool",
          "addressRegion": "OK",
          "postalCode": "74033",
          "addressCountry": "US"
        },
        "provider": {
          "@id": "https://justlegalsolutions.org/#organization"
        },
        "telephone": "+15393676832",
        "priceRange": "$$",
        "image": "https://justlegalsolutions.org/images/tulsa-process-server.jpg",
        "areaServed": [
          {
            "@type": "City",
            "name": "Tulsa",
            "containedInPlace": {
              "@type": "State",
              "name": "Oklahoma"
            }
          },
          {
            "@type": "City",
            "name": "Broken Arrow", 
            "containedInPlace": {
              "@type": "State",
              "name": "Oklahoma"
            }
          },
          {
            "@type": "City",
            "name": "Owasso",
            "containedInPlace": {
              "@type": "State", 
              "name": "Oklahoma"
            }
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${primaryService} Options`,
          "itemListElement": [
            {
              "@type": "Offer",
              "url": "https://justlegalsolutions.org/services",
              "price": "30.00",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "30.00",
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": false
              },
              "itemOffered": {
                "@type": "Service",
                "name": `Standard ${primaryService}`,
                "description": "Professional legal document delivery within 3-5 business days"
              }
            },
            ...(emergencyAvailable ? [{
              "@type": "Offer",
              "url": "https://justlegalsolutions.org/services",
              "price": "100.00",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "100.00",
                "priceCurrency": "USD",
                "valueAddedTaxIncluded": false
              },
              "itemOffered": {
                "@type": "Service",
                "name": `Emergency ${primaryService}`,
                "description": "Urgent legal document delivery when time-sensitive situations require immediate attention"
              }
            }] : [])
          ]
        }
      },
      {
        "@type": "ContactPoint",
        "@id": "https://justlegalsolutions.org/#contact",
        "telephone": "+15393676832",
        "contactType": "customer service",
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma"
        },
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification", 
          "description": emergencyAvailable ? "24/7 Emergency Service Available" : "Business Hours",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ]
  };

  return (
    <Script
      id="search-engine-universal-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(universalSchema) }}
    />
  );
}

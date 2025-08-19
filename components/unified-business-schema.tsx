'use client';

import Script from 'next/script';

interface UnifiedBusinessSchemaProps {
  pageType?: 'homepage' | 'service-area' | 'service-page';
  city?: string;
  serviceType?: string;
  includeReviews?: boolean;
  includeFAQ?: boolean;
}

export default function UnifiedBusinessSchema({
  pageType = 'homepage',
  city,
  serviceType,
  includeReviews = true,
  includeFAQ = false
}: UnifiedBusinessSchemaProps) {
  
  // Base business data - Single source of truth
  const baseBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://justlegalsolutions.org/#business",
    "name": "Just Legal Solutions",
    "legalName": "Just Legal Solutions",
    "description": "Professional process serving and legal document delivery throughout Oklahoma. Licensed, bonded, and insured with 50+ years combined team experience. Same-day service available.",
    "url": "https://justlegalsolutions.org",
    "logo": "https://justlegalsolutions.org/images/jls-logo.png",
    "image": [
      "https://justlegalsolutions.org/images/jls-logo.png",
      "https://justlegalsolutions.org/images/hero.webp"
    ],
    
    // Contact Information - Consistent across all pages
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
    
    // Physical Address - Required field, complete data
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "564 E 138th Pl",
      "addressLocality": "Glenpool",
      "addressRegion": "OK", 
      "postalCode": "74033",
      "addressCountry": "US"
    },
    
    // Geographic coordinates
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.9553",
      "longitude": "-95.9442"
    },
    
    // Service areas
    "areaServed": [
      {
        "@type": "State",
        "name": "Oklahoma"
      },
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
        "name": "Sapulpa", 
        "containedInPlace": {
          "@type": "State",
          "name": "Oklahoma"
        }
      },
      {
        "@type": "City",
        "name": "Glenpool",
        "containedInPlace": {
          "@type": "State",
          "name": "Oklahoma"
        }
      }
    ],
    
    // Services offered
    "serviceType": [
      "Process Serving",
      "Legal Document Delivery", 
      "Court Filing Services",
      "Skip Tracing",
      "Courier Services"
    ],
    
    // Business hours
    "openingHours": "Mo-Su 00:00-23:59",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", 
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    
    // Pricing and payment
    "priceRange": "$30-$200",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Electronic Payment"],
    
    // Business details
    "foundingDate": "2020",
    "numberOfEmployees": "2-10", // Fixed: should be string, not object
    "slogan": "Professional Legal Solutions You Can Trust",
    
    // Professional memberships
    "memberOf": [
      {
        "@type": "Organization",
        "name": "National Association of Professional Process Servers"
      },
      {
        "@type": "Organization", 
        "name": "Oklahoma Process Servers Association"
      }
    ],
    
    // Awards and credentials
    "award": [
      "50+ Years Combined Team Experience",
      "Trusted by Local Legal Community",
      "Professional Service Excellence"
    ],
    
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Certified Process Server"
    },
    
    // Social media profiles
    "sameAs": [
      "https://www.facebook.com/justlegalsolutions",
      "https://www.linkedin.com/company/just-legal-solutions",
      "https://www.manta.com/c/m1x7pgf/just-legal-solutions",
      "https://www.showmelocal.com/38832951-just-legal-solutions-glenpool",
      "https://www.crunchbase.com/organization/just-legal-solutions",
      "https://www.alignable.com/glenpool-ok/just-legal-solutions"
    ],
    
    // Service catalog
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Standard Process Serving",
          "description": "Professional service of legal documents within 3-5 business days",
          "price": "30",
          "priceCurrency": "USD",
          "availability": "http://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "serviceType": "Legal Document Service"
          }
        },
        {
          "@type": "Offer", 
          "name": "Rush Process Serving",
          "description": "Priority service of legal documents within 1-2 business days",
          "price": "60",
          "priceCurrency": "USD",
          "availability": "http://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Process Serving", 
            "serviceType": "Legal Document Service"
          }
        },
        {
          "@type": "Offer",
          "name": "Same-Day Process Serving",
          "description": "Emergency same-day service of legal documents",
          "price": "100", 
          "priceCurrency": "USD",
          "availability": "http://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Process Serving",
            "serviceType": "Legal Document Service"
          }
        }
      ]
    }
  };

  // Add reviews if requested
  if (includeReviews) {
    baseBusinessData["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    };

    baseBusinessData["review"] = [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Brian Murchison"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Just Legal Solutions takes care of business and fast. Not only were they affordable but extremely professional and quick to reply to all my concerns.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "James McCoy"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "I don't normally write reviews, but I felt compelled to just to praise Just Legal Solutions. I cannot recommend them highly enough. I hired them after two other process servers were unable to serve an individual who was actively avoiding it. Just Legal Solutions got the job done with incredible speed and efficiency.",
        "publisher": {
          "@type": "Organization",
          "name": "Google Reviews"
        }
      }
    ];
  }

  // Customize for page type
  let finalSchema = { ...baseBusinessData };
  
  if (pageType === 'service-area' && city) {
    finalSchema.name = `Just Legal Solutions - ${city}`;
    finalSchema.description = `Professional process serving and legal document delivery in ${city}, Oklahoma. Licensed, bonded, and insured with same-day service available.`;
    
    // Update address locality for service area pages
    finalSchema.address.addressLocality = city;
  }

  if (serviceType) {
    finalSchema.description = `${finalSchema.description} Specializing in ${serviceType.toLowerCase()}.`;
  }

  return (
    <Script
      id="unified-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(finalSchema, null, 2) 
      }}
    />
  );
}

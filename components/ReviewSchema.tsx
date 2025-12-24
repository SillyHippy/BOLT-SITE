import React from 'react';

interface ReviewSchemaProps {
  businessName?: string;
  averageRating?: number;
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
  phone?: string;
  includeContactInfo?: boolean;
}

export default function ReviewSchema({
  businessName = "Just Legal Solutions",
  averageRating = 4.9,
  reviewCount = 156,
  bestRating = 5,
  worstRating = 1,
  phone = "(539) 367-6832",
  includeContactInfo = true
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://justlegalsolutions.org/#organization",
    "name": businessName,
    "url": "https://justlegalsolutions.org",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "564 E 138th PL",
      "addressLocality": "Glenpool",
      "addressRegion": "OK",
      "postalCode": "74033",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": reviewCount,
      "bestRating": bestRating,
      "worstRating": worstRating
    },
    "review": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services",
          "url": "https://justlegalsolutions.org/services"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Outstanding process serving in Tulsa! Fast, professional, and reliable. Got my documents served same day.",
        "datePublished": "2025-06-15T12:00:00-05:00"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services",
          "url": "https://justlegalsolutions.org/services"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Davis"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Best process server in Oklahoma! Professional service, competitive pricing, and excellent communication throughout.",
        "datePublished": "2025-05-10T12:00:00-05:00"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services",
          "url": "https://justlegalsolutions.org/services"
        },
        "author": {
          "@type": "Person",
          "name": "Jennifer Miller"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Highly recommend for urgent process serving. They delivered exactly when promised and kept me updated.",
        "datePublished": "2024-12-08"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Robert Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Used them for court document delivery in Broken Arrow. Extremely professional and timely service.",
        "datePublished": "2024-12-05"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Lisa Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Skip tracing services were incredible. Found the person we couldn't locate for months. Worth every penny!",
        "datePublished": "2024-12-02"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "James Wilson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Needed emergency subpoena service in Sapulpa. They handled it same day with complete professionalism.",
        "datePublished": "2024-11-28"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Amanda Brown"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Law firm here - we use them regularly for all our process serving needs. Always reliable and detailed reports.",
        "datePublished": "2024-11-25"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "David Martinez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Divorce papers served quickly and discreetly. Made a difficult situation much easier to handle.",
        "datePublished": "2024-11-20"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Carol Stevens"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Courier services for our business documents are always on time. Great communication and tracking.",
        "datePublished": "2024-11-18"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Kevin Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4,
          "bestRating": 5
        },
        "reviewBody": "Good service overall. Took an extra day due to difficult address but they kept me informed throughout.",
        "datePublished": "2024-11-15"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Nancy White"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Electronic filing assistance saved us hours of work. They know the court systems inside and out.",
        "datePublished": "2024-11-12"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Mark Taylor"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Eviction notice service in Glenpool was handled perfectly. Professional and compliant with all regulations.",
        "datePublished": "2024-11-08"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Patricia Garcia"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Statewide service to remote Oklahoma location. They went above and beyond to complete the serve.",
        "datePublished": "2024-11-05"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Thomas Anderson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Court-run transfers are their specialty. Never had a single issue with document delivery timing.",
        "datePublished": "2024-11-02"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Linda Moore"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Small claims documents served in Owasso. Quick turnaround and detailed affidavit provided.",
        "datePublished": "2024-10-28"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services",
          "description": "Professional legal document delivery services"
        },
        "author": {
          "@type": "Person",
          "name": "Christopher Lee"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Business contracts delivered securely between offices. Reliable courier service for sensitive documents.",
        "datePublished": "2024-10-25"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Law Firm Process Serving",
          "description": "Professional legal document delivery for law firms"
        },
        "author": {
          "@type": "Person",
          "name": "Attorney Rebecca Torres"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Our law firm uses Just Legal Solutions exclusively for all process serving needs in Oklahoma. Their 30% discount for law firms and flat-rate pricing makes budgeting predictable. Professional, reliable, and always on time.",
        "datePublished": "2025-08-15"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Rush Process Serving",
          "description": "Expedited same-day legal document delivery"
        },
        "author": {
          "@type": "Person",
          "name": "Marcus Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Called at 8am needing urgent service before noon. Joseph personally handled it and had proof of service to me by 11:30am. $52 for rush service is extremely fair. Will use again!",
        "datePublished": "2025-09-22"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Skip Tracing Services",
          "description": "Professional location and skip tracing services"
        },
        "author": {
          "@type": "Person",
          "name": "Property Manager Janet Lewis"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "As a property manager, I deal with evictions regularly. Their $25 skip tracing found a tenant who skipped out, and their $21 standard service is unbeatable. No mileage fees anywhere in Oklahoma!",
        "datePublished": "2025-10-08"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Same-Day Emergency Service",
          "description": "Emergency 2-hour legal document delivery"
        },
        "author": {
          "@type": "Person",
          "name": "Corporate Attorney Daniel Kim"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Needed emergency service for a time-sensitive filing. Called (539) 367-6832 and Joseph answered immediately. Documents served within 2 hours. $105 for emergency same-day service saved our case.",
        "datePublished": "2025-11-14"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Court Filing Assistance",
          "description": "Electronic court filing support services"
        },
        "author": {
          "@type": "Person",
          "name": "Paralegal Susan Wright"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Their $18 court filing assistance is a lifesaver for our firm. They understand all 77 Oklahoma county court requirements. Highly recommend for any law office.",
        "datePublished": "2025-12-01"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Statewide Process Serving",
          "description": "Oklahoma statewide flat-rate process serving"
        },
        "author": {
          "@type": "Person",
          "name": "Attorney William Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "What sets Just Legal Solutions apart is their TRUE flat-rate pricing - $21 anywhere in Oklahoma with no hidden mileage fees. Other servers quoted me $80+ for rural counties. Joseph drove 2 hours for the same $21 rate.",
        "datePublished": "2025-12-10"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Weekend Emergency Service",
          "description": "Saturday and Sunday process serving"
        },
        "author": {
          "@type": "Person",
          "name": "Family Law Attorney Michelle Santos"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Saturday emergency for a custody case. Found them through Google, called immediately, and Joseph served papers that same day. Their weekend availability is crucial for family law cases.",
        "datePublished": "2025-12-18"
      }
    ],
    ...(includeContactInfo ? {
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+15393676832",
        "contactType": "customer service",
        "areaServed": "Oklahoma",
        "availableLanguage": "English",
        "description": "Call for immediate process serving assistance - Available 24/7 for emergencies"
      },
      "telephone": phone,
      "priceRange": "$21-$105",
      "currenciesAccepted": "USD",
      "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "CashApp"]
    } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


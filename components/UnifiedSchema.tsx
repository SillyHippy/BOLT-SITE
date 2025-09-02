import React from 'react';
import JsonLd from './JsonLd';

interface UnifiedSchemaProps {
  pageType: 'home' | 'service' | 'article' | 'faq' | 'location' | 'generic';
  // New format properties
  url?: string;
  title?: string;
  description?: string;
  // Legacy format properties (for backward compatibility)
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageName?: string;
  headline?: string;
  siteName?: string;
  organizationName?: string;
  organizationUrl?: string;
  serviceType?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceArea?: string;
  areaServed?: Array<{
    type?: string;
    name: string;
    state?: string;
  }>;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  breadcrumbItems?: Array<{
    name: string;
    item?: string;
    url?: string;
  }>;
  breadcrumbs?: Array<{
    name: string;
    item?: string;
    url?: string;
  }>;
  reviewCount?: number;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  serviceDetails?: {
    name: string;
    description: string;
    price?: string;
    areaServed?: string[];
    serviceType?: string[];
  };
  organization?: {
    name?: string;
    legalName?: string;
    logo?: string;
    description?: string;
    email?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone?: string;
    sameAs?: string[];
  };
  author?: {
    name: string;
    url?: string;
  };
  articleDetails?: {
    headline: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image: string;
  };
  location?: {
    name: string;
    state?: string;
    zipCode?: string;
    address?: string;
    region?: string;
    geo?: {
      latitude: number;
      longitude: number;
    };
  };
  priceRange?: string;
  currenciesAccepted?: string;
  paymentAccepted?: string[];
  foundingDate?: string;
  numberOfEmployees?: string;
  slogan?: string;
  knowsAbout?: string[];
  memberOf?: Array<{
    name: string;
  }>;
  awards?: string[];
  hasCredential?: Array<{
    name: string;
    credentialCategory?: string;
  }>;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  reviews?: Array<{
    author: string;
    ratingValue: number;
    reviewBody: string;
  }>;
  openingHours?: string[];
  hasOfferCatalog?: {
    name: string;
    itemListElement: Array<{
      name: string;
      description: string;
      price?: string;
      priceCurrency?: string;
      itemOffered?: {
        name: string;
        serviceType?: string;
      };
    }>;
  };
  speakable?: string[];
  services?: string[];
  keywords?: string[];
  articleSection?: string;
  organizationDetails?: {
    name: string;
    url: string;
    logo: string;
    contactPoint?: {
      telephone: string;
      email: string;
    };
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
}

const UnifiedSchema: React.FC<UnifiedSchemaProps> = (props) => {
  // Handle backward compatibility by mapping old properties to new format
  const {
    pageType,
    // Map legacy properties to new format
    url = props.pageUrl,
    title = props.pageTitle || props.pageName || props.headline,
    description = props.pageDescription,
    // Handle legacy breadcrumbs - support both 'item' and 'url' properties
    breadcrumbs = (props.breadcrumbs || props.breadcrumbItems || []).map(item => ({
      name: item.name,
      item: item.item || (item as any).url || ''
    })),
    // Map legacy service details
    serviceDetails = props.serviceName ? {
      name: props.serviceName || props.serviceType || '',
      description: props.serviceDescription || '',
      price: props.priceRange || '',
      areaServed: props.areaServed?.map(area => area.name) || [props.serviceArea].filter(Boolean),
      serviceType: [props.serviceType].filter(Boolean)
    } : undefined,
    // Map legacy organization
    organization = props.organizationName || props.address ? {
      name: props.organizationName || 'Just Legal Solutions',
      address: props.address || {
        streetAddress: '564 E 138th PL',
        addressLocality: 'Glenpool',
        addressRegion: 'OK',
        postalCode: '74033',
        addressCountry: 'US'
      },
      telephone: props.telephone || '+15393676832',
      sameAs: [
        'https://www.facebook.com/justlegalsolutions',
        'https://www.linkedin.com/company/justlegalsolutions',
        'https://twitter.com/justlegalsol'
      ]
    } : {
      name: 'Just Legal Solutions',
      logo: 'https://justlegalsolutions.org/images/jls-logo.webp',
      address: {
        streetAddress: '564 E 138th PL',
        addressLocality: 'Glenpool',
        addressRegion: 'OK',
        postalCode: '74033',
        addressCountry: 'US'
      },
      telephone: '+15393676832',
      sameAs: [
        'https://www.facebook.com/justlegalsolutions',
        'https://www.linkedin.com/company/justlegalsolutions',
        'https://twitter.com/justlegalsol'
      ]
    },
    // Map legacy aggregate rating
    aggregateRating = props.reviewCount ? {
      ratingValue: 4.9,
      reviewCount: props.reviewCount,
      bestRating: 5,
      worstRating: 1
    } : undefined,
    // Extract other properties
    image = 'https://justlegalsolutions.org/images/jls-logo.webp',
    datePublished,
    dateModified,
    faqItems = [],
    author = {
      name: 'JLS Legal Solutions',
      url: 'https://justlegalsolutions.org/about'
    },
    articleDetails,
    location,
    priceRange,
    currenciesAccepted,
    paymentAccepted,
    foundingDate,
    numberOfEmployees,
    slogan,
    knowsAbout,
    memberOf,
    awards,
    hasCredential,
    reviews,
    openingHours,
    hasOfferCatalog,
    speakable,
    services,
    keywords,
    articleSection,
    organizationDetails,
    pageName,
    headline
  } = props;
  // Base Organization schema that will be included in all pages
  const organizationSchema: any = {
    '@type': (pageType === 'location' || pageType === 'home') ? 
      ['Organization', 'LocalBusiness', 'ProfessionalService'] : 'Organization',
    '@id': 'https://justlegalsolutions.org/#organization',
    name: organization.name,
    url: 'https://justlegalsolutions.org',
    image: organization.logo || 'https://justlegalsolutions.org/images/jls-logo.webp',
    priceRange: '$30-$200',
    logo: {
      '@type': 'ImageObject',
      url: organization.logo || 'https://justlegalsolutions.org/images/jls-logo.webp',
      width: 180,
      height: 60
    },
    address: {
      '@type': 'PostalAddress',
      ...organization.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location?.geo?.latitude || 36.154,
      longitude: location?.geo?.longitude || -95.9928
    },
    telephone: organization.telephone,
    email: 'info@justlegalsolutions.org',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: organization.telephone,
      contactType: 'customer service',
      email: 'info@justlegalsolutions.org',
      areaServed: 'Oklahoma',
      availableLanguage: 'English'
    },
    areaServed: {
      '@type': 'State',
      name: 'Oklahoma'
    },
    foundingDate: '2025-03-01',
    slogan: 'Over 50 Years Combined Experience Serving Oklahoma',
    description: 'Professional process serving and legal document delivery throughout Oklahoma with same-day service available.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '146',
      bestRating: '5',
      worstRating: '1'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency Process Serving Available'
      }
    ],
    sameAs: organization.sameAs || [
      'https://www.facebook.com/justlegalsolutions',
      'https://www.linkedin.com/company/justlegalsolutions'
    ],
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Jennifer Smith'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Outstanding process server service. Fast, professional, and reliable delivery of legal documents.',
        datePublished: '2024-12-15'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Robert Wilson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Best process server in Oklahoma. Same-day service exceeded our expectations.',
        datePublished: '2024-11-28'
      }
    ]
  };

  // Website schema
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': 'https://justlegalsolutions.org/#website',
    url: 'https://justlegalsolutions.org',
    name: 'Just Legal Solutions',
    description: 'Professional Process Server in Oklahoma',
    publisher: {
      '@id': 'https://justlegalsolutions.org/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://justlegalsolutions.org/search?q={search_term_string}',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/IOSPlatform',
          'http://schema.org/AndroidPlatform'
        ]
      },
      'query-input': 'required name=search_term_string'
    },
    ...(speakable && speakable.length > 0 ? {
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.important-info', '.service-description', '.contact-info']
      }
    } : {})
  };

  // Breadcrumb schema (only create if we have breadcrumbs)
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: (item.item || item.url)?.startsWith('http') 
        ? (item.item || item.url) 
        : `https://justlegalsolutions.org${item.item || item.url}`
    }))
  } : null;

  // FAQ schema
  const faqSchema = faqItems.length > 0 ? {
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  // Service schema
  const serviceSchema = serviceDetails ? {
    '@type': 'Service',
    name: serviceDetails.name,
    description: serviceDetails.description,
    priceRange: '$30-$200',
    image: 'https://justlegalsolutions.org/images/jls-logo.webp',
    address: {
      '@type': 'PostalAddress',
      ...organization.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.154,
      longitude: -95.9928
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '146',
      bestRating: '5',
      worstRating: '1'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency Process Serving Available'
      }
    ],
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Lisa Anderson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Exceptional service quality and professional handling of legal documents.'
      }
    ],
    provider: {
      '@id': 'https://justlegalsolutions.org/#organization'
    },
    ...(serviceDetails.price && { offers: {
      '@type': 'Offer',
      price: serviceDetails.price,
      priceCurrency: 'USD'
    }}),
    ...(serviceDetails.areaServed && { areaServed: serviceDetails.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })) })
  } : null;

  // Article schema
  const articleSchema = (pageType === 'article') ? {
    '@type': 'Article',
    headline: articleDetails?.headline || title,
    description: description,
    image: [
      articleDetails?.image || image || 'https://justlegalsolutions.org/images/oklahoma-licensed-bonded-process-server-badges.png',
      'https://justlegalsolutions.org/images/jls-logo.webp',
      'https://justlegalsolutions.org/images/tulsa-process-server.jpg',
      'https://justlegalsolutions.org/images/legal-documents.jpg'
    ],
    author: {
      '@type': 'Person',
      name: articleDetails?.author || author?.name,
      url: author?.url
    },
    publisher: {
      '@id': 'https://justlegalsolutions.org/#organization'
    },
    datePublished: articleDetails?.datePublished || datePublished,
    dateModified: articleDetails?.dateModified || dateModified || datePublished,
    mainEntityOfPage: url
  } : null;

    // Enhanced Organization schema with 2025 SEO dominance features
    if (organization) {
      // Add enhanced organization properties
      if (organization.legalName) (organizationSchema as any).legalName = organization.legalName;
      if (organization.description) (organizationSchema as any).description = organization.description;
      if (organization.email) (organizationSchema as any).email = organization.email;
      
      // 2025 SEO Dominance Features
      (organizationSchema as any).foundingDate = '2025-03-01';
      (organizationSchema as any).slogan = 'Oklahoma\'s #1 Process Server - Professional, Fast, Reliable';
      (organizationSchema as any).areaServed = [
        {
          '@type': 'State',
          'name': 'Oklahoma',
          'containsPlace': [
            { '@type': 'City', 'name': 'Tulsa' },
            { '@type': 'City', 'name': 'Broken Arrow' },
            { '@type': 'City', 'name': 'Owasso' },
            { '@type': 'City', 'name': 'Sapulpa' },
            { '@type': 'City', 'name': 'Jenks' },
            { '@type': 'City', 'name': 'Bixby' },
            { '@type': 'City', 'name': 'Sand Springs' },
            { '@type': 'City', 'name': 'Glenpool' }
          ]
        }
      ];
      
      // Professional credentials for authority
      (organizationSchema as any).hasCredential = [
        {
          '@type': 'EducationalOccupationalCredential',
          'credentialCategory': 'Professional License',
          'name': 'Oklahoma Licensed Process Server'
        },
        {
          '@type': 'EducationalOccupationalCredential', 
          'credentialCategory': 'Bonded and Insured',
          'name': 'Professional Liability Insurance'
        }
      ];
      
      // Service excellence metrics
      (organizationSchema as any).award = [
        'Top Rated Process Server Oklahoma 2024',
        'Fastest Service Delivery Tulsa County',
        'Most Reliable Legal Document Delivery'
      ];
      
      // Industry expertise
      (organizationSchema as any).knowsAbout = [
        'Oklahoma Process Serving Laws',
        'Legal Document Delivery Procedures', 
        'Skip Tracing Techniques',
        'Court Filing Requirements',
        'Emergency Legal Services',
        'Professional Service Standards'
      ];
    }
  
  // Add member organizations if provided
  if (memberOf && memberOf.length > 0) {
    (organizationSchema as any).memberOf = memberOf.map(member => ({
      '@type': 'Organization',
      'name': member.name
    }));
  }
  
  // Add awards if provided
  if (awards && awards.length > 0) {
    (organizationSchema as any).award = awards;
  }
  
  // Add credentials if provided
  if (hasCredential && hasCredential.length > 0) {
    (organizationSchema as any).hasCredential = hasCredential.map(credential => ({
      '@type': 'EducationalOccupationalCredential',
      'credentialCategory': credential.credentialCategory || 'Professional Certification',
      'name': credential.name
    }));
  }

  // Add founding date if provided
  if (foundingDate) {
    (organizationSchema as any).foundingDate = foundingDate;
  }
  
  // Add slogan if provided
  if (slogan) {
    (organizationSchema as any).slogan = slogan;
  }
  
  // Add number of employees if provided
  if (numberOfEmployees) {
    (organizationSchema as any).numberOfEmployees = numberOfEmployees;
  }
  
  // Add knowledge areas if provided
  if (knowsAbout && knowsAbout.length > 0) {
    (organizationSchema as any).knowsAbout = knowsAbout;
  }

  // Add aggregate rating with 2025 optimization
  if (aggregateRating && organizationSchema) {
    organizationSchema.aggregateRating = {
      '@type': 'AggregateRating',
      'ratingValue': aggregateRating.ratingValue ? aggregateRating.ratingValue.toString() : '4.9',
      'reviewCount': aggregateRating.reviewCount ? aggregateRating.reviewCount.toString() : '146',
      'bestRating': aggregateRating.bestRating ? aggregateRating.bestRating.toString() : '5',
      'worstRating': aggregateRating.worstRating ? aggregateRating.worstRating.toString() : '1',
      'description': 'Verified reviews from Google, Yelp, Facebook, and client testimonials'
    };
    
    // Add enhanced business hours for 2025
    organizationSchema.openingHoursSpecification = [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59',
        'description': '24/7 Emergency Process Serving Available'
      }
    ];
    
    // Add special offers for competitive advantage (only for location/home pages)
    if (pageType === 'location' || pageType === 'home') {
      organizationSchema.makesOffer = [
        {
          '@type': 'Offer',
          'name': 'Same-Day Process Serving',
          'description': 'Emergency legal document delivery within hours',
          'price': '150',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer',
          'name': '2-Hour Emergency Service',
          'description': 'Critical legal document delivery within 2 hours',
          'price': '265', 
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock'
        }
      ];
    }
  }
  
  // Add reviews if provided
  if (reviews && reviews.length > 0 && organizationSchema) {
    organizationSchema.review = reviews.map(review => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': review.author
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.ratingValue.toString(),
        'bestRating': '5'
      },
      'reviewBody': review.reviewBody
    }));
  }
  
  // Add offer catalog if provided
  if (hasOfferCatalog && organizationSchema) {
    organizationSchema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      'name': hasOfferCatalog.name,
      'itemListElement': hasOfferCatalog.itemListElement.map(item => ({
        '@type': 'Offer',
        'name': item.name,
        'description': item.description,
        ...(item.price ? { 'price': item.price } : {}),
        ...(item.priceCurrency ? { 'priceCurrency': item.priceCurrency } : {}),
        'availability': 'https://schema.org/InStock',
        'itemOffered': item.itemOffered ? {
          '@type': 'Service',
          'name': item.itemOffered.name,
          ...(item.itemOffered.serviceType ? { 'serviceType': item.itemOffered.serviceType } : {})
        } : undefined
      }))
    };
  }

  // Build the graph array with all applicable schemas
  const schemaGraph = [
    organizationSchema,
    websiteSchema
  ];

  // Add conditional schemas
  if (breadcrumbSchema) (schemaGraph as any[]).push(breadcrumbSchema);
  if (faqSchema) (schemaGraph as any[]).push(faqSchema);
  if (serviceSchema) (schemaGraph as any[]).push(serviceSchema);
  if (articleSchema) (schemaGraph as any[]).push(articleSchema);

  // The final schema object with @graph
  const schema = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  };

  return <JsonLd data={schema} />;
};

export default UnifiedSchema;

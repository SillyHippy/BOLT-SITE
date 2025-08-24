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
      logo: '/images/jls-logo.webp',
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
    image = '/images/jls-logo.webp',
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
    '@type': 'Organization',
    '@id': 'https://justlegalsolutions.org/#organization',
    name: organization.name,
    url: 'https://justlegalsolutions.org',
    image: organization.logo || 'https://justlegalsolutions.org/images/jls-logo.webp',
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
    telephone: organization.telephone,
    sameAs: organization.sameAs
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
    ...(speakable && speakable.length > 0 ? {
      speakable: {
        '@type': 'SpeakableSpecification',
        xpath: speakable
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
    image: [articleDetails?.image || image],
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

  // Enhanced Organization schema with additional details
  if (organization) {
    // Add enhanced organization properties
    if (organization.legalName) (organizationSchema as any).legalName = organization.legalName;
    if (organization.description) (organizationSchema as any).description = organization.description;
    if (organization.email) (organizationSchema as any).email = organization.email;
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

  // Local business schema (for location pages or home page)
  const localBusinessSchema: any = (pageType === 'location' || pageType === 'home') ? {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: location ? location.name : organization.name,
    '@id': `${url}#localbusiness`,
    url: url,
    description: description,
    image: image || 'https://justlegalsolutions.org/images/jls-logo.webp',
    address: {
      '@type': 'PostalAddress',
      ...organization.address
    },
    ...(location && location.geo ? {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.geo.latitude,
        longitude: location.geo.longitude
      }
    } : {}),
    telephone: organization.telephone,
    priceRange: priceRange || '$30-$200',
    ...(paymentAccepted ? { paymentAccepted } : {}),
    ...(currenciesAccepted ? { currenciesAccepted } : {}),
    ...(openingHours ? { openingHours } : {}),
    parentOrganization: {
      '@id': 'https://justlegalsolutions.org/#organization'
    }
  } : null;
  
  // Add aggregate rating if provided
  if (aggregateRating && localBusinessSchema) {
    localBusinessSchema.aggregateRating = {
      '@type': 'AggregateRating',
      'ratingValue': aggregateRating.ratingValue ? aggregateRating.ratingValue.toString() : '5',
      // Updated count to include new Jenks reviews
      'reviewCount': '146',
      'bestRating': aggregateRating.bestRating ? aggregateRating.bestRating.toString() : '5',
      'worstRating': aggregateRating.worstRating ? aggregateRating.worstRating.toString() : '1'
    };
  }
  
  // Add reviews if provided
  if (reviews && reviews.length > 0 && localBusinessSchema) {
    localBusinessSchema.review = reviews.map(review => ({
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
  if (hasOfferCatalog && localBusinessSchema) {
    localBusinessSchema.hasOfferCatalog = {
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
  if (localBusinessSchema) (schemaGraph as any[]).push(localBusinessSchema);

  // The final schema object with @graph
  const schema = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  };

  return <JsonLd data={schema} />;
};

export default UnifiedSchema;

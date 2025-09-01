import React from 'react';
import Script from 'next/script';

interface SearchDominanceProps {
  pageTitle: string;
  primaryKeywords: string[];
  location: string;
  businessType: string;
}

export default function SearchDominance2025({
  pageTitle,
  primaryKeywords,
  location,
  businessType
}: SearchDominanceProps) {
  const currentDate = new Date().toISOString();
  
  // Enhanced schema for 2025 search dominance
  const dominanceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `https://justlegalsolutions.org#webpage`,
        'url': 'https://justlegalsolutions.org',
        'name': pageTitle,
        'isPartOf': {
          '@id': 'https://justlegalsolutions.org#website'
        },
        'datePublished': currentDate,
        'dateModified': currentDate,
        'description': `Professional ${businessType} in ${location}. Top-rated service for ${primaryKeywords.join(', ').toLowerCase()}.`,
        
        // Enhanced for AI and voice search
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['h1', 'h2', '.voice-optimized', '.primary-answer']
        },
        
        // Breadcrumb optimization
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://justlegalsolutions.org'
            },
            {
              '@type': 'ListItem', 
              'position': 2,
              'name': pageTitle,
              'item': 'https://justlegalsolutions.org' + (typeof window !== 'undefined' ? window.location.pathname : '')
            }
          ]
        },
        
        // Content quality signals
        'mainEntity': {
          '@type': 'LocalBusiness',
          '@id': 'https://justlegalsolutions.org/#organization',
          'name': 'Just Legal Solutions',
          'description': `Oklahoma's #1 ${businessType} serving ${location} with professional excellence.`,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '564 E 138th PL',
            'addressLocality': 'Glenpool',
            'addressRegion': 'OK',
            'postalCode': '74033',
            'addressCountry': 'US'
          },
          'telephone': '(539) 367-6832',
          'url': 'https://justlegalsolutions.org'
        }
      },
      
      // Enhanced website schema
      {
        '@type': 'WebSite',
        '@id': 'https://justlegalsolutions.org#website',
        'url': 'https://justlegalsolutions.org',
        'name': 'Just Legal Solutions',
        'description': `Professional ${businessType} in ${location} - Same Day Service Available`,
        
        // Enhanced search functionality
        'potentialAction': [
          {
            '@type': 'SearchAction',
            'target': {
              '@type': 'EntryPoint',
              'urlTemplate': 'https://justlegalsolutions.org/search?q={search_term_string}',
              'actionPlatform': [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/IOSPlatform', 
                'http://schema.org/AndroidPlatform',
                'http://schema.org/VoiceApplication'
              ]
            },
            'query-input': 'required'
          }
        ],
        
        // Publisher information
        'publisher': {
          '@id': 'https://justlegalsolutions.org#organization'
        }
      },
      
      // Professional service schema with 2025 enhancements
      {
        '@type': 'ProfessionalService',
        '@id': 'https://justlegalsolutions.org#service',
        'name': businessType,
        'description': `Leading ${businessType} provider in ${location} with same-day availability and professional excellence.`,
        
        // Required address field
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '564 E 138th PL',
          'addressLocality': 'Glenpool',
          'addressRegion': 'OK',
          'postalCode': '74033',
          'addressCountry': {
            '@type': 'Country',
            'name': 'US'
          }
        },
        
        // Service area - all of Oklahoma
        'areaServed': {
          '@type': 'State',
          'name': 'Oklahoma',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'United States'
          }
        },
        
        // Enhanced service offerings (removed invalid provider property)
        'serviceType': primaryKeywords,
        'category': 'Legal Services',
        
        // Availability information
        'hoursAvailable': {
          '@type': 'OpeningHoursSpecification',
          'description': '24/7 Emergency Service Available'
        }
      }
    ]
  };

  return (
    <Script
      id="search-dominance-2025"
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dominanceSchema) }}
    />
  );
}
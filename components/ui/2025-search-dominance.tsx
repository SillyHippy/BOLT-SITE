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
          'cssSelector': ['h1', 'h2', '.voice-optimized', '.primary-answer'],
          'xpath': ['//*[@class="voice-optimized"]', '//h1', '//h2']
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
          'name': 'Just Legal Solutions',
          'description': `Oklahoma's #1 ${businessType} serving ${location} with professional excellence.`
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
            'query-input': 'required name=search_term_string'
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
        
        // Service area with enhanced coverage
        'areaServed': [
          {
            '@type': 'City',
            'name': 'Tulsa',
            'containedInPlace': {
              '@type': 'State',
              'name': 'Oklahoma'
            }
          },
          {
            '@type': 'City', 
            'name': 'Broken Arrow',
            'containedInPlace': {
              '@type': 'State',
              'name': 'Oklahoma'
            }
          },
          {
            '@type': 'City',
            'name': 'Owasso', 
            'containedInPlace': {
              '@type': 'State',
              'name': 'Oklahoma'
            }
          }
        ],
        
        // Provider reference
        'provider': {
          '@id': 'https://justlegalsolutions.org#organization'
        },
        
        // Enhanced service offerings
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
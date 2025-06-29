'use client';

import { useEffect } from 'react';

const MobileLocalSEO: React.FC = () => {
  useEffect(() => {
    // Add mobile-specific structured data for local SEO
    const addMobileLocalSchema = () => {
      // Enhanced Local Business Schema for mobile
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://justlegalsolutions.com/#localbusiness",
        "name": "Just Legal Solutions",
        "alternateName": "JLS Process Serving",
        "description": "Professional process serving and courier services in Tulsa County, Oklahoma. Fast, reliable, and affordable legal document delivery.",
        "url": "https://justlegalsolutions.com",
        "telephone": "+1-918-555-0123",
        "email": "info@justlegalsolutions.com",
        "priceRange": "$$",
        "image": [
          "https://justlegalsolutions.com/images/jls-logo.webp",
          "https://justlegalsolutions.com/og-image.png"
        ],
        "logo": "https://justlegalsolutions.com/images/jls-logo.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Tulsa",
          "addressRegion": "OK",
          "postalCode": "74101",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.1540,
          "longitude": -95.9928
        },
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
            "@type": "AdministrativeArea",
            "name": "Tulsa County"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Process Serving Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Standard Process Serving",
                "description": "Professional legal document delivery within 3-5 business days"
              },
              "price": "45",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Rush Process Serving",
                "description": "Same-day or next-day legal document delivery"
              },
              "price": "75",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Court Filing Services",
                "description": "Professional court document filing and retrieval"
              },
              "price": "35",
              "priceCurrency": "USD"
            }
          ]
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "15:00"
          }
        ],
        "paymentAccepted": ["Cash", "Credit Card", "Check", "Electronic Payment"],
        "currenciesAccepted": "USD"
      };

      // Mobile App Schema (if applicable)
      const mobileAppSchema = {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "Just Legal Solutions",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android",
        "description": "Mobile access to process serving and courier services in Tulsa County",
        "url": "https://justlegalsolutions.com",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      };

      // Service Area Schema for mobile local search
      const serviceAreaSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Process Server Tulsa County",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Just Legal Solutions"
        },
        "areaServed": [
          "Tulsa, OK",
          "Broken Arrow, OK",
          "Owasso, OK",
          "Sand Springs, OK",
          "Jenks, OK",
          "Bixby, OK",
          "Sapulpa, OK",
          "Glenpool, OK",
          "Tulsa County, OK"
        ],
        "serviceType": "Process Serving",
        "description": "Professional process serving throughout Tulsa County and surrounding areas"
      };

      // Speed/Performance Schema for mobile
      const speedSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Same Day Process Serving",
        "description": "Emergency same-day process serving available throughout Tulsa County",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Just Legal Solutions"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Response Time",
            "value": "Same Day"
          },
          {
            "@type": "PropertyValue",
            "name": "Service Area",
            "value": "Tulsa County"
          },
          {
            "@type": "PropertyValue",
            "name": "Availability",
            "value": "Emergency Services Available"
          }
        ]
      };

      // Create and append schema scripts
      const schemas = [
        localBusinessSchema,
        mobileAppSchema,
        serviceAreaSchema,
        speedSchema
      ];

      schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        script.setAttribute('data-schema', `mobile-local-${index}`);
        document.head.appendChild(script);
      });
    };

    // Add mobile-specific meta tags for local SEO
    const addMobileLocalMeta = () => {
      const mobileMetaTags = [
        {
          property: 'business:contact_data:street_address',
          content: '123 Main Street'
        },
        {
          property: 'business:contact_data:locality',
          content: 'Tulsa'
        },
        {
          property: 'business:contact_data:region',
          content: 'OK'
        },
        {
          property: 'business:contact_data:postal_code',
          content: '74101'
        },
        {
          property: 'business:contact_data:country_name',
          content: 'United States'
        },
        {
          name: 'geo.region',
          content: 'US-OK'
        },
        {
          name: 'geo.placename',
          content: 'Tulsa'
        },
        {
          name: 'geo.position',
          content: '36.1540;-95.9928'
        },
        {
          name: 'ICBM',
          content: '36.1540, -95.9928'
        }
      ];

      mobileMetaTags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        }
        if (tag.name) {
          meta.setAttribute('name', tag.name);
        }
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      });
    };

    // Mobile-specific local business markup
    const addMobileBusinessMarkup = () => {
      // Add invisible but SEO-visible content for mobile local search
      const mobileLocalContent = document.createElement('div');
      mobileLocalContent.className = 'sr-only';
      mobileLocalContent.innerHTML = `
        <div itemscope itemtype="https://schema.org/LocalBusiness">
          <span itemprop="name">Just Legal Solutions</span>
          <span itemprop="description">Professional process server and courier services in Tulsa County, Oklahoma</span>
          <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <span itemprop="streetAddress">123 Main Street</span>
            <span itemprop="addressLocality">Tulsa</span>
            <span itemprop="addressRegion">OK</span>
            <span itemprop="postalCode">74101</span>
          </div>
          <span itemprop="telephone">918-555-0123</span>
          <span itemprop="email">info@justlegalsolutions.com</span>
          <span itemprop="url">https://justlegalsolutions.com</span>
          <div itemprop="geo" itemscope itemtype="https://schema.org/GeoCoordinates">
            <meta itemprop="latitude" content="36.1540" />
            <meta itemprop="longitude" content="-95.9928" />
          </div>
          <div itemprop="openingHoursSpecification" itemscope itemtype="https://schema.org/OpeningHoursSpecification">
            <meta itemprop="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday" />
            <meta itemprop="opens" content="08:00" />
            <meta itemprop="closes" content="17:00" />
          </div>
        </div>
        
        <div class="mobile-local-keywords">
          <h6>Service Areas in Tulsa County:</h6>
          <p>Process server Tulsa, process serving Broken Arrow, legal document delivery Owasso, court filing Sand Springs, subpoena service Jenks, process server Bixby, legal courier Sapulpa, document service Glenpool, Tulsa County process serving</p>
          
          <h6>Mobile-Friendly Services:</h6>
          <p>Same-day process serving, emergency legal document delivery, mobile process server, on-demand court filing, fast legal courier service, immediate document service</p>
          
          <h6>Professional Legal Services:</h6>
          <p>Certified process server, licensed legal courier, bonded document delivery, insured process serving, professional court filing, reliable legal document service</p>
        </div>
      `;
      
      document.body.appendChild(mobileLocalContent);
    };

    // Initialize mobile local SEO
    addMobileLocalSchema();
    addMobileLocalMeta();
    addMobileBusinessMarkup();

  }, []);

  return null;
};

export default MobileLocalSEO;

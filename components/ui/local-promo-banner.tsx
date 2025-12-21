'use client';

import React from 'react';
import { BadgePercent, MapPin, X, Clock } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

interface LocalPromoBannerProps {
  zips: string[];
  endDate?: string;
}

export default function LocalPromoBanner({ zips, endDate = "January 30, 2026" }: LocalPromoBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  // Calculate days remaining
  const calculateDaysRemaining = () => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysRemaining = calculateDaysRemaining();

  // Auto-hide if banner is closed or promotion has expired
  if (!isVisible || daysRemaining === 0) return null;

  // Schema markup for the offer
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "30% Off Process Serving",
    "description": "Limited time discount on process serving for ZIP codes 74008, 74033, and 74037",
    "price": "42.00",
    "priceCurrency": "USD",
    "priceValidUntil": endDate,
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-12-20",
    "areaServed": {
      "@type": "PostalCodeRangeSpecification",
      "postalCode": zips
    },
    "seller": {
      "@type": "LocalBusiness",
      "name": "Just Legal Solutions",
      "url": "https://justlegalsolutions.org"
    }
  };

  return (
    <>
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-3 md:py-6 px-3 md:px-4 relative shadow-lg">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white/80 hover:text-white transition-colors z-10"
          aria-label="Close promotion"
        >
          <X className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 mb-2">
                <div className="bg-yellow-400 text-blue-900 px-3 py-1 md:px-4 md:py-2 rounded-full font-black text-lg md:text-2xl shadow-lg">
                  30% OFF
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <BadgePercent className="h-4 w-4 md:h-6 md:w-6" />
                  <span className="text-base md:text-xl font-bold">Limited Time Process Serving</span>
                </div>
              </div>
              <p className="text-blue-100 text-xs md:text-base mb-1">
                Service addresses in <strong>ZIP {zips.join(', ')}</strong> qualify for discounted rate
              </p>
              <p className="text-blue-200 text-xs flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span>Standard service just <strong>$42</strong> (regularly $60)</span>
                <span className="inline-flex items-center gap-1 bg-red-600 px-2 py-0.5 md:py-1 rounded-full text-white font-bold text-xs">
                  <Clock className="h-3 w-3" />
                  {daysRemaining} days left!
                </span>
              </p>
            </div>
          
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap text-sm md:text-base text-center"
              >
                Book Service Now
              </Link>
              <Link
                href="/pricing"
                className="bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors whitespace-nowrap border border-blue-500 text-sm md:text-base text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

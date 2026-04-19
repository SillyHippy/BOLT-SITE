'use client';

import React from 'react';
import { BadgePercent, MapPin, X, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

interface LocalPromoBannerProps {
  zips: string[];
  endDate?: string;
}

export default function LocalPromoBanner({ zips, endDate = "April 30, 2026" }: LocalPromoBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isExpanded, setIsExpanded] = React.useState(false);

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
    "name": "25% Off Process Serving",
    "description": `Limited time discount on process serving for ZIP codes ${zips.join(", ")}`,
    "price": "70.00",
    "priceCurrency": "USD",
    "priceValidUntil": endDate,
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-04-07",
    "areaServed": zips.map(zip => ({
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "postalCode": zip,
        "addressRegion": "OK",
        "addressCountry": "US"
      }
    })),
    "seller": {
      "@type": "LocalBusiness",
      "name": "Just Legal Solutions",
      "url": "https://justlegalsolutions.org",
      "telephone": "+15393676832",
      "image": "https://justlegalsolutions.org/images/jls-logo.webp",
      "priceRange": "$70-$200",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "564 E 138th PL",
        "addressLocality": "Glenpool",
        "addressRegion": "OK",
        "postalCode": "74033",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <div className="sticky top-0 z-50 border-b border-blue-400/30 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-3 py-2 shadow-xl backdrop-blur-md md:px-4 md:py-3">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-2 z-10 rounded-full bg-white/10 p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white md:right-3 md:top-3"
          aria-label="Close promotion"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-4">
            <div className="min-w-0 flex-1 text-center md:text-left">
              <div className="mb-2 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <div className="rounded-full bg-yellow-300 px-3 py-1 text-sm font-black tracking-wide text-slate-900 shadow-lg md:text-base">
                  25% OFF
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 ring-1 ring-white/20 md:text-sm">
                  <BadgePercent className="h-3.5 w-3.5" />
                  Limited Time Process Serving
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-red-500/90 px-3 py-1 text-xs font-bold text-white shadow md:text-sm">
                  <Clock className="h-3.5 w-3.5" />
                  {daysRemaining} days left
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="mx-auto mb-1 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 ring-1 ring-white/20 transition-colors hover:bg-white/20 md:hidden"
                aria-expanded={isExpanded}
                aria-label="Toggle promotion details"
              >
                {isExpanded ? 'Hide details' : 'Show details'}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100 ${isExpanded ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
                <p className="mb-1 text-xs text-blue-100 md:text-sm">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    ZIPs
                  </span>{' '}
                  <strong className="text-white">{zips.join(', ')}</strong> qualify for discounted service rates.
                </p>

                <p className="text-xs text-blue-200 md:text-sm">
                  Standard: <strong className="text-white">$52.50</strong>{' '}
                  <span className="text-blue-300">•</span> Rush:{' '}
                  <strong className="text-white">$87.75</strong>{' '}
                  <span className="text-blue-300">•</span> Same-Day:{' '}
                  <strong className="text-white">$131.25</strong>
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
              <Link
                href="/contact"
                className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-blue-800 shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg md:px-5 md:py-2.5"
              >
                Book Service Now
              </Link>
              <Link
                href="/pricing"
                className={`whitespace-nowrap rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/20 md:px-5 md:py-2.5 ${isExpanded ? 'block' : 'hidden md:block'}`}
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

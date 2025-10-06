'use client';

import React from 'react';
import { BadgePercent, MapPin, X } from 'lucide-react';
import Link from 'next/link';

interface LocalPromoBannerProps {
  zips: string[];
  endDate?: string;
}

export default function LocalPromoBanner({ zips, endDate = "October 20, 2025" }: LocalPromoBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-4 relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        aria-label="Close promotion"
      >
        <X className="h-5 w-5" />
      </button>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <BadgePercent className="h-6 w-6" />
              <span className="text-xl font-bold">Limited Time: 30% Off Process Serving</span>
            </div>
            <p className="text-blue-100 text-sm md:text-base">
              Service addresses in <strong>ZIP {zips.join(', ')}</strong> qualify for discounted rate
            </p>
            <p className="text-blue-200 text-xs mt-1">
              Standard service just <strong>$42</strong> (regularly $60) • Offer ends {endDate}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Book Service Now
            </Link>
            <Link
              href="/pricing"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors whitespace-nowrap border border-blue-500"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

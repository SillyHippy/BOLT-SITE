'use client';

import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Prefetch critical resources on idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Prefetch secondary images
        const imagesToPrefetch = [
          '/images/secure-delivery.webp',
          '/images/court-transfer.webp',
          '/images/skip-trace.webp',
          '/images/same-day.webp'
        ];
        
        imagesToPrefetch.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = src;
          link.as = 'image';
          document.head.appendChild(link);
        });
      });
    }

    // Enable smooth scrolling performance
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null; // This component doesn't render anything
};

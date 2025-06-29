'use client';

import React from 'react';
import { useEffect } from 'react';

const AdvancedMobileOptimizer: React.FC = () => {
  useEffect(() => {
    // 1. Critical Resource Hints for Mobile
    const addResourceHints = () => {
      // Preconnect to critical domains
      const preconnects = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];
      
      preconnects.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Prefetch likely next pages
      const prefetchUrls = [
        '/services',
        '/pricing',
        '/process-server-tulsa',
        '/courier-services-tulsa'
      ];
      
      prefetchUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // 2. Mobile-First Image Loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // 3. Service Worker for Mobile Caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && 'caches' in window) {
        navigator.serviceWorker.register('/sw-mobile.js')
          .then(registration => {
            console.log('Mobile SW registered:', registration);
          })
          .catch(error => {
            console.log('Mobile SW registration failed:', error);
          });
      }
    };

    // 4. Mobile Performance Monitoring
    const monitorMobilePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Monitor Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            const fidEntry = entry as any;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          });
        }).observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift
        new PerformanceObserver((list) => {
          let cumulativeScore = 0;
          const entries = list.getEntries();
          entries.forEach(entry => {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              cumulativeScore += clsEntry.value;
            }
          });
          console.log('CLS:', cumulativeScore);
        }).observe({ entryTypes: ['layout-shift'] });
      }
    };

    // 5. Mobile-Specific Optimizations
    const mobileOptimizations = () => {
      // Reduce animations on low-end devices
      const nav = navigator as any;
      if (nav.deviceMemory && nav.deviceMemory < 4) {
        document.body.classList.add('reduce-motion');
      }

      // Optimize for connection type
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection && connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          document.body.classList.add('slow-connection');
        }
      }

      // Battery-aware optimizations
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          if (battery.level < 0.2 || battery.charging === false) {
            document.body.classList.add('low-battery');
          }
        });
      }
    };

    // 6. Mobile Touch Optimizations
    const touchOptimizations = () => {
      // Add touch-friendly classes
      const touchElements = document.querySelectorAll('button, a, [role="button"]');
      touchElements.forEach(element => {
        element.classList.add('touch-target');
      });

      // Optimize scroll performance
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
    };

    // Initialize all optimizations
    addResourceHints();
    optimizeImageLoading();
    registerServiceWorker();
    monitorMobilePerformance();
    mobileOptimizations();
    touchOptimizations();

    // Cleanup
    return () => {
      // Remove event listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AdvancedMobileOptimizer;

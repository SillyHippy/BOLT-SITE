'use client';

import { useEffect } from 'react';

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Enhanced Core Web Vitals optimization
    const optimizeCoreWebVitals = () => {
      // 1. Optimize Largest Contentful Paint (LCP)
      const optimizeLCP = () => {
        // Preload critical hero image
        const heroImage = document.querySelector('img[alt*="Process Server"], img[alt*="Legal Services"]') as HTMLImageElement;
        if (heroImage && heroImage.src) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = heroImage.src;
          document.head.appendChild(link);
        }

        // Optimize font loading for mobile
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.href = '/fonts/inter-var.woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      };

      // 2. Minimize First Input Delay (FID)
      const optimizeFID = () => {
        // Break up long tasks
        const deferNonCriticalJS = () => {
          setTimeout(() => {
            // Load non-critical scripts after main thread is free
            const scripts = [
              'analytics',
              'chat-widget',
              'social-media-widgets'
            ];
            
            scripts.forEach(script => {
              // Only load if the script exists
              const element = document.querySelector(`[data-script="${script}"]`);
              if (element) {
                element.setAttribute('loading', 'lazy');
              }
            });
          }, 100);
        };

        deferNonCriticalJS();
      };

      // 3. Reduce Cumulative Layout Shift (CLS)
      const reduceCLS = () => {
        // Set explicit dimensions for images
        const images = document.querySelectorAll('img:not([width]):not([height])');
        images.forEach((element) => {
          const img = element as HTMLImageElement;
          if (!img.style.aspectRatio && !img.getAttribute('width')) {
            img.style.aspectRatio = '16 / 9'; // Default aspect ratio
          }
        });

        // Reserve space for dynamic content
        const dynamicElements = document.querySelectorAll('[data-dynamic]');
        dynamicElements.forEach(element => {
          (element as HTMLElement).style.minHeight = '100px';
        });
      };

      // 4. Mobile-specific performance boosts
      const mobilePerformanceBoosts = () => {
        // Reduce main thread work on mobile
        if (window.innerWidth <= 768) {
          // Disable complex animations on mobile
          const style = document.createElement('style');
          style.innerHTML = `
            @media (max-width: 768px) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
              .reduce-motion * {
                animation: none !important;
                transition: none !important;
              }
            }
          `;
          document.head.appendChild(style);
        }

        // Optimize touch targets for mobile
        const touchTargets = document.querySelectorAll('button, a, input, [role="button"]');
        touchTargets.forEach(target => {
          const element = target as HTMLElement;
          const rect = element.getBoundingClientRect();
          if (rect.width < 44 || rect.height < 44) {
            element.style.minHeight = '44px';
            element.style.minWidth = '44px';
            element.style.padding = '8px';
          }
        });
      };

      // 5. Critical rendering path optimization
      const optimizeCriticalPath = () => {
        // Inline critical CSS for above-the-fold content
        const criticalCSS = `
          .hero-section { display: block; }
          .nav-mobile { position: fixed; top: 0; z-index: 50; }
          .mobile-menu-button { touch-action: manipulation; }
          .service-card { contain: layout style; }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = criticalCSS;
        style.setAttribute('data-critical', 'true');
        document.head.insertBefore(style, document.head.firstChild);
      };

      // Execute all optimizations
      optimizeLCP();
      optimizeFID();
      reduceCLS();
      mobilePerformanceBoosts();
      optimizeCriticalPath();
    };

    // 6. Real User Monitoring for mobile
    const setupRUM = () => {
      if ('PerformanceObserver' in window) {
        // Track mobile-specific metrics
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach(entry => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              const metrics = {
                dns: navEntry.domainLookupEnd - navEntry.domainLookupStart,
                tcp: navEntry.connectEnd - navEntry.connectStart,
                ttfb: navEntry.responseStart - navEntry.requestStart,
                domLoad: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
                isMobile: window.innerWidth <= 768
              };
              
              // Send to analytics (replace with your analytics service)
              console.log('Mobile Performance Metrics:', metrics);
            }
          });
        });
        
        observer.observe({ entryTypes: ['navigation', 'measure'] });
      }
    };

    // Initialize after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeCoreWebVitals);
    } else {
      optimizeCoreWebVitals();
    }

    setupRUM();

    // Cleanup
    return () => {
      // Remove observers if needed
    };
  }, []);

  return null;
};

export default CoreWebVitals;

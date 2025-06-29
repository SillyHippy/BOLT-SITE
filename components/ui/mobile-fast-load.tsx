'use client';

import { useEffect } from 'react';

const MobileFastLoad: React.FC = () => {
  useEffect(() => {
    // Aggressive mobile performance optimizations
    const optimizeForMobile = () => {
      // 1. Preload critical mobile resources
      const preloadCriticalResources = () => {
        const criticalResources = [
          { href: '/images/hero.webp', as: 'image', type: 'image/webp' },
          { href: '/images/jls-logo.webp', as: 'image', type: 'image/webp' },
          { href: '/manifest.json', as: 'manifest' }
        ];

        criticalResources.forEach(resource => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.href;
          link.as = resource.as;
          if (resource.type) {
            link.type = resource.type;
          }
          document.head.appendChild(link);
        });
      };

      // 2. Optimize images for mobile data usage
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          // Add loading strategies based on viewport
          if (window.innerWidth <= 768) {
            // Mobile-specific optimizations
            img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async');
            
            // Reduce quality for mobile data savings
            if (img.src.includes('.webp') || img.src.includes('.jpg')) {
              const url = new URL(img.src, window.location.origin);
              url.searchParams.set('quality', '75');
              img.src = url.toString();
            }
          }
        });
      };

      // 3. Mobile-specific resource prioritization
      const prioritizeResources = () => {
        // Defer non-critical scripts on mobile
        const nonCriticalScripts = document.querySelectorAll('script[src*="analytics"], script[src*="facebook"]');
        nonCriticalScripts.forEach(script => {
          script.setAttribute('defer', 'true');
        });

        // Prioritize critical CSS
        const criticalCSS = document.querySelector('style[data-critical]');
        if (criticalCSS) {
          document.head.insertBefore(criticalCSS, document.head.firstChild);
        }
      };

      // 4. Mobile connection optimization
      const optimizeForConnection = () => {
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          
          if (connection) {
            // Adapt based on connection type
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
              // Ultra-conservative loading for slow connections
              document.body.classList.add('slow-connection');
              
              // Disable background images on slow connections
              const style = document.createElement('style');
              style.innerHTML = `
                .slow-connection .hero-section::before,
                .slow-connection [style*="background-image"] {
                  background-image: none !important;
                }
              `;
              document.head.appendChild(style);
            }
            
            if (connection.saveData) {
              // Data saver mode optimizations
              document.body.classList.add('data-saver');
              
              const dataSaverStyle = document.createElement('style');
              dataSaverStyle.innerHTML = `
                .data-saver img {
                  filter: grayscale(0.5);
                }
                .data-saver video,
                .data-saver iframe {
                  display: none;
                }
              `;
              document.head.appendChild(dataSaverStyle);
            }
          }
        }
      };

      // 5. Mobile-specific caching strategy
      const setupMobileCaching = () => {
        if ('serviceWorker' in navigator && 'caches' in window) {
          // Aggressive caching for mobile
          caches.open('mobile-critical-v1').then(cache => {
            const criticalResources = [
              '/',
              '/services',
              '/pricing',
              '/images/hero.webp',
              '/images/jls-logo.webp'
            ];
            
            cache.addAll(criticalResources).catch(err => {
              console.log('Mobile cache error:', err);
            });
          });
        }
      };

      // 6. Mobile performance monitoring
      const monitorMobilePerformance = () => {
        if ('PerformanceObserver' in window) {
          // Monitor mobile-specific metrics
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach(entry => {
              if (entry.entryType === 'largest-contentful-paint') {
                const lcp = entry.startTime;
                
                // Log performance issues on mobile
                if (lcp > 2500 && window.innerWidth <= 768) {
                  console.warn('Mobile LCP is slow:', lcp + 'ms');
                  
                  // Automatically optimize if LCP is too slow
                  if (lcp > 4000) {
                    document.body.classList.add('performance-mode');
                    
                    const perfStyle = document.createElement('style');
                    perfStyle.innerHTML = `
                      .performance-mode * {
                        animation: none !important;
                        transition: none !important;
                      }
                      .performance-mode img {
                        filter: none !important;
                        transform: none !important;
                      }
                    `;
                    document.head.appendChild(perfStyle);
                  }
                }
              }
            });
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
      };

      // Execute all optimizations
      preloadCriticalResources();
      optimizeImages();
      prioritizeResources();
      optimizeForConnection();
      setupMobileCaching();
      monitorMobilePerformance();
    };

    // Only run on mobile devices
    if (window.innerWidth <= 768) {
      optimizeForMobile();
    }

    // Re-optimize on orientation change
    const handleOrientationChange = () => {
      if (window.innerWidth <= 768) {
        setTimeout(optimizeForMobile, 100);
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return null;
};

export default MobileFastLoad;

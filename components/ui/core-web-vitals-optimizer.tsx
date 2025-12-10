'use client';

import { useEffect } from 'react';

export const CoreWebVitalsOptimizer = () => {
  useEffect(() => {
    // 1. Optimize Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Preload critical images
      const criticalImages = [
        '/images/logo-main.webp',
        '/images/hero-bg.webp',
        '/images/process-server-hero.webp'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        (link as any).fetchPriority = 'high';
        document.head.appendChild(link);
      });
      
      // Optimize image loading
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (index < 3) {
          // First 3 images are critical
          img.setAttribute('fetchpriority', 'high');
          img.setAttribute('loading', 'eager');
        } else {
          img.setAttribute('loading', 'lazy');
          img.setAttribute('fetchpriority', 'low');
        }
      });
    };

    // 2. Optimize Time to Interactive (TTI)
    const optimizeTTI = () => {
      // Defer non-critical JavaScript
      const deferNonCriticalJS = () => {
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
          const src = script.getAttribute('src');
          if (src && !src.includes('gtag') && !src.includes('analytics')) {
            script.setAttribute('defer', 'true');
          }
        });
      };
      
      // Use requestIdleCallback for non-critical tasks
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(deferNonCriticalJS);
      } else {
        setTimeout(deferNonCriticalJS, 1000);
      }
    };

    // 3. Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add size attributes to images without them
      const images = document.querySelectorAll('img:not([width]):not([height])') as NodeListOf<HTMLImageElement>;
      images.forEach(img => {
        // Add placeholder dimensions to prevent layout shift
        img.style.aspectRatio = '16/9';
        img.style.width = '100%';
        img.style.height = 'auto';
      });
      
      // Optimize font loading to prevent FOIT/FOUT
      if ('fonts' in document) {
        const fontPreloads = [
          '/fonts/inter-400.woff2',
          '/fonts/inter-700.woff2'
        ];
        
        fontPreloads.forEach(fontUrl => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = fontUrl;
          link.as = 'font';
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        });
      }
    };

    // 4. Resource Optimization
    const optimizeResources = () => {
      // Remove unused CSS (critical CSS is already inlined)
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]') as NodeListOf<HTMLLinkElement>;
      stylesheets.forEach(stylesheet => {
        if (stylesheet.href && !stylesheet.href.includes('fonts.googleapis.com')) {
          stylesheet.media = 'print';
          stylesheet.onload = function() {
            (this as HTMLLinkElement).media = 'all';
          };
        }
      });
      
      // Optimize third-party scripts
      const thirdPartyScripts = document.querySelectorAll('script[src*="googletagmanager"], script[src*="simpleanalyticscdn"]');
      thirdPartyScripts.forEach(script => {
        script.setAttribute('async', 'true');
      });
    };

    // 5. Connection Optimization
    const optimizeConnections = () => {
      const connections = [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossOrigin: 'anonymous' },
        { href: 'https://www.googletagmanager.com', rel: 'dns-prefetch' },
        { href: 'https://scripts.simpleanalyticscdn.com', rel: 'dns-prefetch' }
      ];
      
      connections.forEach(conn => {
        const existing = document.querySelector(`link[href="${conn.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = conn.rel;
          link.href = conn.href;
          if (conn.crossOrigin) link.crossOrigin = conn.crossOrigin;
          document.head.appendChild(link);
        }
      });
    };

    // Execute optimizations
    optimizeLCP();
    optimizeTTI();
    optimizeCLS();
    optimizeResources();
    optimizeConnections();

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      const reportWebVitals = (metric: any) => {
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          });
        }
      };

      // Basic Core Web Vitals monitoring without external dependencies
      const observeWebVitals = () => {
        // Monitor LCP
        if ('PerformanceObserver' in window) {
          try {
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              reportWebVitals({
                name: 'LCP',
                value: lastEntry.startTime,
                id: `v3-${Date.now()}-${Math.floor(Math.random() * 9999999999999)}`
              });
            });
            lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
          } catch (e) {
            console.log('LCP monitoring not available');
          }
        }
      };

      observeWebVitals();
    }

  }, []);

  return null;
};

// TypeScript declarations for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default CoreWebVitalsOptimizer;

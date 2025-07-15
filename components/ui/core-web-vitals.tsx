import { useEffect } from 'react';

export default function CoreWebVitals() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero.webp',
        '/images/jls-logo.webp',
        '/contactlogo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll('link[rel="stylesheet"]');
      fontLinks.forEach(link => {
        if (link.getAttribute('href')?.includes('fonts.googleapis.com')) {
          link.setAttribute('rel', 'preload');
          link.setAttribute('as', 'style');
          link.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
        }
      });
    };

    // Reduce layout shift
    const stabilizeLayout = () => {
      // Add explicit dimensions to prevent CLS
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        if (img instanceof HTMLImageElement && img.naturalWidth && img.naturalHeight) {
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
        }
      });
    };

    preloadCriticalResources();
    optimizeFonts();
    
    // Run layout stabilization after images load
    setTimeout(stabilizeLayout, 100);

    // Optimize third-party scripts
    const optimizeThirdParty = () => {
      // Delay non-critical third-party scripts
      setTimeout(() => {
        // Load analytics or other non-critical scripts here
      }, 3000);
    };

    optimizeThirdParty();
  }, []);

  return null; // This component only runs effects
}
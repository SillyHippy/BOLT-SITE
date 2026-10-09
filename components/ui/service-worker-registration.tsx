'use client';

import { useEffect } from 'react';

export const ServiceWorkerRegistration = () => {
  useEffect(() => {
    // Register service worker for offline functionality and caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const registerWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js?v=20261009-tools');
          
          // Registration can succeed before installation; the worker only controls
          // pages once all precached URLs have loaded successfully.

          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, prompt user to refresh
                  if (confirm('New content is available. Would you like to refresh?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Listen for service worker messages
          navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'CACHE_UPDATED') {
              console.log('Cache updated:', event.data.url);
            }
          });

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };
      if (document.readyState === 'complete') { void registerWorker(); }
      else { window.addEventListener('load', registerWorker, { once: true }); }

      // Handle service worker controller change
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }

    // Preload critical resources using service worker
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'PRELOAD_CRITICAL_RESOURCES'
      });
    }

  }, []);

  return null;
};

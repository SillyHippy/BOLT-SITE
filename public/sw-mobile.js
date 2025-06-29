// Mobile-optimized Service Worker for Just Legal Solutions
const CACHE_NAME = 'jls-mobile-v1';
const CACHE_PRIORITY = {
  CRITICAL: 'critical',
  IMPORTANT: 'important',
  OPTIONAL: 'optional'
};

// Critical resources for mobile performance
const CRITICAL_RESOURCES = [
  '/',
  '/services',
  '/pricing',
  '/images/hero.webp',
  '/images/jls-logo.webp'
];

// Important resources for quick navigation
const IMPORTANT_RESOURCES = [
  '/process-server-tulsa',
  '/courier-services-tulsa',
  '/images/secure-delivery.webp',
  '/images/court-transfer.webp',
  '/images/skip-trace.webp',
  '/images/same-day.webp'
];

// Network-first strategy for mobile
const networkFirst = async (request) => {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('Offline content not available', { status: 503 });
  }
};

// Cache-first strategy for images
const cacheFirst = async (request) => {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response('Image not available offline', { status: 503 });
  }
};

// Install event - preload critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Preload critical resources first
      return cache.addAll(CRITICAL_RESOURCES);
    }).then(() => {
      // Then preload important resources
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(IMPORTANT_RESOURCES);
      });
    }).then(() => {
      self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different resource types
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request));
  } else if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
  } else if (url.pathname.endsWith('.css') || url.pathname.endsWith('.js')) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

// Background sync for mobile offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForms());
  }
});

// Function to sync contact forms when back online
async function syncContactForms() {
  try {
    // Get pending contact forms from IndexedDB
    const db = await openDB();
    const pendingForms = await getAllPendingForms(db);
    
    for (const form of pendingForms) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form.data)
        });
        // Remove from pending after successful send
        await removePendingForm(db, form.id);
      } catch (error) {
        console.log('Failed to sync form:', error);
      }
    }
  } catch (error) {
    console.log('Sync failed:', error);
  }
}

// Simple IndexedDB helpers
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('JLSOffline', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('pendingForms')) {
        db.createObjectStore('pendingForms', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

function getAllPendingForms(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pendingForms'], 'readonly');
    const store = transaction.objectStore('pendingForms');
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function removePendingForm(db, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pendingForms'], 'readwrite');
    const store = transaction.objectStore('pendingForms');
    const request = store.delete(id);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

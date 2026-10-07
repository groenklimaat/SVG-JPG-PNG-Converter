/* =========================================================
   Service Worker — PNG Converter
   Repo: SVG-JPG-PNG-Converter
   Convert logos (PNG, JPG, SVG) to multiple PNG sizes.
   Works fully offline. Multi-language (11 languages).
   ========================================================= */

const CACHE_NAME = 'svg-jpg-png-converter-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './privacy.html',
  './manifest.json',
  './icon.svg',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];

/* ---------------------------------------------------------
   1. INSTALL — core assets cachen
   --------------------------------------------------------- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.all(
          CORE_ASSETS.map(url =>
            cache.add(url).catch(err =>
              console.warn('[SW] Cache miss:', url, err)
            )
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

/* ---------------------------------------------------------
   2. ACTIVATE — oude caches opruimen
   --------------------------------------------------------- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

/* ---------------------------------------------------------
   3. FETCH — cache-first voor eigen assets,
      network-first voor navigatie
   --------------------------------------------------------- */
self.addEventListener('fetch', event => {
  const req = event.request;

  // Alleen GET-requests cachen
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  /* --- Navigatie-requests (HTML-pagina's) --- */
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match('./offline.html'))
    );
    return;
  }

  /* --- Eigen assets (zelfde origin) → cache-first --- */
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
          return res;
        });
      })
    );
    return;
  }

  /* --- Externe assets (JSZip CDN) → cache-first met netwerk-fallback --- */
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => cached);
    })
  );
});

/* ---------------------------------------------------------
   4. MESSAGE — pagina kan update forceren
   --------------------------------------------------------- */
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
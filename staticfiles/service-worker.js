const CACHE_NAME = 'senai-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/static/css/style.css',
  // Adicione outras rotas e arquivos estáticos importantes
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

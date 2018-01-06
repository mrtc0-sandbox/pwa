const CACHE_NAME = 'localhost-cache-v1'
const urlsToCache = [
  '/pwa/sw/example/index.html',
  '/pwa/sw/example/about.html',
  '/pwa/sw/example/styles/main.css',
  '/pwa/sw/example/images/red.jpg',
  '/pwa/sw/example/images/blue.jpg',
  '/pwa/sw/example/images/green.jpg',
  '/pwa/sw/example/images/yellow.jpg',
  '/pwa/sw/example/images/black.jpg',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(urlsToCache) })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
		caches.match(event.request).then(function(response) {
      console.log(response);
			if (response) { return response; }
    	return fetch(event.request);
  	})
	);
});

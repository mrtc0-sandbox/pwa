const CACHE_NAME = 'localhost-cache-v2'
const urlsToCache = [
  '/pwa/sw/example-not-cached/index.html',
  '/pwa/sw/example-not-cached/styles/main.css',
  '/pwa/sw/example-not-cached/images/red.jpg',
  '/pwa/sw/example-not-cached/images/blue.jpg',
  '/pwa/sw/example-not-cached/images/green.jpg',
  '/pwa/sw/example-not-cached/images/yellow.jpg',
  '/pwa/sw/example-not-cached/images/black.jpg',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(urlsToCache) })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) { return response; }
      console.log(event.request)
    	return fetch(event.request);
  	})
	);
});

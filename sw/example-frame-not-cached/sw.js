const CACHE_NAME = 'localhost-cache-v2'
const urlsToCache = [
  '/index.html',
  '/styles/main.css',
  '/images/red.jpg',
  '/images/blue.jpg',
  '/images/green.jpg',
  '/images/yellow.jpg',
  '/images/black.jpg',
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

const CACHE_NAME = 'localhost-cache-v1'
const urlsToCache = [
  '/index.html',
  '/about.html',
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
      console.log(response);
			if (response) { return response; }
    	return fetch(event.request);
  	})
	);
});

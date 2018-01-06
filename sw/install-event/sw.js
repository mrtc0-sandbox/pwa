self.addEventListener('install', event => {
  console.log('install event');

  event.waitUntil(
    caches.open('static-v1').then(cache => cache.add('/images/blue.jpg'))
  );
});

self.addEventListener('activate', event => {
  console.log('activate event');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.origin == location.origin && url.pathname == '/images/red.jpg') {
    event.respondWith(caches.match('/images/blue.jpg'));
  }
});

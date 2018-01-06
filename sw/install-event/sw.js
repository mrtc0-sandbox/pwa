self.addEventListener('install', event => {
  console.log('install event');

  event.waitUntil(
    caches.open('static-v1').then(cache => cache.add('/pwa/sw/install-event/images/blue.jpg'))
  );
});

self.addEventListener('activate', event => {
  console.log('activate event');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.origin == location.origin && url.pathname == '/pwa/sw/install-event/images/red.jpg') {
    event.respondWith(caches.match('/pwa/sw/install-event/images/blue.jpg'));
  }
});

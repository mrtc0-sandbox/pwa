self.addEventListener('install', event => {
  console.log('install event');

  event.waitUntil(
    caches.open('static-v2').then(cache => cache.add('/images/green.jpg'))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('V2 now ready to handle fetches!');
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.origin == location.origin && url.pathname == '/images/red.jpg') {
    event.respondWith(caches.match('/images/green.jpg'));
  }
});

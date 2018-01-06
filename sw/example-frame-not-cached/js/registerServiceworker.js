navigator.serviceWorker.register('/pwa/sw/example-frame-not-cached/sw.js')
    .then(reg => console.log('SW registered!', reg))
    .catch(err => console.log('Failed to regist', err));

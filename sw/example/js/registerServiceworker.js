navigator.serviceWorker.register('/pwa/sw/example/sw.js')
    .then(reg => console.log('SW registered!', reg))
    .catch(err => console.log('Failed to regist', err));

self.addEventListener('insatall', (event) => {
    // event.waitUntil(
    //     caches.open('v4').then((cache) => {
    //         return cache.addAll([
    //             './',
    //             './app.js',
    //             './icon-192x192.png',
    //             './icon-256x256.png',
    //             './icon-384x384.png',
    //             './icon-512x512.png',
    //         ]);
    //     })
    // );
});

self.addEventListener('activate', async (event) => {
    // var cacheKeeplist = ['v4'];

    // event.waitUntil(
    //     caches.keys().then((keyList) => {
    //         return Promise.all(keyList.map((key) => {
    //             if (cacheKeeplist.indexOf(key) === -1) {
    //                 return caches.delete(key);
    //             }
    //         }));
    //     })
    // );
});
self.addEventListener('fetch', (event) => {
    // event.respondWith(
    //     caches.match(event.request).then((resp) => {
    //         return resp || fetch(event.request).then((response) => {
    //             let responseClone = response.clone();
    //             caches.open('v4').then((cache) => {
    //                 cache.put(event.request, responseClone);
    //             });

    //             return response;
    //         });
    //     }).catch(() => {
    //         return caches.match('./icon-512x512.png');
    //     })
    // );
});
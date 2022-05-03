const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "styles/style.css",
    "./app.js"
];

const CACHE_NAME = "v2_cache_contadorReact";

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache
            .addAll(CACHE_ELEMENTS)
            .then(() => {
                self.skipWaiting ();
            })
            .catch(console.log);
        })
    );
});

self.addEventListener("activate", (e) => {
    const cacheWhiteList = [CACHE_NAME];


    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(cacheNames.map(cacheName => {
                cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName);
            }))
        })
    );
});
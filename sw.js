const CACHE_NAME = 'pauljoy-cache-v1';

// 將你需要離線讀取的圖片和資源放進這裡
const urlsToCache = [
  './index.html',
  './manifest.json',
  './indexnew.jpeg',
  './day1new.jpg',
  './day2.webp',
  './day3.webp',
  './day4new.jpg',
  './day5.jpg',
  './day6new.jpg',
  './day7new.jpg',
  './day8new.jpg',
  './day9new.jpg',
  './day10new.jpg',
  './day11new.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Serif+TC:wght@400;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 當沒網路時，直接從快取抓資料
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; 
        }
        return fetch(event.request);
      })
  );
});

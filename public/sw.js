self.addEventListener('install', e => {
  console.log('sw install');
  //e.waitUntil(self.skipWaiting())
});

self.addEventListener('activate', event => {
  console.log('sw activate');
});

self.addEventListener('fetch', event => {
  console.log('sw fetch');
});

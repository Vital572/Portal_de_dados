self.addEventListener('install', function (event) {
    console.log('Service Worker instalado');
    self.skipWaiting();
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker ativado');
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://seudominio.com/novidade")
    );
});

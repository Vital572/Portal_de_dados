self.addEventListener('install', function (event) {
    console.log('Service Worker instalado');
    self.skipWaiting(); // ativa imediatamente
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker ativado');
});

// Para mostrar notificação se o navegador quiser
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://seudominio.com/novidade") // ou a página de novidades
    );
});

// Mostrar notificação simples na página
window.onload = function () {
    setTimeout(() => {
        document.getElementById("notificacao").style.display = "block";
    }, 1500);
};

// Registrar Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function (reg) {
        console.log('Service Worker registrado com sucesso:', reg.scope);

        // Pedir permissão para notificações
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    reg.showNotification("🚀 Nova funcionalidade adicionada ao site!", {
                        body: "Clique aqui para saber mais.",
                        icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
                        tag: "nova-ferramenta"
                    });
                }
            });
        }
    }).catch(function (err) {
        console.error('Erro ao registrar o Service Worker:', err);
    });
}

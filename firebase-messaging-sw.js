// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "102524887029",
  authDomain: "https://portal-de-dados.vercel.app.firebaseapp.com",
  projectId: "Portal de Dados de Angola",
  messagingSenderId: "BMYKIODIlW81cUFGC0YFMjyngdLEzqU3-73SYBKbqP7ymtdJVa2JPHkJVnBUFF98KRtlUgRluFV8TX0kEgcAuEs",
  appId: "SEU_APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});

// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAfexQ--FwF8NsLc_lSI4m1kDGjWbd6rfc",
  authDomain: "portal-de-dados-de-angola.firebaseapp.com",
  projectId: "portal-de-dados-de-angola",
  messagingSenderId: "102524887029",
  appId: "1:102524887029:web:a4e2597f437ba01c700abc"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});

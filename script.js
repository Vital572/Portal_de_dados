const CLIENT_ID = 'SUA_CLIENT_ID_AQUI';
const SCOPES = 'https://www.googleapis.com/auth/gmail.send';

function handleAuthClick() {
  gapi.load('client:auth2', () => {
    gapi.auth2.init({ client_id: CLIENT_ID }).then(() => {
      gapi.auth2.getAuthInstance().signIn().then(() => {
        gapi.client.load('gmail', 'v1');
        alert('Autenticado com sucesso!');
      });
    });
  });
}

function sendEmail(event) {
  event.preventDefault();

  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const email = `
To: ${to}
Subject: ${subject}

${message}
  `.trim();

  const base64EncodedEmail = btoa(email).replace(/\+/g, '-').replace(/\//g, '_');

  gapi.client.gmail.users.messages.send({
    userId: 'me',
    resource: { raw: base64EncodedEmail }
  }).then(() => {
    alert('Email enviado com sucesso!');
  }, error => {
    console.error(error);
    alert('Erro ao enviar o email.');
  });
}

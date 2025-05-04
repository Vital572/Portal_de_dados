<?php


require_once('PHPMailer/src/PHPMailer.php');
require_once('PHPMailer/src/SMTP.php');
require_once('PHPMailer/src/Exception.php');

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);

try {
	$mail-> SMTPDebug = SMTP::DEBUG_SERVER; 
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail-> SMTPAuth = true;
	$mail->Username = 'vitalsalaquiacomanuel@gmail.com';
	$mail->Password = '@re4@god@of@war@';
	$mail->Port = 587;

	$mail->setFrom('vitalsalaquiacomanuel@gmail.com');
	$mail->addAddress('vitalsalaquiacomanuel@gmail.com');

	$mail->isHTML(true);
	$mail->Subject = 'Teste de email via gmail portal de dados';
	$mail->Body = 'Chegou o email de teste do <strong> Portal de dados</strong>';
	$mail->AltBody='Chegou o email de teste do Portal de dados';

	if($mail->send()){
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email não enciado';
	}
}

catch(Exception $e){
	echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
}



?>
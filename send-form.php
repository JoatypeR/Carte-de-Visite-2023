<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'info@joachimwery.tech';
$subject = 'Nouveau message depuis le formulaire de contact';
$body = "Nom : $name\n\nE-mail : $email\n\nMessage :\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
  http_response_code(200);
  echo "Le message a été envoyé avec succès.";
} else {
  http_response_code(500);
  echo "Une erreur est survenue lors de l'envoi du message.";
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $to = "lkulandaiyesu@gmail.com";
    $headers = "From: $email\r\n";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "<div class='alert alert-success'>Thank you for your message.</div>";
    } else {
        echo "<div class='alert alert-danger'>Failed to send message. Please try again later.</div>";
    }
}
?>
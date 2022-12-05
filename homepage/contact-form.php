<?php
    $name = $_Post["name"];
    $visitor_email = $_Post["email"];
    $message = $_POST["description"];

    $email_from = "rijad.smajlovic99@hotmail";

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                                  "User Email: $visitor_email.\n".
                                  "User Message: $message.\n";

    $to = "rijad.smajlovic99@hotmail.com"

    $headers = "From: $email_from \r\n";

    $headers .=  "Reply-To:  $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: homepage.html")
?>
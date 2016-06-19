<?php
if(isset($_POST['submit'])){
    $to = "alex@alexwiley.co.uk"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $subject = "Form submission"; //I recieve.
    $subject2 = "Copy of your form submission"; //Sender recieves.
    $message2 = "Your email has been recieved. I shall get back in contact shortly. If you wish to contact me directly, feel free to contact me at alex@alexwiley.co.uk"; //Sender recieves.
    $headers = "New Form Submission From: " . $from; //I recieve.
    mail($to,$subject,$headers);
    mail($from,$subject2,$message2); // sends a copy of the message to the sender
    header('Location: form_received.html');
    }
?>

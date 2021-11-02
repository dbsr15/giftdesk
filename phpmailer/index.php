<?php 
  require './PHPMailerAutoload.php';
  $mail= new PHPMailer;
  $mail->isSMTP();
  $mail->Host='smtp.gmail.com';
  $mail->Port=587;
  $mail->SMTPAuth=true;
  $mail->SMTPSecure='tls';

  $fname=$_POST["first_name"];
  $lname=$_POST["last_name"];
  $email=$_POST["email"];
  $phone=$_POST["phone"];
  $address=$_POST["address"];
  $city=$_POST["city"];
  $zip=$_POST["zip"];

  $mail->Username='ihsahirta011172@gmail.com';
  $mail->Password='hashiatri@123';

  $mail->setFrom('ihsahirta011172@gmail.com','Giftdesk');
  $mail->addAddress($email);
  $mail->addReplyTo('ihsahirta011172@gmail.com');


  




  $mail->isHTML(true);
  $mail->Subject='Giftdesk Order';
  $mail->Body='<h1 align="center">Order Details</h1><br><h4 align="center">Full Name:'.$fname. ' '.$lname. '</h4><br><h4 align="center">Phone Number:'.$phone.'</h4><br><h4 align="center">Address:'.$address.'</h4><br><h4 align="center">City:'.$city.'</h4><br><h4 align="center">Order details received</h4><br><h4 align="center">Contact us for further information!!!</h1>';
  if(!$mail->send()){
  	echo "Message could not be sent!";
  }
  else{
  	  	echo "Mail sent successfully!";
  }
?>
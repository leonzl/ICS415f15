<?php
$fn=$_GET['firstname'];
$ln=$_GET['lastname'];
$favcolor=$_GET['favcolor'];
$bday=$_GET['bday'];
$bdaytime=$_GET['bdaytime'];
$email=$_GET['email'];
$favmonth=$_GET['favmonth'];
$age=$_GET['age'];
$pts=$_GET['points'];
$gsearch=$_GET['googlesearch'];
$favpage=$_GET['favpage'];

echo "Hello " . $fn . " " . $ln . ".<br>";
echo "Your favorite color hex is " . $favcolor . ".<br>";
echo "You are " . $age . " years old.<br>";
echo "Your birthday and birthday time are " . $bday . " and " . $bdaytime . " respectively.<br>";
echo "Your E-mail is  " . $email . ".<br>";
echo "Your favorite month and year is " . $favmonth . ".<br>";
echo "You want to look up " . $gsearch . ".<br>";
echo "Your favorite page is " . $favpage . ".<br>";
echo "You just got " . $pts . " points!<br>";
?>
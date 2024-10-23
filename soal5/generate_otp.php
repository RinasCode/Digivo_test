<?php
session_start();
$otp = rand(100000, 999999);
$_SESSION['otp'] = $otp;
$_SESSION['otp_expiry'] = time() + 300; 

header('Content-Type: application/json');
echo json_encode(['otp' => $otp, 'expires_in' => '5 minutes']);
?>

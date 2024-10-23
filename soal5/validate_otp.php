<?php
session_start();
header('Content-Type: application/json');

if (!isset($_POST['otp'])) {
    echo json_encode(['status' => 'error', 'message' => 'OTP is required']);
    exit();
}

$inputOtp = $_POST['otp'];

if (isset($_SESSION['otp']) && isset($_SESSION['otp_expiry'])) {
    if (time() > $_SESSION['otp_expiry']) {
        echo json_encode(['status' => 'error', 'message' => 'OTP expired']);
    } elseif ($inputOtp == $_SESSION['otp']) {
        echo json_encode(['status' => 'success', 'message' => 'OTP is valid']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid OTP']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No OTP generated']);
}
?>

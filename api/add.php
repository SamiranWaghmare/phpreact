<?php
include('api.php');

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["name"]) || !isset($data["email"]) || !isset($data["dob"])) {
    echo json_encode(["error" => "Missing required fields"]);
    exit();
}

$name = mysqli_real_escape_string($db_conn, $data["name"]);
$email = mysqli_real_escape_string($db_conn, $data["email"]);
$dob = mysqli_real_escape_string($db_conn, $data["dob"]);

$insertUser = mysqli_query($db_conn, "INSERT INTO users (name, email, dob) VALUES ('$name', '$email', '$dob')");

if ($insertUser) {
    echo json_encode(["success" => "User added successfully"]);
} else {
    echo json_encode(["error" => "Failed to add user"]);
}

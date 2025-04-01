<?php
include('api.php');

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["id"]) || !isset($data["name"]) || !isset($data["email"]) || !isset($data["dob"])) {
    echo json_encode(["error" => "Missing required fields"]);
    exit();
}

$id = $db_conn->real_escape_string($data["id"]);
$name = $db_conn->real_escape_string($data["name"]);
$email = $db_conn->real_escape_string($data["email"]);
$dob = $db_conn->real_escape_string($data["dob"]);

$updateUser = $db_conn->query("UPDATE users SET name = '$name', email = '$email', dob = '$dob' WHERE id = $id");

if ($updateUser) {
    echo json_encode(["success" => "User updated successfully"]);
} else {
    echo json_encode(["error" => "Failed to update user"]);
}

$db_conn->close(); 


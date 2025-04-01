<?php
include('api.php');

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["id"])) {
    echo json_encode(["error" => "Missing required fields"]);
    exit();
}

$id = $db_conn->real_escape_string($data["id"]);

$deleteUser = $db_conn->query("DELETE FROM users WHERE id = $id");

if ($deleteUser) {
    echo json_encode(["success" => "User deleted successfully"]);
} else {
    echo json_encode(["error" => "Failed to delete user"]);
}

$db_conn->close();  // Close DB connection
?>

<?php
include('api.php');

$alluser = mysqli_query($db_conn, "SELECT * FROM users");
$json_array = ["userdata" => []];

if ($alluser && mysqli_num_rows($alluser) > 0) {
    while ($row = mysqli_fetch_assoc($alluser)) {
        $json_array["userdata"][] = [
            "id" => $row['id'],
            "name" => $row["name"],
            "email" => $row["email"],
            "dob" => $row['dob']
        ];
    }
}
echo json_encode($json_array);

mysqli_close($db_conn);

import React from "react";
import axios from "axios";

function DeleteUser({ userId, fetchUsers }) {
    const handleDelete = () => {
        axios
            .delete("http://localhost/reactphp/api/delete.php", {
                data: { id: userId },
                mode: "cors",
            })
            .then((response) => {
                if (response.data.success) {
                    console.log("User deleted successfully");
                    fetchUsers(); // Refresh the user list
                } else {
                    console.log("Error deleting user:", response.data.error);
                }
            })
            .catch((error) => console.error("Error deleting user:", error));
    };

    return (
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
            Delete
        </button>
    );
}

export default DeleteUser;

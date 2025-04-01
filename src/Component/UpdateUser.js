import React, { useState } from "react";
import axios from "axios";

function UpdateUser({ user, fetchUsers }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [dob, setDob] = useState(user.dob);

    const handleUpdate = () => {
        const updatedUser = {
            id: user.id,
            name,
            email,
            dob,
        };

        axios
            .put("http://localhost/reactphp/api/update.php", updatedUser, { mode: "cors" })
            .then((response) => {
                if (response.data.success) {
                    console.log("User updated successfully");
                    fetchUsers();
                } else {
                    console.log("Error updating user:", response.data.error);
                }
            })
            .catch((error) => console.error("Error updating user:", error));
    };

    return (
        <div className="update-form">
            <h6>Update User</h6>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control mb-2"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control mb-2"
            />
            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="form-control mb-2"
            />
            <button onClick={handleUpdate} className="btn btn-primary btn-sm">
                Update User
            </button>
        </div>
    );
}

export default UpdateUser;

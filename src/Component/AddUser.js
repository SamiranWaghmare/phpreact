import React, { useState } from "react";
import axios from "axios";

function AddUser({ onUserAdded }) {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        dob: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost/reactphp/api/add.php", newUser)
            .then(response => {
                console.log("User added:", response.data);
                // Call the parent function to refresh the user list
                onUserAdded();
                // Reset form fields
                setNewUser({ name: "", email: "", dob: "" });
            })
            .catch(error => console.error("Error adding user:", error));
    };

    return (
        <div className="mt-4">
            <h6>Add New User</h6>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={newUser.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={newUser.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="form-control"
                        value={newUser.dob}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add User</button>
            </form>
        </div>
    );
}

export default AddUser;

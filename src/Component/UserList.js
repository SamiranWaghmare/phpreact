import React, { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios
            .get("http://localhost/reactphp/api/list.php", { mode: "cors" })
            .then((response) => {
                if (response.data.userdata) {
                    setUsers(response.data.userdata);
                } else {
                    console.log("No users found");
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (
        <div className="container mt-4">
            <h5 className="mb-3">User List</h5>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dob}</td>
                                    <td>
                                        <UpdateUser user={user} fetchUsers={fetchUsers} />
                                        <DeleteUser userId={user.id} fetchUsers={fetchUsers} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* AddUser Component for adding new users */}
            <AddUser onUserAdded={fetchUsers} />
        </div>
    );
}

export default UserList;

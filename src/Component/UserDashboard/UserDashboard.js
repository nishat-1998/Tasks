import React, { useState } from "react";
import toast from "react-hot-toast";
import InputForm from "../InputForm/InputForm";
import TableUser from "./TableUser";


const UserDashboard = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        const isUserExist = users.some(({ email }) => email === user.email);
        if (isUserExist) return toast.error("User already exists with this email!");

        setUsers([...users, user]);
        return toast.success(" User Added");
    };

    const handleDeleteUser = (email) => {
        setUsers(users.filter((user) => user.email !== email));
    };

    return (
        <section className="container">
            <InputForm handleAddUser={handleAddUser} />
            <TableUser users={users} handleDeleteUser={handleDeleteUser} />
        </section>
    );
};
export default UserDashboard;
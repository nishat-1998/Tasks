import React from "react";
import { Button, Table } from "react-bootstrap";
import "./TableUser.css";

const TableUser = ({ users, handleDeleteUser }) => (
    <div className="user-table table">
        <Table hover borderless responsive>
           
            {users.length ? (
                users.map(({ name, email }, idx) => (
                    <tbody key={idx} className="semi-bold">
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>
                                <Button onClick={() => handleDeleteUser(email)}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                ))
            ) : (
                <h4 className="text-center">--Empty--</h4>
            )}
        </Table>
    </div>
);

export default TableUser;
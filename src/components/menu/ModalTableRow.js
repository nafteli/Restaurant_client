import React from "react";
import { Badge, Table } from "react-bootstrap";

export const ModalTableRow = ({ id, name, price, orders, }) => {

    return (
        <>


            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <Badge bg="dark" >{orders[id] >= 0 ? orders[id] : 0}</Badge>
                </td>
                <td>{price * orders[id] || 0}</td>
            </tr>
        </>
    );
};

export default ModalTableRow
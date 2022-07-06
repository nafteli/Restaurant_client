import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MenuTableRow = (props) => {
    const { id, name, category, price } = props.obj;


    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            {/* <td>
    <Link className="edit-link"
    to={"/edit-student/" + id}>
    Edit
    </Link>
  </td> */}
        </tr>
    );
};

export default MenuTableRow;

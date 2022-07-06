import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MenuTableRow = (props) => {
    const { table, capacity, GroupSeqNum } = props.obj;


    return (
        <tr>
            <td>{table}</td>
            <td>{capacity}</td>
            <td>{GroupSeqNum ? GroupSeqNum : "Available"}</td>
           {/*  <td>
                <Link className="edit-link"
                    to={"/edit-student/"}>
                    Edit
                </Link>
            </td>*/}
        </tr>
    );
};

export default MenuTableRow;

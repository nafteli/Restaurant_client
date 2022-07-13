import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuList from "../menu/menuList";



const QueueTableRow = (props) => {
    const { name, size, queue, GroupSeqNo, table, dishs, arrivalTime } = props.obj;

    const deleteGruop = () => {
        axios
            .delete(
                `http://localhost:3000/api/deleteGroup/${GroupSeqNo}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("Group successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    const editGruops = () => {
        axios
            .put(
                `http://localhost:3000/api/SitByPriority`)
            .then((res) => {
                if (res.status === 200) {
                    alert("Group successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    // const modalmenu = () => {
    //     return(
    //         <div class="modal" tabindex="-1" role="dialog">
    //         <div class="modal-dialog" role="document">
    //           <div class="modal-content">
    //             <div class="modal-header">
    //               <h5 class="modal-title">Modal title</h5>
    //               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //                 <span aria-hidden="true">&times;</span>
    //               </button>
    //             </div>
    //             <div class="modal-body">
    //               <p>Modal body text goes here.</p>
    //             </div>
    //             <div class="modal-footer">
    //               <button type="button" class="btn btn-primary">Save changes</button>
    //               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )
    // }

    const Buttons = () => {
        if (queue === "AwaittSit" && table == null) {
            return (
                <Button onClick={editGruops}
                    size="sm">
                    Find a Table
                </Button>
            )
        }
        else if (queue === "sitting" && table != null) {
            return (
                <>
                    <Link
                        to={`/menuReservation/${GroupSeqNo}`}>Reservation</Link>
                    <Button onClick={MenuList}
                        size="sm" >
                        Go To Pay
                    </Button>
                </>
            )
        }
        else if (queue === "awaitingbill" && table != null) {
            return (
                <Button onClick={deleteGruop}
                    size="sm" >
                    Pay Now
                </Button>
            )
        }
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{size}</td>
            <td>{queue}</td>
            <td>{arrivalTime}</td>
            <td>{table ? table : "AwaittSit"}</td>
            <td>
                <Buttons />
                {/* <Link className="edit-link"
                    to={"/edit-student/"}>
                    Edit
                </Link>
                <Button onClick={deleteGruop}
                    size="sm" variant="danger">
                    Delete
                </Button> */}
            </td>
        </tr>
    );
};

export default QueueTableRow;

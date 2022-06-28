import React from "react";

export default ({task}) => {
    return (
        <li className="list-grop-item">
            <h5>{task.table}</h5>
            <p>{task.capacity}</p>
        </li>
    )
}
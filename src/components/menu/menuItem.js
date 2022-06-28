import React from "react";

export default ({task}) => {
    return (
        <li className="list-grop-item">
            <h5>{task.name}</h5>
            <p>{task.category}</p>
        </li>
    )
}
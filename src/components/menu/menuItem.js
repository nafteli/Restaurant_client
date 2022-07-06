import React from "react";

export default ({task}) => {
    console.log(task)
    return (
        <li className="list-grop-item">
            <h5>{task.name}</h5>
            <p>{task.category}</p>
            <p>{task.id}</p>
            <p>{task.price}</p>
        </li>
    )
}
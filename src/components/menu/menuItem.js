import React from "react";

export default ({task}) => {
    const pathname = window.location.pathname
    console.log("pathname:",pathname)
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
import React, {useState, useEffect} from "react";
import MenuItem from "./menuItem";


export default () => {
    const [tasks, setTasks] = useState({});

    useEffect(()=> {
        fetch('http://localhost:3000/api/menu')
        .then(Response => Response.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <ul className="list-group">
            {
                tasks.dishes && tasks.dishes.map(function(singelTask) {
                    return < MenuItem task={singelTask} key={singelTask.id}/>
                })
            }   
        </ul>
    )
}
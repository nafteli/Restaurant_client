import React, {useState, useEffect} from "react";
import QueueItem from "./queueitem";


export default () => {
    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/api/ShowQueue')
        .then(Response => Response.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <ul className="list-group">
            {
                tasks && tasks.map(function(singelTask) {
                    return < QueueItem task={singelTask} key={singelTask.id}/>
                })
            }   
        </ul>
    )
}
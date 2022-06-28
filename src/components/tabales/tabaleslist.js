import React, {useState, useEffect} from "react";
import TabaleItem from "./tabaleitem";


export default () => {
    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/api/tabel')
        .then(Response => Response.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <ul className="list-group">
            {
                tasks.length > 0 && tasks.map(function(singelTask) {
                    return < TabaleItem task={singelTask} key={singelTask.table}/>
                })
            }   
        </ul>
    )
}
import React, { useState, useEffect } from "react";
import MenuItem from "./menuItem";
import { getall } from '../../api'


export default () => {
    
    // const pathname = window.location.pathname
    // const split = pathname.split("/")
    // const category = split[split.length-1]
    // console.log("category:",category)
    // const getwith = `menu/${category}`
    // console.log(getwith)
    const [tasks, setTasks] = useState({});




    useEffect(() => async () => {
        const data = await getall("menu")
        console.log("data:",data)
        setTasks(data)
        console.log("tasks.dishes:",tasks)
    }, [])
    

    return (
        <ul className="list-group">
            {
                tasks.dishes && tasks.dishes.map(function (singelTask) {
                    return < MenuItem task={singelTask} key={singelTask.id}  />
                })
            }
        </ul>
        
    )
}
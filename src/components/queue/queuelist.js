import React, {useState, useEffect} from "react";
import QueueItem from "./queueitem";
import postData from './queuInput'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default () => {
    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/api/ShowQueue')
        .then(Response => Response.json())
        .then(data => setTasks(data))
    }, [])

    return (
        <ul className="list-group">
                <div>
                    <Popup trigger={<button> Click to open popup </button>} 
                    position="right center">
                    {/* <div>
                        <form>
                            <label>
                                Name:
                                <input type="text" name="name" />
                            </label>
                            size:
                            <input type="int"  name="size" />
                        </form>
                        </div> */}
                    <button onClick={postData}>Click</button>
                    </Popup>
                </div>
            {
                tasks && tasks.map(function(singelTask) {
                    return < QueueItem task={singelTask} key={singelTask.id}/>
                })
            }   
        
  
        </ul>

    )
}
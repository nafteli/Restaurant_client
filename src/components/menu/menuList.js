import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import MenuTableRow from "./MenuTableRow";

const MenuList = () => {
const [tasks, setTasks] = useState([]);


useEffect(() => {
  axios
  .get("http://localhost:3000/api/menu")
  .then(({ data }) => {
    console.log(data)
    setTasks(data);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

const DataTable = () => {
  return tasks.map((res, i) => {
    console.log(tasks)
  return <MenuTableRow obj={res} key={i} />;
  });
};

return (
 <div className="table-wrapper">
  <Table striped bordered hover>
    <thead>
    <tr>
        <th>id</th>
      <th>Name</th>
      <th>Category</th>
      <th>price</th>
    </tr>
    </thead>
    <tbody>{DataTable()}</tbody>
  </Table>
  </div>
);
};

export default MenuList;













// import React, {useState, useEffect} from "react";
// import QueueItem from "./queueitem";
// import postData from './queuInput'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';


// export default () => {
//     const [tasks, setTasks] = useState([]);

//     useEffect(()=> {
//         fetch('http://localhost:3000/api/ShowQueue')
//         .then(Response => Response.json())
//         .then(data => setTasks(data))
//     }, [])

//     return (
//         <ul className="list-group">
//                 <div>
//                     <Popup trigger={<button> Click to open popup </button>} 
//                     position="right center">
//                     {/* <div>
//                         <form>
//                             <label>
//                                 Name:
//                                 <input type="text" name="name" />
//                             </label>
//                             size:
//                             <input type="int"  name="size" />
//                         </form>
//                         </div> */}
//                     <button onClick={postData}>Click</button>
//                     </Popup>
//                 </div>
//             {
//                 tasks && tasks.map(function(singelTask) {
//                     return < QueueItem task={singelTask} key={singelTask.id}/>
//                 })
//             }   
        
  
//         </ul>

//     )
// }



// import React, { useState, useEffect } from "react";
// import MenuItem from "./menuItem";
// import { getall } from '../../api'


// const MenuList = () => {
//     console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
//     // const pathname = window.location.pathname
//     // const split = pathname.split("/")
//     // const category = split[split.length-1]
//     // console.log("category:",category)
//     // const getwith = `menu/${category}`
//     // console.log(getwith)
//     const [tasks, setTasks] = useState({});




//     useEffect(() => async () => {
//         console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
//         const data = await getall("menu")
//         //console.log("data:",data)
//         setTasks(data)
//         //console.log("tasks.dishes:",tasks)
//     }, [])
    

//     return (
//         <ul className="list-group">
//             {
//                 tasks.dishes && tasks.dishes.map(function (singelTask) {
//                     return < MenuItem task={singelTask} key={singelTask.id}  />
//                 })
//             }
//         </ul>
        
//     )
// }

// export default MenuList
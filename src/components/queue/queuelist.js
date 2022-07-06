import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import QueueTableRow from "./QueueTableRow";

const QueueList = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
  axios
  .get("http://localhost:3000/api/ShowQueue/")
  .then(({ data }) => {
    setStudents(data);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

const DataTable = () => {
  return students.map((res, i) => {
  return <QueueTableRow obj={res} key={i} />;
  });
};

return (
  <div className="table-wrapper">
  <Table striped bordered hover>
    <thead>
    <tr>
      <th>Name</th>
      <th>size</th>
      <th>status</th>
      <th>arrival time</th>
      <th>table</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>{DataTable()}</tbody>
  </Table>
  </div>
);
};

export default QueueList;













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
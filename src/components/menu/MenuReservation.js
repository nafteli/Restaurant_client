import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Badge} from "react-bootstrap";
import { Link } from "react-router-dom";
//import MenuTableRow from "./MenuTableRow";


const MenuTableRow = (props) => {
    const { id, name, category, price } = props.obj;
    //console.log(props.obj)
    const [dishes, setDishes] = useState(0) 
    console.log("dishes:", dishes, dishes > 0)
    // console.log(,"setdishes:", setdishes)



    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>
                <button className="App" onClick={() => setDishes(dishes + 1)}>
                +
                </button>
                <Badge bg="dark" >{dishes >= 0 ? dishes : 0}</Badge>
                <button className="app" onClick={() => dishes > 0 ? setDishes(dishes -1) : setDishes(dishes -0)}>
                -
                </button>
                {/* <Link className="edit-link"
                    to={"/edit-student/" + id}>
                    Edit
                </Link> */}
            </td>
        </tr>
    );
};

const MenuReservation = () => {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:3000/api/menu")
            .then(({ data }) => {
                console.log("data in useEffect:",data)
                setTasks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return tasks.map((res, i) => {
            console.log("data frome data to table in one task",tasks)
            return <MenuTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <h1>Reservation</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
            <button onClick={MenuReservation} > send </button>
        </div>
    );
};

export default MenuReservation;
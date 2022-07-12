import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";



var sending = []

const MenuTableRow = ({ id, name, category, price, orders, setOrders }) => {
    const deleteFromSending = () => {
        let dataSend = []
        let conter = 0
        for (let item of sending) {
            if (item.id !== id || conter === 1) {
                console.log("item.id:", item.id, "props.obj.id:", id)
                dataSend.push(item)
            }
            else {
                conter = 1
            }
        }
        sending = dataSend

    }
    // console.log(props.obj)
    // console.log("setdishes:", setDishes)
    //const [dishesToSend, setDishesToSend] = useState([])
    //console.log(props.obj)
    //console.log("dishesToSend:", sending)



    /*
        {
            1: 7,
            2: 1,
            3: 5
        }

        orders[id] = value;
    */


    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>
                <button className="App" onClick={() => {
                    setOrders({ ...orders, [id]: (orders[id] || 0) + 1 })
                }} >
                    +
                </button>
                <Badge bg="dark" >{orders[id] >= 0 ? orders[id] : 0}</Badge>
                <button className="app" onClick={() => {
                    orders[id] > 0 ?
                        setOrders({ ...orders , [id]: (orders[id] || 0) - 1})
                        : setOrders({ ...orders, [id]: (orders[id] || 0) - 0 })
                }}>
                    -
                </button>
                {/* <Link className="edit-link"
                    to={"/edit-student/" + id}>
                    Edit
                </Link> 
                orders > 0 ? setOrders(orders - 1) & deleteFromSending() : setOrders(orders - 0)
                */}
            </td>
        </tr >
    );
};



const sendData = (orders) => {
    // console.log(window.location.pathname.split("/").at(-1))
    // const text = window.location.pathname
    // const splited = text.split("/")
    const GroupSeqNo = window.location.pathname.split("/").at(-1)
    console.log(GroupSeqNo)
    axios.put(
        `http://localhost:3000/api/adddishs/${GroupSeqNo}`,orders)
        .then(res => {
            if (res.status === 200)
                alert('Order successfully received')
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    console.log(GroupSeqNo)
}



const MenuReservation = () => {
    const [tasks, setTasks] = useState([]);
    const [test, setTest] = useState({})
    // console.log("orders:", orders, orders[id] > 0)
    // console.log({ [id]: (orders[id]) })
    
    const dishesReservation = () => {
        const GroupSeqNo = window.location.pathname.split("/").at(-1)
        useEffect(() => {
            axios.get(`http://localhost:3000/api/ShowQueue/${GroupSeqNo}`)
            .then(( test ) => {
                setTest(test);
                console.log(test.data.dishs)
                return(test.data.dishs)
            })
            .catch((error) => {
                console.log(error);
            });
            
        }, {})
    }
    console.log(dishesReservation())
    const [orders, setOrders] = useState({})

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/menu")
            .then(({ data }) => {
                console.log("data in useEffect:", data)
                setTasks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return tasks.map((res, i) => {
            //console.log("data from data to table in one task", tasks)
            return <MenuTableRow {...res} key={i} orders={orders} setOrders={setOrders}/>;
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
            <button onClick={() => sendData(orders)} > send </button>
        </div>
    );
};

export default MenuReservation;
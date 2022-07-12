import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";


const Total = (res, orders) => {
    console.log("price from total:", res.price, "orders from total:", orders)
    // return (
    //     <td>{orders}</td>
    // )
}


const MenuTableRow = ({ id, name, category, price, orders, setOrders, starter }) => {
    console.log(starter[id])
    if (starter[id] === undefined) { starter[id] = 0 }
    // const deleteFromSending = () => {
    //     let dataSend = []
    //     let conter = 0
    //     for (let item of sending) {
    //         if (item.id !== id || conter === 1) {
    //             console.log("item.id:", item.id, "props.obj.id:", id)
    //             dataSend.push(item)
    //         }
    //         else {
    //             conter = 1
    //         }
    //     }
    //     sending = dataSend

    // }
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>
                    <button className="App" onClick={() => {
                        setOrders({ ...orders, [id]: (orders[id] || 0) + 1 })
                    }} >+</button>
                    <Badge bg="dark" >{orders[id] >= 0 ? orders[id] : 0}</Badge>
                    <button className="app" onClick={() => {
                        orders[id] > (starter[id]) ?
                            setOrders({ ...orders, [id]: (orders[id] || 0) - 1 })
                            : setOrders({ ...orders, [id]: (orders[id] || 0) - 0 })
                    }}>-</button>
                </td>
                <td>{price * orders[id] || 0}</td>
            </tr>
        </>
    );
};



const sendData = (orders) => {
    // const GroupSeqNo = window.location.pathname.split("/").at(-1)
    // console.log(GroupSeqNo)
    axios.put(
        `http://localhost:3000/api/adddishs/${GroupSeqNo}`, orders)
        .then(res => {
            if (res.status === 200)
                alert('Order successfully received')
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    // console.log(GroupSeqNo)
}


const goToPay = (orders) => {
    let GroupSeqNo = window.location.pathname.split("/").at(-1)
    axios.put(
        `http://localhost:3000/api/gotppay/${GroupSeqNo}`, orders)
        .then(res => {
            console.log(GroupSeqNo)
            if (res.status === 200)
                alert('Order successfully received')
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
}


var starter = {};
let GroupSeqNo = window.location.pathname.split("/").at(-1)
const MenuReservation = () => {
    const [pay, setPay] = useState({})
    const [tasks, setTasks] = useState([])
    const [orders, setOrders] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3000/api/ShowQueue/${GroupSeqNo}`)
            .then((test) => {
                setOrders(test.data.dishs);
                starter = test.data.dishs
                console.log("test.data.dishs", test.data.dishs)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    console.log(starter)
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/menu")
            .then(({ data }) => {
                //console.log("data in useEffect:", data)
                setTasks(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return tasks.map((res, i) => {
            // console.log("data from data to table in one task", tasks)
            return <MenuTableRow {...res} key={i} orders={orders} setOrders={setOrders} starter={starter} />;
        });
    };

    const totalPay = () => {
        return tasks.map((res) => {
            return <Total {...res} orders={orders} />
        })
    }

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
                        <th>toPay</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
                <tr>total =  {totalPay()}</tr>
            </Table>
            <div>
                <button onClick={() => sendData(orders)} > send </button>
                <button onClick={() => goToPay(orders, )}>go to pay</button>
            </div>
        </div>
    );
};

export default MenuReservation;
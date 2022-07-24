import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge, Modal, Button } from "react-bootstrap";

import { ModalTableRow } from './ModalTableRow'
import { object } from "yup";




const Total = (res, orders, pay) => {
    console.log("price from total:", res.price, "orders from total:", orders, pay)
    // return (
    //     <>
    //         <tr>
    //             <td>{pay}</td>
    //         </tr>
    //     </>
    // )
}


const MenuTableRow = ({ id, name, category, price, orders, setOrders, starter, GroupSeqNo}) => {
    // console.log(starter)
    // console.log(GroupSeqNo)
    if (starter[id] === object){window.location.reload()}
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
                    <button className="app" disabled={!orders[id] > (starter[id]) } onClick={() => {
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



const sendData = (orders, GroupSeqNo) => {
    // const GroupSeqNo = window.location.pathname.split("/").at(-1)
    // console.log(GroupSeqNo)
    axios.put(
        `http://localhost:4000/api/adddishs/${GroupSeqNo}`, orders)
        .then(res => {
            if (res.status === 200)
                alert('Order successfully received')
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    // console.log(GroupSeqNo)
}


const goToPay = (orders, handleShow, setPay) => {
    let GroupSeqNo = window.location.pathname.split("/").at(-1)
    console.log(GroupSeqNo)
    axios.put(
        `http://localhost:4000/api/goToPay/${GroupSeqNo}`, orders)
        .then(res => {
            setPay(res.data.msg)
            console.log(res.data.msg)
            if (res.status === 200) {
                return (
                    handleShow()
                )
            }
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
}




const MenuReservation = () => {
    const [starter, setStarter] = useState({})
    const [menuData, setMenuData] = useState([])
    const [pay, setPay] = useState(0)
    const [orders, setOrders] = useState({})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [GroupSeqNo, setGroupSeqNo] = useState(window.location.pathname.split("/").at(-1))
    const [buttonDown, setButtonDown] = useState(false)
    const DownTrue = () => setButtonDown(true)
    const DownFalse = () => setButtonDown(false)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/ShowQueue/${GroupSeqNo}`)
            .then((res) => {
                setOrders(res.data.dishs);
                setStarter(res.data.dishs)
                console.log("res.data.dishs", res.data.dishs)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    console.log(starter)
    useEffect(() => {
        axios
            .get("http://localhost:4000/api/menu")
            .then(({ data }) => {
                //console.log("data in useEffect:", data)
                setMenuData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return menuData.map((res, i) => {
            // console.log("data from data to table in one task", menuData)
            return <MenuTableRow {...res} 
            key={i} orders={orders} 
            setOrders={setOrders} starter={starter} 
            GroupSeqNo={GroupSeqNo}/>;
        });
    };

    const DataTableModal = () => {
        return menuData.map((res, i) => {
            return <ModalTableRow {...res} key={i} orders={orders} />;
        });
    };

    const totalPay = () => {
        return menuData.map((res) => {
            return <Total {...res} orders={orders} pay={pay} setPay={setPay} />
        })
    }

    const goToPayButton = () => {
        if(starter !== {}){
            return(
                <button onClick={() => goToPay(orders, handleShow, setPay, pay, GroupSeqNo)}>Go To Pay</button>
            )
        }
        else{}
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
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
                <tr>total =  {totalPay()}</tr>
            </Table>
            <div>
                <button onClick={() => sendData(orders, GroupSeqNo)} > Send </button>
                <button onClick={() => goToPay(orders, handleShow, setPay, pay)}>Go To Pay</button>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Total Pay</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>to Pay</th>
                                    </tr>
                                </thead>
                                <tbody>{DataTableModal()}</tbody>
                                {/* <tr>{totalPay()}</tr> */}
                            </Table></Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary"
                                onClick={handleClose}
                                className="col btn btn-danger m-2 p-2 text-whait align-self-end">
                                cancel
                            </Button>
                            <Button variant="secondary"
                                onClick={handleClose}
                                className="col btn btn-success m-2 p-2 text-whait align-self-end">
                                pay now
                            </Button>
                        </Modal.Footer>
                    </Modal></>
            </div>

        </div >
    );
};

export default MenuReservation;
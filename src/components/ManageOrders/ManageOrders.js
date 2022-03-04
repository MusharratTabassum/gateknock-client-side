import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ManageOrders.css"

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete your order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The booking is deleted successfully!');
                        const remainingorders = orders.filter(order => order._id !== id);
                        setOrders(remainingorders)
                    }
                });
        }
        else {
            alert("The booking is not removed.")
        }
    }
    return (
        <div>
            <div className="bookings container ">

                {
                    <div className="table-responsive mt-3 mb-5">
                        <h1 className="mt-5 mb-5 service-title">Total Booking : {orders?.length}</h1>

                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>OrderID</th>
                                    <th>Service</th>
                                    <th>Date of Delivery</th>
                                    <th>Status</th>
                                    <th>Delete/Update</th>
                                </tr>
                            </thead>
                            {orders?.map((order, index) => (
                                <tbody key={order._id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order._id}</td>
                                        <td>{order.service_name}</td>
                                        <td>{order.Dropping_Date}</td>
                                        <td>{order.status}</td>
                                        <Button
                                            className="dlt-btn"
                                            onClick={() => handleDeleteOrder(order._id)}
                                        >
                                            Remove
                                        </Button>
                                        <Link to={`/bookings/update/${order._id}`}><button className='update-btn'>Update</button></Link>

                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>

                }

            </div>

        </div>
    );
};

export default ManageOrders;
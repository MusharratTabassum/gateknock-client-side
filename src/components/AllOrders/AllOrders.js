import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
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

export default AllOrders;
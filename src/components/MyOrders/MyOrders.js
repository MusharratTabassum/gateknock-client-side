import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])


    const MyOrders = orders.filter(order => order.email == user.email);
    console.log(MyOrders);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete your order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The booking is deleted successfully!');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders)
                    }
                });
        }
        else {
            alert("not working")
        }
    }


    return (
        <div className="orders container">
            <h1 className="mt-5 mb-2 service-title">My orders</h1>
            <h1 className='service-title mb-1'>Total Orders : {MyOrders?.length}</h1>

            {
                <div className="table-responsive mt-5 mb-5">

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>OrderID</th>
                                <th>Service</th>
                                <th>Date of Delivery</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {MyOrders?.map((order, index) => (
                            <tbody key={order._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order._id}</td>
                                    <td>{order.service_name}</td>
                                    <td>{order.Dropping_Date}</td>
                                    <td>{order.status}</td>
                                    <button className='dlt-btn' onClick={() => handleDeleteOrder(order._id)}>Cancel</button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>



            }

        </div>
    );
};

export default MyOrders;
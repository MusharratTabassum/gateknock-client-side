import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdatingStatus = () => {
    const [order, setOrder] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const url = `http://localhost:5000/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    // Update User
    const handleStatusChange = e => {
        const updatedStatus = e.target.value;
        const updatedOrder = { status: updatedStatus };
        setOrder(updatedOrder);
    }
    const handleUpdateStatus = (e) => {

        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Successfully Updated');
                    setOrder({});
                    e.target.reset();
                }
            })
        e.preventDefault();


    }

    return (
        <div>
            <div className='p-5 m-3'>
                <h2 className='mb-4'>Status Checking</h2>
                <form onSubmit={handleUpdateStatus}>
                    <input type="text" onChange={handleStatusChange} value={order.status || ''} />
                    <input type="submit" value="Update" />

                </form>

            </div>

        </div>
    );
};

export default UpdatingStatus;
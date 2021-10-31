import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    let i = 1;
    useEffect(() => {
        const url = `http://localhost:7000/order`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handlePackegeDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:7000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const leftOrders = orders.filter(od => od._id !== id);
                        setOrders(leftOrders);
                    }
                });
        }
    }
    const handleOrderApprove = id => {
        const status = { status: "Approve" };
        const url = `http://localhost:7000/order/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    fetch(`http://localhost:7000/order`)
                        .then(res => res.json())
                        .then(data => setOrders(data))
                }
            })
    }

    return (
        <div className="container my-5">
            <h1 className="text-center my-4">Manage All Orders</h1>
            {
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#SI</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Tour package Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        {
                            orders.length > 0 ? orders.map(order => (
                                <tbody key={order._id}>
                                    <tr>
                                        <th scope="row">{i++}</th>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.address}</td>
                                        <td>{order.item}</td>
                                        <td>{order.price}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            <button onClick={() => handleOrderApprove(order._id)} className="btn btn-sm btn-success">Approve</button>
                                            | <button onClick={() => handlePackegeDelete(order._id)} className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )) :
                                <tbody>
                                    <tr>
                                        <td>No data available</td>
                                    </tr>
                                </tbody>
                        }

                    </table>
                </div>
            }
        </div>
    );
};

export default AllOrders;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const MyOrder = () => {
    const { email } = useParams();
    const [myOrder, setMyOrder] = useState([]);
    let i = 1;
    console.log(myOrder);
    useEffect(() => {
        const url = `https://howling-cat-22658.herokuapp.com/myorders/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [email]);

    const handlePackegeDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://howling-cat-22658.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const leftOrder = myOrder.filter(pd => pd._id !== id);
                        setMyOrder(leftOrder);
                    }
                });
        }
    }

    return (
        <div className="container my-4" >
            <h1 className="my-4">My Orders Information</h1>
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
                            myOrder.length > 0 ? myOrder.map(order => (
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
                                            <button onClick={() => handlePackegeDelete(order._id)} className="btn btn-sm btn-danger">Cancel</button>
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
        </div >
    );
};

export default MyOrder;
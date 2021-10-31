import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Offer = () => {
    const { offerId } = useParams();
    const [offer, setOffer] = useState({});
    const { users } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const itemRef = useRef();
    const priceRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const statusRef = useRef();

    const handleAddOrder = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const item = itemRef.current.value;
        const price = priceRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const status = statusRef.current.value;

        const orderData = { name, email, item, price, address, phone, status };

        // submit order in order table
        fetch('https://howling-cat-22658.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    useEffect(() => {
        const url = `https://howling-cat-22658.herokuapp.com/offer/${offerId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, [offerId]);

    return (
        <div className="text-start container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="my-4 blog-title">{offer.name}</h2>
                    <p>{offer.desc}</p>
                    <img className="img-fluid" src={offer.img} alt="" />
                </div>

                <div className="col-md-6 mt-5">
                    <h1 className="text-center mb-3">Booking From</h1>

                    <form onSubmit={handleAddOrder} className="w-75 d-flex flex-column justify-content-center align-items-center mx-auto">
                        <input className="form-control" type="text" ref={nameRef} defaultValue={users.displayName || ''} />
                        <br />
                        <input className="form-control" type="email" name="" id="" ref={emailRef} defaultValue={users.email || ''} />
                        <br />
                        <input className="form-control" type="text" name="" id="" ref={itemRef} defaultValue={offer.name || ''} />
                        <br />
                        <input className="form-control" type="text" name="" id="" ref={priceRef} defaultValue={offer.price || ''} />
                        <br />
                        <input className="form-control" type="text" name="" id="" ref={addressRef} placeholder="Enter your address" required />
                        <br />
                        <input className="form-control" type="number" name="" id="" ref={phoneRef} placeholder="Enter your Phone number" required />
                        <br />
                        <input className="form-control" type="hidden" ref={statusRef} defaultValue="pending" />
                        <input className="btn btn-sm btn-info form-control" type="submit" value="Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Offer;
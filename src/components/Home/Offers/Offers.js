import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    // display all o0ffers
    useEffect(() => {
        fetch('https://howling-cat-22658.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (
        <div className="container my-5">
            <h1 className="my-3">Our offers</h1>
            <Row xs={1} md={3} className="g-4">
                {

                    offers.map(offer => (
                        <Col key={offer._id}>
                            <Card>
                                <Card.Img variant="top" className="image-height" src={offer.img} />
                                <Card.Body>
                                    <Card.Title>{offer.name}</Card.Title>
                                    <Card.Text>
                                        Description: {offer.desc.slice(0, 50)}
                                    </Card.Text>
                                    <Link to={`/offer/${offer._id}`}>
                                        <button className="btn btn-danger btn-sm">Booking Now</button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Offers;
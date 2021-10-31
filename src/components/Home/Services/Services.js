import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    // fetch all services
    useEffect(() => {
        fetch('https://howling-cat-22658.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container my-5">
            <h1 className="my-3">Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {

                    services.map(service => (
                        <Col key={service._id}>
                            <Card>
                                <Card.Img variant="top" className="image-height" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        Price: {service.price}
                                    </Card.Text>
                                    <Card.Text>
                                        Description: {service.desc.slice(0, 50)}
                                    </Card.Text>

                                    <Link to={`/service/${service._id}`}>
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

export default Services;
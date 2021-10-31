import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="container my-5">
            <h1 className="my-3">Our Travel Blogs</h1>
            <Row xs={1} md={2} className="g-4">
                {

                    blogs.map(blog => (
                        <Col key={blog._id}>
                            <Card className="shadow rounded">
                                <Card.Img variant="top" className="blog-image-height" src={blog.img} />
                                <Card.Body className="text-start">
                                    <Card.Title>{blog.name}</Card.Title>
                                    <Card.Text>
                                        Description: {blog.desc.slice(0, 50)}...
                                    </Card.Text>
                                    <Link to={`/blog/${blog._id}`}>
                                        <button className="btn btn-danger btn-sm">Read more</button>
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

export default Blogs;
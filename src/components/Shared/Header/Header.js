import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { users, logOut } = useAuth();
    console.log(users);
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-nav">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Holidays Tour</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/offers">Offers</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>

                        {
                            users?.displayName && <Nav.Link as={NavLink} to={`/myorders/${users.email}`}>My Orders</Nav.Link>
                        }
                        {
                            users?.displayName && <Nav.Link as={NavLink} to={`/manageOrder`}>Manage All Order</Nav.Link>
                        }
                        {
                            users?.displayName && <Nav.Link as={NavLink} to="/createPackage">Add New Package</Nav.Link>
                        }
                        {
                            users?.displayName && <Nav.Link className="">{users.displayName}</Nav.Link>
                        }
                        {
                            users.displayName ? <button className="logout-button my-auto" onClick={logOut}>Logout</button>
                                :
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
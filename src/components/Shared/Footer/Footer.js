import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faGithub, faYoutubeSquare, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="mt-4 bg-dark text-white">
            <footer className="text-center text-lg-start">
                <div className="container p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-4 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">
                                    Address
                                </h6>
                                <p>2nd floor, new market</p>
                                <p>
                                    Chargachh, Kasba, Brahmanbaria
                                </p>
                                <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp; moynamia@gmedical.com</p>
                                <p><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp; + 01784414217</p>

                                <div className="ml-lg-0 text-start">
                                    <NavLink to='/login' className="bg-light text-info p-1 rounded m-1">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </NavLink>
                                    <NavLink to='/login' className="bg-light text-success p-1 rounded m-1">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </NavLink>
                                    <NavLink to='/login' className="bg-light text-dark p-1 rounded m-1">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </NavLink>
                                    <NavLink to='/login' className="bg-light text-danger p-1 rounded m-1">
                                        <FontAwesomeIcon icon={faYoutubeSquare} />
                                    </NavLink>
                                </div>

                            </div>
                            <div className="col-md-2 col-lg-2 mx-auto mt-3 quick-link">
                                <h6 className="text-uppercase mb-4 fw-bold">Site Links</h6>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/home'>Home</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/about'>About US</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/services'>Services</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/offers'>Offers</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/blogs'>Blogs</NavLink>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 fw-bold">Help</h6>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/home'>FAQ</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/about'>Support center</NavLink>
                                </p>
                                <p>
                                    <NavLink className="navlink text-decoration-none text-light" to='/services'>Payment Security</NavLink>
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-3" />

                    <section className="p-3 pt-0">
                        <div className="text-center">
                            <div className="p-3">
                                &copy; 2020 Copyright:
                                HolidaysTour.com
                            </div>
                        </div>

                    </section>
                </div>
            </footer>
        </div >
    );
};

export default Footer;
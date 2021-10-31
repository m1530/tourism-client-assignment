import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../../images/banner/banner-1.jpg';
import logo2 from '../../../images/banner/banner-2.jpg';
import logo3 from '../../../images/banner/banner-3.jpg';
import logo4 from '../../../images/banner/banner-4.jpg';

const Hero = () => {
    return (
        <div>
            <Carousel variant="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="bg-dark w-50 mx-auto">
                        <h5>2 night 3 days sundharban tour</h5>
                        <p>Start from BDT 7500 taka only</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="bg-dark w-50 mx-auto">
                        <h5>Cox"s bazar-saint martin-cox's  bazar</h5>
                        <p>2 Days & 1 Night price start 4500 taka per person</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo3}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption className="bg-dark w-50 mx-auto">
                        <h5>Rangamati-Khagrachhari</h5>
                        <p>5 Days & 4 Night price start 7500 taka per person</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo4}
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-dark w-50 mx-auto">
                        <h5>Kuakata (Daughter of the Sea)</h5>
                        <p>2 Days & 1 Night price start 4500 taka per person</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;
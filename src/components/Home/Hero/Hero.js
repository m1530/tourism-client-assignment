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
                        <h5>Operation theatres quality</h5>
                        <p>provides the most competent and professional treatment critical situation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="bg-dark w-50 mx-auto">
                        <h5>Pharmacy</h5>
                        <p>We have pharmacy in our hospital. you can buy all any kind of medicine..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo3}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption className="bg-dark w-50 mx-auto">
                        <h5>Free Medical Checkup</h5>
                        <p>We arrange free medical checkup. for more details please contact our help line.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo4}
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-dark w-50 mx-auto">
                        <h5>Ambulance Service</h5>
                        <p>We provide 24 hour ambulance services...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;
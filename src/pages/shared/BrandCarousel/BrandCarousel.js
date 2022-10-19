import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../../assets/bird-skull-g001a3a890_640.jpg";
import img2 from "../../../assets/fantasy-g2ce811594_640.jpg";

const BrandCarousel = () => {
    return (
        <Carousel style={{ height: 205 }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;
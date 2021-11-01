import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../../images/banner/banner1.jpg';
import banner2 from '../../../../images/banner/banner2.jpg';
import banner3 from '../../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption  >
                        <h3>“Traveling – it leaves you speechless, then turns you into a storyteller</h3>
                        <p>“Do not follow where the path may lead. Go instead where there is no path and leave a trail” </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>“Oh the places you’ll go”</h3>
                        <p> “Man cannot discover new oceans unless he has the courage to lose sight of the shore” </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3> “Wherever you go becomes a part of you somehow” </h3>
                        <p> “There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
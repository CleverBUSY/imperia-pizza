import React, { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CaruselHome = () => {
    const sliderRef = useRef(null);

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <section className="mt-20 relative">
            <div className="home_carusel container2">
                <Slider ref={sliderRef} {...settings}>
                    <div className="relative">
                        <img style={{height: "380px"}} className="w-full" src="https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg" alt="" />
                    </div>
                    <div className="relative">
                        <img  style={{height: "380px"}} className="w-full" src="https://food-images.files.bbci.co.uk/food/recipes/black_and_blue_burger_95881_16x9.jpg" alt="" />
                    </div>
                    <div className="relative">
                        <img style={{height: "380px"}} className="w-full" src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                </Slider>
                <div>
                    <button className="absolute top-2/4 right-0 transform -translate-y-2/4 text-6xl text-red-500 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" onClick={goToPrev}>›</button>
                    <button className="absolute top-2/4 left-0 transform -translate-y-2/4 text-6xl text-red-500 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" onClick={goToNext}>‹</button>
                </div>
            </div>
        </section>
    );
}

export default CaruselHome;

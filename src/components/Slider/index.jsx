import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/index.scss';

const CustomSlider = ({ certificateData }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        adaptiveHeight: false,
        pauseOnHover: true,
    };

    return (
        <Slider className="sliderStyle" {...settings}>
            {certificateData}
        </Slider>
    );
};

export default CustomSlider;

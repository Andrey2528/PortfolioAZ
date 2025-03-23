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
        responsive: [
            {
                breakpoint: 1024, // Когда ширина экрана меньше 1024px
                settings: {
                    slidesToShow: 2, // Показываем 2 слайда
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Когда ширина экрана меньше 768px
                settings: {
                    slidesToShow: 1, // Показываем 1 слайд
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Когда ширина экрана меньше 480px
                settings: {
                    slidesToShow: 1, // Показываем 1 слайд
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider className="sliderStyle" {...settings}>
            {certificateData}
        </Slider>
    );
};

export default CustomSlider;

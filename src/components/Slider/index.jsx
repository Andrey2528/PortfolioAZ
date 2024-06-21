import React from 'react';
import Slider from 'react-slick';
import certificateImg from '@/api/db/certificateImg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/index.scss';

export default function SliderR() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        adaptiveHeight: true,
    };

    const sortedCertificate = certificateImg.sort(
        (a, b) => new Date(a.date) - new Date(b.date),
    );

    // Debugging: log the sorted array to verify the order
    console.log('Sorted Certificates:', sortedCertificate);

    const certificateImgDB = sortedCertificate.map((item, index) => (
        <div key={index} className="slider__container-img">
            <img src={item.img} alt={item.title} className="slider__image" />
            <h6 className="card__title">{item.title}</h6>
        </div>
    ));

    return (
        <Slider className="sliderStyle" {...settings}>
            {certificateImgDB}
        </Slider>
    );
}

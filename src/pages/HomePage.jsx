import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import CardWrapper from '@/components/CardWrapper';
import SliderR from '@/components/Slider';
import CertificateSlider from '@/shared/components/certficateSlider';

const HomePage = () => {
    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname + window.location.search,
        });
    }, []);

    return (
        <>
            <CardWrapper />
            <CertificateSlider />
        </>
    );
};
export default HomePage;

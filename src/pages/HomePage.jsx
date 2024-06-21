import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import CardWrapper from '@/components/CardWrapper';
import SliderR from '@/components/Slider';

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
            <SliderR />
        </>
    );
};
export default HomePage;

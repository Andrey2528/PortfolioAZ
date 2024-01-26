import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Layout from "@/layout/layout";

const HomePage = () => {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname + window.location.search,
        });
    }, []);

    return (
        <>

        </>
    );
};
export default HomePage;

import { useTranslation } from "react-i18next";

import "./Footer.scss";

const Footer = ({ location }) => {
    const { t } = useTranslation();
    return (
        <footer className={location === "home" ? "footer_main-page" : "footer"}>

        </footer>
    );
};
export default Footer;

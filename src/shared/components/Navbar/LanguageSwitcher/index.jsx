import Cookies from "js-cookie";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";

import "./styles.scss";

const LanguageSwitcher = () => {
  const [defaultLang, setDefaultLang] = useState("");

  const handleChange = (e) => {
    const lang = e.key;

    Cookies.set("language", lang, { expires: 365 });

    ReactGA.event({
      category: "LanguageSwitcher",
      action: `${lang} version is chosen`,
    });

    window.location.reload(false);
  };

  const menu = (
    <Menu onSelect={handleChange}>
      <MenuItem key="en">English</MenuItem>
      <MenuItem key="uk">Ukrainian</MenuItem>
      <MenuItem key="ru">Russian</MenuItem>
    </Menu>
  );

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    const supportedLangs = ["en", "ru", "ua"];

    if (!supportedLangs.includes(savedLang)) {
      setDefaultLang("en"); // або інша мова за замовчуванням
    } else {
      setDefaultLang(savedLang);
    }
  }, []);


  return (
      <ul className="language__list">
        <li className="language__item">
          <button className="language__btn">{menu}</button>
        </li>
      </ul>
  );
};
export default LanguageSwitcher;

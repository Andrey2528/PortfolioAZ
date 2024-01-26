import LanguageSwitcher from "@/shared/components/Navbar/LanguageSwitcher";
import React from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import { navPage } from "@/db/navPage";
import { NavLink } from "react-router-dom";
import ThemeList from "@/theme/ThemeList";

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const linksPage = navPage.map((el, i) => {
        return (
            <NavLink
                key={uuidv4()}
                className={({ isActive }) =>
                    (isActive ? "active_li" : null) + " navbar__nav__link"
                }
                to={el.route}
            >
                    {t(`navMenu.link${i + 1}`)}

            </NavLink>
        );
    })
    return (
        <div>
            <div className="navbar__wrapper">
                <nav className="navbar__nav">
                    <NavLink
                        to={"/"}
                        className="navbar__logos__wrapper"
                    >
                        <div className="navbar__logos__logo navbar__logos__logo-game">
                            <h2 className="main__title">Andriy Zhukov</h2>
                        </div>
                    </NavLink>
                    <div className="navbar__nav__links">
                        <div className="navbar__nav__links-wrapper">
                            <p>
                                {t("navMenu.link1")}
                            </p>
                        </div>
                        <div className="navbar__nav__links-wrapper">
                            {linksPage}
                        </div>
                        <div className="navbar__nav__links-wrapper">
                            <LanguageSwitcher/>
                        </div>

                        <div className="navbar__nav__links-wrapper">
                            <ThemeList/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
export default Navbar;

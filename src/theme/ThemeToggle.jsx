import React, { useState, useEffect } from "react";

const ThemeToggle = ({ themes, setThemes }) => {
    const [defaultTheme, setDefaultTheme] = useState("light");

    useEffect(() => {
        document.body.className = defaultTheme === "dark" ? "light" : "dark";
    }, [defaultTheme]);

    const handleThemeClick = (id) => {
        setThemes((prevThemes) =>
            prevThemes.map((theme) =>
                theme.id === id ? { ...theme, isActive: true } : { ...theme, isActive: false }
            )
        );

        setDefaultTheme(id === 1 ? "dark" : "light");
    };

    const themesList = themes.map((el) => (
        <div key={el.id} onClick={() => handleThemeClick(el.id)}>
            <p className={`${el.isActive ? "active_li" : ""} navbar__nav__link`}>
                {el.title}
            </p>
        </div>
    ));

    return <div>{themesList}</div>;
};

export default ThemeToggle;

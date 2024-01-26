import React from "react";
import { theme } from "@/db/theme";
import ThemeToggle from "./ThemeToggle";

const ThemeList = () => {
    const [themes, setThemes] = React.useState(theme);

    return <ThemeToggle themes={themes} setThemes={setThemes} />;
};

export default ThemeList;

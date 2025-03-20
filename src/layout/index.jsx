import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "@/ThemeContext";

const Layout = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <main className={`Layout ${theme}-theme`}>
            <section>
                <Outlet />
            </section>
        </main>
    );
};

export default Layout;

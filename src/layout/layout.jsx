import { Navbar } from "@/shared/components";
import { Outlet } from "react-router-dom";

import "@/styles/index.scss";

const Layout = () => {
    return (
        <main className="Layout">
            <Navbar />
            <section>
                <Outlet />
            </section>
        </main>
    );
};
export default Layout;

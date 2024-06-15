import { Footer, Navbar } from '@/shared/components';
import { Outlet } from 'react-router-dom';

import '@/styles/index.scss';
import { useState } from 'react';

const Layout = () => {
    const [theme, setTheme] = useState('dark');

    return (
        <main className={`Layout ${theme}`}>
            <Navbar setTheme={setTheme} />
            <section className="Layout__section">
                <Outlet />
            </section>
            <Footer theme={theme} />
        </main>
    );
};
export default Layout;

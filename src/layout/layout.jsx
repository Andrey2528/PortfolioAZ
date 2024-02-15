import { Footer, Navbar } from '@/shared/components';
import { Outlet } from 'react-router-dom';

import '@/styles/index.scss';
import { useState } from 'react';

const Layout = () => {
    const [theme, setTheme] = useState('dark');

    return (
        <main className={`Layout ${theme}`}>
            <Navbar setTheme={setTheme} />
            <section>
                <Outlet />
            </section>
            <Footer />
        </main>
    );
};
export default Layout;

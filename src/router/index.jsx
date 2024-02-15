import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/HomePage.jsx';
import InfoPage from '@/pages/InfoPage.jsx';

import Layout from '@/layout/layout';

import { PAGE_HOME, PAGE_INFO } from './routes';

const routes = [
    {
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_INFO, element: <InfoPage /> },
        ],
    },
];

export default createBrowserRouter(routes);

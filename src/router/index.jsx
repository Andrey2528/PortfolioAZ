import { createHashRouter } from 'react-router-dom';

import HomePage from '@/pages/HomePage.jsx';
import InfoPage from '@/pages/InfoPage.jsx';
import SertificatePage from '@/pages/SertificatePage';

import Layout from '@/layout/layout';

import { PAGE_HOME, PAGE_INFO, PAGE_SERTIFICATE } from './routes';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_INFO, element: <InfoPage /> },
            { path: PAGE_SERTIFICATE, element: <SertificatePage /> },
        ],
    },
];

export default createHashRouter(routes);

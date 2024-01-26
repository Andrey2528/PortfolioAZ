import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import InfoPage from "../pages/InfoPage";
import ProjectPage from "../pages/ProjectPage";

import Layout from "@/layout/layout";

import { PAGE_HOME, PAGE_INFO, PAGE_PROJECT } from "./routes";

const routes = [
    {
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_INFO, element: <InfoPage /> },
            { path: PAGE_PROJECT, element: <ProjectPage /> },
        ],
    },
];

export default createBrowserRouter(routes);

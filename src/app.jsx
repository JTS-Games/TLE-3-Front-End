import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx'
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from './home.jsx'
import Lesson from './Lesson.jsx'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/playlists',
                element: <Playlists />,
            },
            {
                path: '/playlist/:id', // Dynamische route voor specifieke playlist
                element: <PlaylistView />,
            },
        ],
            {
                path: '/signBook',
                element: <SignBook/>,
            },
            {
                path: '/signs/:id',
                element: <SignDetail/>,
            },
            {
                path: "*",
                element: <ErrorPage/>,
            }
        ]
    },
    {
        element: <LayoutNoNav />,
        children: [
            {
                path: '/lesson/',
                element: <Lesson />,
            },
            {
                path: '/test/:id',
                element: <Test />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/SSOCallback",
                element: <SSOCallback/>
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

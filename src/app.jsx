import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx'
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from './home.jsx'
import Lesson from './Lesson.jsx'
import Playlists from "./Playlists.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/Playlists',
                element: <Playlists/>,
            },
        ]
    },
    {
        element: <LayoutNoNav />,
        children: [
            {
                path: '/lesson/',
                element: <Lesson />,
            },
        ]
    }
])
function App() {
    return <RouterProvider router={router} />
}

export default App

import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx'
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from './home.jsx'
import Lesson from './Lesson.jsx'
import Playlists from "./playlists.jsx";
import PlaylistView from "./playlistView.jsx";

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
            {
                path: '/Playlistview',
                element: <PlaylistView/>,
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

import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx'
import Home from './home.jsx'
import Profile from "./Profile.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/Profile',
                element: <Profile/>,
            },
        ]
    }
])
function App() {
    return <RouterProvider router={router} />
}

export default App

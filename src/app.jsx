import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx'
import Home from './home.jsx'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
        ]
    }
])
function App() {
    return <RouterProvider router={router} />
}

export default App

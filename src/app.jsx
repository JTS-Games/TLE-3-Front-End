import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx'
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from './home.jsx'
import SignBook from "./SignBook.jsx";
import SignDetail from "./SignDetail.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/signBook',
                element: <SignBook/>,
            },
            {
                path: '/signs/:id',
                element: <SignDetail/>,
            },
        ]
    },
    {
        element: <LayoutNoNav />,
        children: [
            {

            },
        ]
    }
])
function App() {
    return <RouterProvider router={router} />
}

export default App

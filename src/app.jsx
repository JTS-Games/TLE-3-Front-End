import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from "./home.jsx";
import Lesson from "./Lesson.jsx";
import Playlists from "./playlists.jsx";
import PlaylistView from "./playlistView.jsx";
import SignBook from "./SignBook.jsx";
import SignDetail from "./SignDetail.jsx";
import ErrorPage from "./errorPage.jsx";
import Test from "./test.jsx";
import Login from "./login.jsx";
import SSOCallback from "./SSOCallback.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/playlists",
                element: <Playlists />,
            },
            {
                path: "/playlist/:id",
                element: <PlaylistView />,
            },
            {
                path: "/signBook",
                element: <SignBook />,
            },
            {
                path: "/signs/:id",
                element: <SignDetail />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
    {
        element: <LayoutNoNav />,
        children: [
            {
                path: "/lesson/",
                element: <Lesson />,
            },
            {
                path: "/test/:id",
                element: <Test />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/SSOCallback",
                element: <SSOCallback />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

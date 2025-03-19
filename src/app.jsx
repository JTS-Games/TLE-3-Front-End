import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import LayoutNoNav from "./layoutNoNav.jsx";
import SignBook from "./SignBook.jsx";
import SignDetail from "./SignDetail.jsx";
import Home from "./home.jsx";
import Lesson from "./Lesson.jsx";
import Test from "./Test.jsx";
import SelfLesson from "./SelfLesson.jsx";
import Login from "./login.jsx";
import ProtectedRoute from "./component/PrivateRoute.jsx";
import SSOCallback from "./SSOCallback.jsx";
import ErrorPage from "./errorPage.jsx";
import PlaylistView from "./playlistView.jsx";
import Playlists from "./playlists.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<ProtectedRoute><Home/></ProtectedRoute>
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
                path: '/signBook',
                element: <ProtectedRoute><SignBook/></ProtectedRoute>
            },
            {
                path: '/signs/:id',
                element: <ProtectedRoute><SignDetail/></ProtectedRoute>
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
                path: '/lessons/:id',
                element: <ProtectedRoute><Lesson /></ProtectedRoute>
            },
            {
                path: '/selflessons/:id',
                element: <SelfLesson />,
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
    return <RouterProvider router={router} />
}

export default App;

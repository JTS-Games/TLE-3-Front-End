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

import ErrorPage from "./errorPage.jsx";
import PlaylistView from "./playlistView.jsx";
import Playlists from "./playlists.jsx";
import PlayPlaylist from "./PlayPlaylist.jsx";
// import ProtectedRoute from "./component/PrivateRoute.jsx";
import SSOCallback from "./component/SSOCallback.jsx";
import TokenProvider from "./component/TokenContext.jsx";
import SSOCallbackLogin from "./component/SSOCallbackLogin.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/home',
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
                path: "/signBook",
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
                element: <SSOCallback />,
            },
            {
                path: "/SSOCallbackLogin",
                element: <SSOCallbackLogin/>
            },

            {
                path: "/playplaylist/:id",
                element: <PlayPlaylist />,
            },

        ],
    },
]);

function App() {
    return (
        <TokenProvider>
            <RouterProvider router={router} />
        </TokenProvider>
    );
}

export default App;

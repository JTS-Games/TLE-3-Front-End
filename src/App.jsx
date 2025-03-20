import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import LayoutNoNav1 from "./LayoutNoNav1.jsx";
import SignBook from "./SignBook.jsx";
import SignDetail from "./SignDetail.jsx";
import Home from "./Home.jsx";
import Lesson1 from "./Lesson1.jsx";
import Test1 from "./Test1.jsx";
import SelfLesson1 from "./SelfLesson1.jsx";
import Login from "./Login.jsx";
import ProtectedRoute from "./component/PrivateRoute.jsx";
import SSOCallback from "./component/SSOCallback.jsx";
import ErrorPage1 from "./ErrorPage1.jsx";
import PlaylistView from "./PlaylistView.jsx";
import Playlists from "./Playlist.jsx";
import PlayPlaylist from "./PlayPlaylist.jsx";
import TokenProvider from "./component/TokenContext.jsx";
import SSOCallbackLogin from "./component/SSOCallbackLogin.jsx";

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
                element: <ProtectedRoute><Playlists/></ProtectedRoute>,
            },
            {
                path: "/playlist/:id",
                element: <ProtectedRoute><PlaylistView/></ProtectedRoute>,
            },
            {
                path: "/signBook",
                element: <ProtectedRoute><SignBook/></ProtectedRoute>,
            },
            {
                path: '/signs/:id',
                element: <ProtectedRoute><SignDetail/></ProtectedRoute>,
            },
            {
                path: "*",
                element: <ErrorPage1/>,
            }
        ]
    },
    {
        element: <LayoutNoNav1 />,
        children: [
            {
                path: '/lessons/:id',
                element: <ProtectedRoute><Lesson1 /></ProtectedRoute>
            },
            {
                path: '/selflessons/:id',
                element: <ProtectedRoute><SelfLesson1/></ProtectedRoute>,
            },
            {
                path: '/test/:id',
                element: <ProtectedRoute><Test1/></ProtectedRoute>,
            },
            {
                path: "/",
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
                element: <ProtectedRoute><PlayPlaylist/></ProtectedRoute>,
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

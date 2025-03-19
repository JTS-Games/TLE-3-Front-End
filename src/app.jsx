import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from './home.jsx';
import SignBook from "./SignBook.jsx";
import SignDetail from "./SignDetail.jsx";
import Lesson from './Lesson.jsx';
import Login from "./login.jsx";
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
                path: '/',
                element: <Home />,
            },
            {
                path: '/signBook',
                element: <PrivateRoute><SignBook/></PrivateRoute>,
            },
            {
                path: '/signs/:id',
                element: <SignDetail />,
            },
        ]
    },
    {
        element: <LayoutNoNav />,
        children: [
            {
                path: '/lessons/:id',
                element: <Lesson />,
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
            }
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

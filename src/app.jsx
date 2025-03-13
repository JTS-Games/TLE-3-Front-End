import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from "./home.jsx";
import Lesson from "./Lesson.jsx";
import Login from "./login.jsx";
import ProtectedRoute from "./component/PrivateRoute.jsx";
import SSOCallback from "./SSOCallback.jsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                path: "/login",
                element: <Login />,
            },
            {
                path: "/SSOCallback",
                element: <SSOCallback/>
            }
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

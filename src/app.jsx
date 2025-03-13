import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import LayoutNoNav from "./layoutNoNav.jsx";
import Home from './home.jsx'
import SignBook from "./SignBook.jsx";
import SignDetail from "./SignDetail.jsx";
import Lesson from './Lesson.jsx'
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
                path: '/lessons/:id',
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
    return <RouterProvider router={router} />
}

export default App

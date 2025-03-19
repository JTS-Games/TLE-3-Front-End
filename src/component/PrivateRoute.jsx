import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Prevent initial render

    useEffect(() => {
        const token = localStorage.getItem("responseToken");
        const expiry = localStorage.getItem("responseTokenExpiry");

        if (!token || !expiry || Date.now() > Number(expiry)) {
            console.log("responseToken is expired or missing.");
            localStorage.clear();
            navigate("/");
        } else {
            setIsCheckingAuth(false);
        }
    }, [navigate]);

    if (isCheckingAuth) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

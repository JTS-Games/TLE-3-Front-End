import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("responseToken");
    const expiry = localStorage.getItem("responseTokenExpiry");
    const navigate = useNavigate();

    useEffect(() => {
        // If the token is missing or expired, clear the localStorage and navigate to login
        if (!token || !expiry || Date.now() > Number(expiry)) {
            console.log("responseToken is expired or missing.");
            localStorage.clear();
            navigate("/login");
        }
    }, [token, expiry, navigate]);

    // If the token is valid, render the children components
    if (!token || !expiry || Date.now() > Number(expiry)) {
        return null; // Or a loading indicator, but don't render children
    }

    return <>{children}</>;
};

export default ProtectedRoute;

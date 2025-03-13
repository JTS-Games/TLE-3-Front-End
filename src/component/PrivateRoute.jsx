import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const [isValid, setIsValid] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(`${token} hallo`)

        if (!token) {
            setIsValid(false);
            return;
        }

        axios.get('https://cmgt.hr.nl/api/validate-sso-token', {
            headers: { Token: token }
        })
            .then(response => {
                if (response.status === 200) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
            })
            .catch(error => {
                console.error("Token validation failed:", error);
                setIsValid(false);
            });
    }, []);

    useEffect(() => {
        if (isValid === false) {
            navigate('/login');
        }
    }, [isValid, navigate]);

    if (isValid === null) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SSOCallback = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const email = params.get('email');
        const token = params.get('token');

        console.log( Object.fromEntries(params.entries()))
        console.log(token)

        if (name && email && token) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);

            setUserData({ name, email, token });
        } else {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        if (userData) {
            navigate('/lessen')
        }
    }, [userData, navigate]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>Redirecting...</div>
    );
};

export default SSOCallback;

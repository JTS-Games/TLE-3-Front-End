import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SSOCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const email = params.get('email');
        const token = params.get('token');
        const loginCode = sessionStorage.getItem("loginCode")

        if (name && email && token) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);

            registerUser(name, email, token, loginCode);
        } else {
            console.error("Er mist gegevens voor het registreren.")
            navigate('/login');
        }

        async function registerUser(name, email, token, loginCode) {
            try {
                const response = await fetch('http://145.24.223.113:8000/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        token: token,
                        role: "student",
                        email: email,
                        loginCode: loginCode,
                    })
                });

                if (!response.ok) {
                    const responseText = await response.text();
                    console.error('Failed request:', response.status, responseText, loginCode);
                    sessionStorage.clear()
                    localStorage.clear()
                    navigate('/login');
                    return;
                }

                const data = await response.json();
                console.log('Success:', JSON.stringify(data));

                if (data.responseToken) {
                    const expiresAt = Date.now() + 5 * 60 * 60 * 1000;
                    localStorage.setItem('responseToken', data.responseToken);
                    localStorage.setItem('responseTokenExpiry', expiresAt.toString());

                    setTimeout(() => {
                        localStorage.removeItem('responseToken');
                        localStorage.removeItem('responseTokenExpiry');
                        console.log("responseToken has expired and has been removed.");
                    }, expiresAt - Date.now());
                } else {
                    console.error("responseToken niet ontvangen in de response")
                }

                navigate('/signbook');
            } catch (error) {
                console.error('Error:', error);
                navigate('/login');
            }
        }
    }, [navigate]);

    return <h1>Loading...</h1>;
};

export default SSOCallback;

import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const SSOCallbackLogin = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const email = params.get('email');
        const token = params.get('token');

        if (name && email && token) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);

            loginUser(name, email, token);
        } else {
            navigate('/');
        }

        async function loginUser(name, email, token) {
            try {
                const response = await fetch(`http://145.24.223.113:8000/auth/login?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                            name: name,
                            token: token,
                            email: email
                        })
                });

                if (!response.ok) {
                    const responseText = await response.text();
                    console.error('Failed request:', response.status, responseText);
                    sessionStorage.clear()
                    localStorage.clear()
                    navigate('/');
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

                navigate('/home');
            } catch (error) {
                console.error('Error:', error);
                navigate('/');
            }
        }
    }, [navigate])
}

export default SSOCallbackLogin
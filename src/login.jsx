import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('token');
        if (userData) {
            setIsLoggedIn(true);
            // navigate('/Lessen');
        }
    }, [navigate]);

    const handleLogin = () => {
        const redirectUrl = encodeURIComponent('http://localhost:5173/SSOCallback');
        window.location.href = `https://cmgt.hr.nl/chat-login/handle/tle2-1?redirect=${redirectUrl}`;
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        setIsLoggedIn(false);
        const redirectUrl = encodeURIComponent('http://localhost:5173/login')
        window.location.href = `https://cmgt.hr.nl/dashboard/projects?redirect=${redirectUrl}`
    };

    return (
        <main className="flex flex-col p-2.5 h-screen lg:flex-row">
            <section
                className="flex flex-col justify-between h-2/5 md:h-full md:w-2/5 md:p-10 p-5 text-white rounded-[10px] bg-blue-white-gradient bg-cover">
                <div className="flex items-center">
                    <p className="font-kulim text-[0.875rem] md:text-[1.5rem]">KEUZEVAK</p>
                    <span className="w-6 h-[2px] mx-2 md:mx-5 bg-white"></span>
                    <p className="font-kulim text-[0.875rem] md:text-[1.5rem]">IVGGBI01K</p>
                </div>
                <div className="font-kulim">
                    <h1 className="font-semibold italic text-[2.25rem] md:text-[4rem] md:py-3">GEBAREN</h1>
                    <h1 className="font-semibold italic text-[2.25rem] md:text-[4rem] md:py-3">BIJ INTAKE</h1>
                    <p className="font-light hidden md:visible md:text-2xl">Leer, oefen en onthoud gebaren op een
                        interactive manier.</p>
                </div>
            </section>
            <section className="flex justify-center items-center h-3/5 md:h-full md:w-3/5 ">
                    <div>
                        <button onClick={handleLogin} className="font-kulim bg-[#168FFF] text-white py-2 px-12 rounded-full">
                            Login met HR
                        </button>
                    </div>
                {isLoggedIn && (
                    <button onClick={handleLogout} className="font-kulim bg-[#FF5733] text-white py-2 px-12 rounded-full">
                        Logout
                    </button>
                )}
            </section>
        </main>
    );
};

export default Login
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginCode, setLoginCode] = useState('')
    const [isCodeVerified, setIsCodeVerified] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const storedToken = localStorage.getItem("responseToken")
        if (storedToken) {
            navigate("/home")
        }
    }, [navigate])

    const handleVerifyCode = async () => {
        if (loginCode.length === 4) {
            sessionStorage.setItem("loginCode", loginCode)
            setIsCodeVerified(true)
        } else {
            alert("Invalid login code. Please enter a valid 4-character code.")
        }
    };

    const handleRegister = () => {
        const redirectUrl = encodeURIComponent("http://145.24.223.147/SSOCallback");
        window.location.href = `https://cmgt.hr.nl/chat-login/handle/tle2-1?redirect=${redirectUrl}`
    };

    const handleLogin = () => {
        const redirectUrl = encodeURIComponent("http://145.24.223.147/SSOCallbackLogin")
        window.location.href = `https://cmgt.hr.nl/chat-login/handle/tle2-1?redirect=${redirectUrl}`
    }

    // const handleLogout = () => {
    //     const token = localStorage.getItem("responseToken")
    //
    //     if (token) {
    //         const redirectUrl = encodeURIComponent("http://localhost:5173/Login")
    //         window.location.href = `https://cmgt.hr.nl/logout?redirect=${redirectUrl}`
    //
    //         localStorage.clear()
    //         sessionStorage.clear()
    //     } else {
    //         console.error("No responseToken found in localStorage.")
    //         navigate('/login')
    //     }
    // };

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
                    <p className="font-light hidden md:flex md:text-2xl">Leer, oefen en onthoud gebaren op een
                        interactive manier.</p>
                </div>
            </section>
            <section className="flex justify-center items-center h-3/5 md:h-full md:w-3/5 flex-col md:flex-row">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="flex flex-col">
                        <input
                            type="text"
                            value={loginCode}
                            onChange={(e) => setLoginCode(e.target.value)}
                            maxLength={4}
                            className="mb-4 rounded-full min-w-[266px] text-center py-2"
                            placeholder="0000"
                        />
                        <button onClick={handleVerifyCode}
                                className={`
                                font-kulim bg-[#168FFF] text-white py-2 min-w-[266px]  rounded-full
                                ${isCodeVerified ? 'bg-gray-400' : 'bg-[#168FFF]'}
                                ${isCodeVerified ? 'text-gray-500' : 'text-white'}
                                transition-all duration-1000 ease-out
                                `}
                                disabled={isCodeVerified}>
                            Indienen
                        </button>
                    </div>

                    <span className="w-2 h-2 rounded-full bg-[#CCE6FE] my-6"></span>

                    <div>
                        <button onClick={handleRegister}
                                className={`
                                font-kulim py-2 min-w-[266px] rounded-full 
                                ${isCodeVerified ? 'bg-[#168FFF]' : 'bg-gray-400'}
                                ${isCodeVerified ? 'text-white' : 'text-gray-500'}
                                transition-all duration-1000 ease-in
                                `}
                                disabled={!isCodeVerified}>
                            Registreer met HR
                        </button>
                    </div>
                </div>

                <span className="md:w-[5px] w-80 md:mx-2 my-12 md:h-96 h-[5px] rounded-full bg-[#CCE6FE]"></span>

                <div className="w-full flex justify-center">
                    <button onClick={handleLogin}
                            className={`
                                font-kulim py-2 min-w-[266px] rounded-full bg-[#168FFF] text-white
                                `}>
                        Login met HR
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Login
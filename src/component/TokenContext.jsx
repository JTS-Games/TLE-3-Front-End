import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export const useToken = () => {
    return useContext(TokenContext);  // Ensure this hook is used within the context provider
};

const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isValid, setIsValid] = useState(null);  // Track token validity

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            validateToken(storedToken);
        } else {
            setIsValid(false);  // Token not present
        }
    }, []);

    const validateToken = (token) => {
        fetch('https://cmgt.hr.nl/api/validate-sso-token', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
            })
            .catch(() => {
                setIsValid(false);
            });
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setToken(null);
        setIsValid(false);
    };

    return (
        <TokenContext.Provider value={{ token, isValid, setToken, validateToken, logout }}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenProvider;

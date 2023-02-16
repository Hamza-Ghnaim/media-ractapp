import React, { createContext, useState }  from 'react';

const AuthContext = createContext();

const AuthProvider = (props)=>{

    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [userInfo, setUserInfo] = useState("");

    const login = () => {
        setIsAuthenticated(true);
    };
    
    const logout = () => {
        setIsAuthenticated(false);
    };

    const fill = () => {
        setUserInfo(JSON.parse(localStorage.userinfo));
    };
    
    const empty = () => {
        setIsAuthenticated("");
    };

    

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout,fill,empty }}>
            {props.children}
        </AuthContext.Provider>
        );
}

export { AuthContext, AuthProvider };
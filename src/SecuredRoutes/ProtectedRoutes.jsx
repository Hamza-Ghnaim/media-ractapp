import React,{ useContext } from "react";
import AuthContext from "../ContextFolder/Context";
import { Navigate, Outlet } from "react-router";
const ProtectedRoutes = () => {
    let isAuthenticated = localStorage.getItem("userinfo");
    const {isLogged}=useContext(AuthContext);
    return ((isAuthenticated&&isLogged) ? <Outlet /> : <Navigate to="/" />);
};

export default ProtectedRoutes;

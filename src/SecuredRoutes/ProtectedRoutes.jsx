import React,{useState,useContext} from "react";
import { Navigate,Outlet, Route } from "react-router";
import {BrowserRouter,Routes, useLocation} from "react-router-dom";
import {AuthContext} from "../ContextFolder/Context"
const ProtectedRoutes = ()=>{
    const { isAuthenticated } = useContext(AuthContext);
    const { userInfo } = useContext(AuthContext);

    return(isAuthenticated?<Outlet/> : <Navigate to="/"/>)
    
}

export default ProtectedRoutes;
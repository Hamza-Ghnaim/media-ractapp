import React,{useState} from "react";
import { Navigate,Outlet } from "react-router";
const ProtectedRoutes = ()=>{
    let isAuth =true;
    return(
        isAuth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default ProtectedRoutes;
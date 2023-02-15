import React,{useState,useContext} from "react";
import { Navigate,Outlet } from "react-router";
import Context from "../ContextFolder/Context";
const ProtectedRoutes = ()=>{
    let isAuth =true;
    return(
        isAuth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default ProtectedRoutes;
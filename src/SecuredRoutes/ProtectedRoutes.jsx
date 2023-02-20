import React from "react";
import { Navigate, Outlet } from "react-router";
const ProtectedRoutes = () => {
  let isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;

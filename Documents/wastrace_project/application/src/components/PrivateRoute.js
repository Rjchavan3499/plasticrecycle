// PrivateRoute.js sample
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/client-login" />;
  }
  return children;
};

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "";

const ProtectedRoute = ({ children }) => {
  let { user } = UserAuth();
  if (!user) {
    return <Navigate to="/admin" />;
  }
  return children;
};

export default ProtectedRoute;

import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const NotRequireAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.session.isAuthenticated);
  return isAuthenticated ? <Navigate to="/Stores" /> : children;
};

import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedROles }) => {
  const { auth } = useAuth();
  const locaion = useLocation();

  return (
    auth?.voterID
      ? <Outlet />
      : <Navigate to="/auth" state={{ from: locaion }} replace />
  )
};

export default RequireAuth;

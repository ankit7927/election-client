import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedROles }) => {
  const { auth } = useAuth();
  const locaion = useLocation();

  return <div>RequireAuth</div>;
};

export default RequireAuth;

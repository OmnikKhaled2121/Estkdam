import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router";
import { isAuthenticated } from "../lib/api";

export default function ProtectedRoute({ children, to }) {
  const { accessToken, checkLoggedIn } = useContext(UserContext);

  if (accessToken) {
    return children;
  } else {
    localStorage.removeItem("userToken");
    return <Navigate to={to ? to : "/Login"} replace />;
  }
}

import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router";
import { isAuthenticated } from "../lib/api";

export default function ProtectedRoute({ children }) {
  const { accessToken, checkLoggedIn } = useContext(UserContext);

  if (accessToken) {
    console.log("token found");
    return children;
  } else {
    console.log("token not");
    localStorage.removeItem("userToken");
    return <Navigate to={"/Login"} replace />;
  }
}

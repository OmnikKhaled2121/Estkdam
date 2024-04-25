import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../lib/api";
import { Navigate } from "react-router";

export const UserContext = createContext(" ");

export default function UserContextProvider(props) {
  
  const [currentUser, setCurrentUser] = useState(isAuthenticated()?.userData);
  const [accessToken, setaccessToken] = useState(
    isAuthenticated()?.accessToken
  );

  const LogOut = () => {
    localStorage.removeItem("USER");
    localStorage.removeItem("employeeID")
    setCurrentUser(null);
    setaccessToken(null);
    <Navigate to={"/"} replace />;
  };
  const checkLoggedIn = () => {
    let userData = isAuthenticated();
    setCurrentUser(userData?.userData);
    setaccessToken(userData?.accessToken);
    // console.log("se3a check login", userData?.userData);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);
  useEffect(() => {
    // console.log("ajaj", currentUser);
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        accessToken,
        setCurrentUser,
        checkLoggedIn: checkLoggedIn,
        LogOut: LogOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

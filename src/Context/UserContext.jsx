import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../lib/api";

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
    window.location.href = import.meta.env.BASE_URL;
  };
  const checkLoggedIn = () => {
    let userData = isAuthenticated();
    setCurrentUser(userData?.userData);
    setaccessToken(userData?.accessToken);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);
  useEffect(() => {
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

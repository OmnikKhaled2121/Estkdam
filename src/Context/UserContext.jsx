import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../lib/api";

export const UserContext = createContext(" ");

export default function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(isAuthenticated()?.userData);
  const [accessToken, setaccessToken] = useState(
    isAuthenticated()?.accessToken
  );

  const checkLoggedIn = () => {
    let userData = isAuthenticated();
    setCurrentUser(userData?.userData);
    setaccessToken(userData?.accessToken);
    console.log("se3a check login", userData?.userData);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);
  useEffect(() => {
    console.log("ajaj", currentUser);
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        accessToken,
        checkLoggedIn: checkLoggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

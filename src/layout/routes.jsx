import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import EmpProfile from "../Pages/EmpProfile";
import EstkdamRequest from "../Pages/EstkdamRequest";
import EstkdamOffices from "../Pages/EstkdamOffices";
import KafalaTransfer from "../Pages/KafalaTransfer";
import CommonQuestions from "./../Pages/CommonQuestions";
import EstkdamPolices from "./../Pages/EstkdamPolices";
import EstkdamJourney from "./../Pages/EstkdamJourney";
import ContactUs from "../Pages/ContactUs";
import LoginOrderCompletetion from "../Pages/LoginOrderCompletetion";

import LoginLayout from "./LoginLayout";
import Login from "../Pages/Login";

import MultiCards from "../components/MultiCards";


export default function Routers() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "EstkdamRequest", element: <EstkdamRequest /> },
        { path: "EstkdamOffices", element: <EstkdamOffices /> },
        { path: "KafalaTransfer", element: <KafalaTransfer /> },
        { path: "CommonQuestions", element: <CommonQuestions /> },
        { path: "EstkdamPolices", element: <EstkdamPolices /> },
        { path: "EstkdamJourney", element: <EstkdamJourney /> },
        { path: "ContactUs", element: <ContactUs /> },
        { path: "empProfile", element: <EmpProfile /> },
        { path: "MultiCards", element: <MultiCards /> },
      ],
    },
    {
      path: "LoginOrderCompletetion",
      element: <LoginOrderCompletetion />,
    },
    {
      path: "Login",
      element: <Login />,
    },
  ]);

  return routers;
}

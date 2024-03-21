import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import EmpProfile from "../Pages/EmpProfile";
import EstkdamRequest from "../Pages/EstkdamRequest";
import EstkdamOffices from "../Pages/EstkdamOffices";
import KafalaTransfer from "../Pages/KafalaTransfer";
import CommonQuestions from './../Pages/CommonQuestions';

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
        { path: "/empProfile", element: <EmpProfile /> },
      ],
    },
  ]);

  return routers;
}

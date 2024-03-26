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
import Login from "../Pages/Login";
import Trackorders from "../Pages/Trackorders";
import MultiCards from "../components/MultiCards";
import Registeration from "../Pages/Registeration";
import RegisterPhoneNumber from "../Pages/RegisterPhoneNumber";
import PhoneNumberConfirm from "../Pages/PhoneNumberConfirm";
import Welcome from "../Pages/Welcome";
import CompleteOrder from "../Pages/CompleteOrder";
import OrderReview from "../Pages/OrderReview";
import ProfileSettings from "../Pages/ProfileSettings";
import Profile from "../Pages/Profile";
import EditProfilePopUp from "../components/EditProfilePopUp";

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
        { path: "TrackOrders", element: <Trackorders /> },
        { path: "Profile", element: <Profile /> },
        { path: "ProfileSettings", element: <ProfileSettings /> },
        { path: "EditProfilePopUp", element: <EditProfilePopUp /> },
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
    {
      path: "Registeration",
      element: <Registeration />,
    },
    {
      path: "RegisterPhoneNumber",
      element: <RegisterPhoneNumber />,
    },
    {
      path: "PhoneNumberConfirm",
      element: <PhoneNumberConfirm />,
    },
    {
      path: "Welcome",
      element: <Welcome />,
    },
    {
      path: "CompleteOrder",
      element: <CompleteOrder />,
    },
    {
      path: "OrderReview",
      element: <OrderReview />,
    },
  ]);

  return routers;
}

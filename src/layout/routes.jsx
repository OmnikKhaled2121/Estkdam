import React, { useContext } from "react";
import { Navigate, createBrowserRouter, useParams } from "react-router-dom";
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
import CardsSlider from "../components/CardsSlider";
import { UserContext } from "../Context/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../components/NotFound";

export default function Routers() {
  const { currentUser } = useContext(UserContext);
  const employeeID = JSON.parse(localStorage.getItem("employeeID"))?.employeeID;
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "EstkdamRequest", element: <EstkdamRequest /> },
        { path: "EstkdamOffices", element: <EstkdamOffices /> },
        { path: "KafalaTransfer", element: <KafalaTransfer /> },
        { path: "KafalaTransfer/:profession", element: <KafalaTransfer /> },
        { path: "CommonQuestions", element: <CommonQuestions /> },
        { path: "EstkdamPolices", element: <EstkdamPolices /> },
        { path: "EstkdamJourney", element: <EstkdamJourney /> },
        { path: "ContactUs", element: <ContactUs /> },
        {
          path: "empProfile/:id",
          element: (
            // <ProtectedRoute>
              <EmpProfile />
            // </ProtectedRoute>
          ),
        },
        { path: "MultiCards", element: <MultiCards /> },
        { path: "TrackOrders", element: <Trackorders /> },
        {
          path: "Profile",
          element: (
            <ProtectedRoute>
              <Profile to="/" />
            </ProtectedRoute>
          ),
        },
        {
          path: "ProfileSettings",
          element: (
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          ),
        },
        { path: "EditProfilePopUp", element: <EditProfilePopUp /> },
        { path: "CardsSlider", element: <CardsSlider /> },
        { path: "*", element: <NotFound /> },
      ],
    },

    {
      path: "LoginOrderCompletetion",
      element: currentUser ? (
        <Navigate to={`/CompleteOrder/${employeeID}`} />
      ) : (
        <LoginOrderCompletetion />
      ),
    },
    {
      path: "Login",
      element: currentUser ? <Navigate to="/" replace /> : <Login />,
    },
    {
      path: "Registeration",
      element: currentUser ? <Navigate to="/" replace /> : <Registeration />,
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
      path: "CompleteOrder/:id",

      element: (
        <ProtectedRoute to={"/LoginOrderCompletetion"}>
          <CompleteOrder />
        </ProtectedRoute>
      ),
    },
    {
      path: "OrderReview",
      element: <OrderReview />,
    },
  ]);

  return routers;
}

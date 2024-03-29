import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./layout/routes";

function App() {
  return (
    <>
      <RouterProvider router={Routers()} />
    </>
  );
}

export default App;

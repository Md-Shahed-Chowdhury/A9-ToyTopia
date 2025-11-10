import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPass from "../Pages/ForgetPass";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import PageNotFound from "../Pages/PageNotFound";
import ToyDetails from "../Pages/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/forget-password",
        element: <ForgetPass></ForgetPass>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/toyDetails/:id",
        element: <ToyDetails></ToyDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default router;

import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPass from "../Pages/ForgetPass";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home></Home>
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
        path:"/forget-password",
        element:<ForgetPass></ForgetPass>
      },
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/myProfile",
        element:<MyProfile></MyProfile>
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  }
]);
export default router;

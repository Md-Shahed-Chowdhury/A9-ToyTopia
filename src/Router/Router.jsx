import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPass from "../Pages/ForgetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
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
    ],
  },
]);
export default router;

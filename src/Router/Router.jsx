import { createBrowserRouter } from "react-router";
import React, { Suspense } from 'react';
import Root from "../Layouts/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPass from "../Pages/ForgetPass";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import PageNotFound from "../Pages/PageNotFound";
import ToyDetails from "../Pages/ToyDetails";
import AllToys from "../Pages/AllToys";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>,
          </PrivateRoute>
        )
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader:()=> { return fetch('/allToys.json')}
      },
      {
        path: "/allToys",
        element:(
          <PrivateRoute>
            <AllToys></AllToys>
          </PrivateRoute>
        ),
        loader: () => {return fetch('/allToys.json')},
        
      }
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default router;

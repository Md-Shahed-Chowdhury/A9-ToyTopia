import React, { use } from "react";
import { Navigate, useNavigate } from "react-router";
import { MyContext } from "../Provider/ContextProvider";
import { GridLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();

  const { user,loading } = use(MyContext);
//   console.log("private route user:", user);
    if(loading){
        return <div className="min-h-[calc(100vh-285px)] w-full flex justify-center items-center"><GridLoader /></div>;
    }
  if (!user) {
    // navigate("/login");
    return <Navigate to="/login" replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;

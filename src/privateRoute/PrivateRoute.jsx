import React, { use } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { MyContext } from "../Provider/ContextProvider";
import { GridLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();
      const location = useLocation();
      console.log("private route location:", location);
      

  const { user,loading } = use(MyContext);
//   console.log("private route user:", user);
    if(loading){
        return <div className="min-h-[calc(100vh-285px)] w-full flex justify-center items-center"><GridLoader /></div>;
    }
  if (!user) {
    // navigate("/login");
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;

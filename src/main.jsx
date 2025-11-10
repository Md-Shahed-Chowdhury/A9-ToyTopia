import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./Router/Router.jsx";
import ContextProvider from "./Provider/ContextProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextProvider>
  </StrictMode>
);

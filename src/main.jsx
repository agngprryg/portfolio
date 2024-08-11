import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Beranda from "./pages/beranda.jsx";
import ErorPage from "./pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
    errorElement: <ErorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import { DoktorDashboard } from "./pages/DoktorDashboard";
import { DoktorGiris } from "./pages/DoktorGiris";
import { HastaGiris } from "./pages/HastaGiris";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  {
    path: "/hasta",
    element: <HastaGiris />,
  },
  { path: "/doktor", element: <DoktorGiris /> },
  { path: "/register", element: <Register /> },
  { path: "/doktorDashboard", element: <DoktorDashboard /> },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

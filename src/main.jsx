import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Users from "./Users.jsx";
import Cart from "./Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/cart/:userId",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

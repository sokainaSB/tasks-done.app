import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    errorElement: <h1>Sorry</h1>,
  },

  {
    path: "/page2",
    element: <Page2 />,
  },

  {
    path: "/page3",
    element: <Page3 />,
  },

  {
    path: "/page4",
    element: <Page4 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

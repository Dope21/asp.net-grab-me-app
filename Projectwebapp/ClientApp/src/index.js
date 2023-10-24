import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import MainPage from './MyPage'; 
import NewOrder from "./NewOrder";
import Accept from "./Accept";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "order",
    element: <NewOrder />,
  },
  {
    path: "accept",
    element: <Accept />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
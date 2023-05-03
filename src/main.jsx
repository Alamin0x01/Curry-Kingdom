import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import ErrorPage from "./components/ErrorPage";
import JobDetails from "./components/chefRacipesData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "jobdetails/:id",
        element: <JobDetails />,
        loader: () =>
          fetch(
            "https://chef-recipe-hunter-server-side-snowy.vercel.app/chefData"
          ),
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

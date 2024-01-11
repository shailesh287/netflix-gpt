import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    { path: "*", element: <ErrorPage /> },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

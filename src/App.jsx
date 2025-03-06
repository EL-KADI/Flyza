import { useEffect } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { initFlowbite } from "flowbite";
import "./App.css";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

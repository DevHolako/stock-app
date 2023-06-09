import { createBrowserRouter } from "react-router-dom";
import Client from "../pages/Client";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Stock from "../pages/Stock";
import Invoice from "../pages/Invoice";
import RequireLogin from "../components/RequireLogin";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },

  {
    path: "/dash",
    element: <RequireLogin />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Client />,
          },
          {
            path: "stock",
            element: <Stock />,
          },
          {
            path: "invoice",
            element: <Invoice />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

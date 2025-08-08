import React from "react";
import { createBrowserRouter } from "react-router";

import Homepage from "../Pages/Homepage";
import Allfood from "../Pages/Allfood";
import Gallery from "../Pages/Gallery";
import Singlefood from "../Pages/Singlefood";
import Buyfood from "../Pages/Buyfood";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorBig from "../Pages/ErrorBig";
import Update from "../Pages/Update";

import Layout from "../Layout";

import PrivateRoute from "../Pages/PrivateRoute";
import Myfoods from "../Pages/Myfoods";
import Addfood from "../Pages/AddFood";
import MyOrders from "../Pages/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBig />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/foods",
        element: <Allfood />,
      },
      {
        path: "/foodGallery",
        element: <Gallery />,
      },
      {
        path: "/foods/:id",
        element: <Singlefood />,
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Buyfood />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <Myfoods />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <Addfood />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorBig />,
  },
]);

export default router;

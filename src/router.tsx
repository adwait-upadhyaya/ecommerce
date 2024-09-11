import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Landing from "./pages/Landing";

import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <p>From about</p>,
      },
      {
        path: "/men",
        element: <Product title="Men" category="men's clothing" />,
      },
      {
        path: "/women",
        element: <Product title="Women" category="women's clothing" />,
      },
      {
        path: "/electronics",
        element: <Product title="Electronics" category="electronics" />,
      },
      {
        path: "/jewelery",
        element: <Product title="Jewelery" category="jewelery" />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

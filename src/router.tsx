import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Landing from "./pages/Landing";

import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import { ErrorBoundary } from "react-error-boundary";
import About from "./pages/About";
import Stores from "./pages/Stores";

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
        element: <About />,
      },
      {
        path: "/men",
        element: (
          <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <Product title="Men" category="men's clothing" />,
          </ErrorBoundary>
        ),
      },
      {
        path: "/women",
        element: (
          <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <Product title="Women" category="women's clothing" />,
          </ErrorBoundary>
        ),
      },
      {
        path: "/electronics",
        element: (
          <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <Product title="Electronics" category="electronics" />,
          </ErrorBoundary>
        ),
      },
      {
        path: "/jewelery",
        element: (
          <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <Product title="Jewelery" category="jewelery" />,
          </ErrorBoundary>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <ProductDetails />,
          </ErrorBoundary>
        ),
      },

      {
        path: "/stores",
        element: (
          <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
            <Stores />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

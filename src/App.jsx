import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import Loading from "./components/Loading"; // Loading component

// Lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));
// const Categories = lazy(() => import("./components/Categories"));

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        {/* Wrap the RouterProvider in Suspense with a fallback */}
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </>
  );
}

export default App;

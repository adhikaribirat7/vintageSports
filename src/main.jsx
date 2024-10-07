// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Product from "./components/Product.jsx";
import AddToCart from "./components/AddToCart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/products_all" element={<Product />} />
      <Route path="/cart" element={<AddToCart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>

);

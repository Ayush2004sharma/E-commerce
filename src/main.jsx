import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./page/LoginPage.jsx";
import SignupPage from "./page/SignupPage.jsx";
import Cart from "./Components/Cart.jsx";
import WishList from "./Components/WishList.jsx";
import ProductList from "./Components/ProductList.jsx";
import Navbar from "./Components/Navbar"; // Import Navbar

// State management for login status (can be done using React Context, or local state for simplicity)

const router = createBrowserRouter([
  // LoginPage is shown first when the user visits the root path
  {
    path: "/",
    element: <LoginPage />,
  },

  // After login, the user will be redirected to /home
  {
    path: "/home",
    element: (
      <>
        <Navbar /> {/* Navbar will be shown here */}
        <App /> {/* The main App layout */}
      </>
    ),
    children: [
      { path: "product", element: <ProductList /> },
      { path: "wishlist", element: <WishList /> },
      { path: "cart", element: <Cart /> },
    ],
  },

  // Additional routes for LoginPage and SignupPage
  {
    path: "loginpage",
    element: <LoginPage />,
  },
  {
    path: "signuppage",
    element: <SignupPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

// import Home from "./pages/Home";
// import Products from "./pages/Products";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/:category",
//     element: <Products />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

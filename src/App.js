import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Products />} />
    </Routes>
  );
};

export default App;

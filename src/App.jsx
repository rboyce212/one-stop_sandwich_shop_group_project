import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Menu from "./Components/Menu.jsx";
import Checkout from "./Components/Checkout.jsx";
import BYOItem from "./Components/BYOItem.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import FoodData from "./Components/APi.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/byo-item" element={<BYOItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

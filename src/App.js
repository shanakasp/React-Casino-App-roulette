// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Game from "./pages/Game";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;

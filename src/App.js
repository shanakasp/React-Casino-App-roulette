import React from "react";
import "./App.css";
import { Navbar } from "./components"; // This imports from components/index.js

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

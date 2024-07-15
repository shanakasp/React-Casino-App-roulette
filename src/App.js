// src/App.js
import React from "react";
import BettingTable from "./components/BettingTable";
import RouletteWheel from "./components/RouletteWheel";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <RouletteWheel />
      <BettingTable />
    </div>
  );
}

export default App;

// src/pages/Game.js
import React from "react";
import BetOptions from "../components/BetOptions";
import Wheel from "../components/Wheel";

const Game = () => {
  return (
    <div>
      <Wheel />
      <BetOptions />
    </div>
  );
};

export default Game;

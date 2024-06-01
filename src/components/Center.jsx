import React from "react";
import Die from "./Die";

const Center = ({ rollDice, diceValues, hold }) => {
  return (
    <div>
      <div className="center-elements">
        <button onClick={rollDice}>Roll Dice</button>
        <Die value={diceValues[0]} />
        <Die value={diceValues[1]} />
        <button onClick={hold}>Hold</button>
      </div>
    </div>
  );
};

export default Center;

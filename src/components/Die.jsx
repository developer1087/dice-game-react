import React from "react";
import die1 from "../assets/images/dice-1.png";
import die2 from "../assets/images/dice-2.png";
import die3 from "../assets/images/dice-3.png";
import die4 from "../assets/images/dice-4.png";
import die5 from "../assets/images/dice-5.png";
import die6 from "../assets/images/dice-6.png";

// this Die component renders a single die, imports all 6 dice png's paths,

const Die = ({ value }) => {
  // it gets the 'value' prop from  the Game component, which is the random number that was generated in the 'rollDice' function and set as the diceValue array - each Die component gets a different index in the array - 0 or 1.

  const diceImages = [die1, die2, die3, die4, die5, die6];
  const imgSrc = diceImages[value - 1];

  return <img src={imgSrc} alt={`Die showing ${value}`} width="50px" />;
};

export default Die;

import React from "react";

// this is the Player component, rendering the each players board and handles the player's logic.
// it receives from then Game component the players name (1 or 2), the selected score (the target score), the current score (accumulation of dice rolls), the total score (accumulation of holds) an the 'isCurrentPlayer state
const Player = ({
  playerName,
  selectedScore,
  currentScore,
  totalScore,
  isCurrentPlayer,
}) => {
  return (
    <div className={`player-area ${isCurrentPlayer ? "current-player" : ""}`}>
      <h2>{playerName}</h2>
      <h3>Target Score: {selectedScore}</h3>
      <h3>Total Score: {totalScore}</h3>
      <div className="current-score">
        <h4>CURRENT</h4>
        <p>{currentScore}</p>
      </div>
    </div>
  );
};

export default Player;

import React, { useState } from "react";
import Player from "./Player";
import Die from "./Die";
import Center from "./Center";

const Game = ({ selectedScore }) => {
  //when the game starts, the selectedScore gets passed from the App component, from the Intro, from the target score input.

  const [diceValues, setDiceValues] = useState([1, 1]); // this is the state of dice value, initially set to 1 and 1

  const [currentPlayer, setCurrentPlayer] = useState(1); // this is the state of the currentPlayer, initially set to player 1

  const [currentScores, setCurrentScores] = useState([0, 0]); // this is the state of currentScore, the accumulation of roll dice, initially set to 0 and 0 [player1 current score, player2 current score]

  const [totalScores, setTotalScores] = useState([0, 0]); // this is the state of the totalScore, the accumulation of holds, initially set to 0 and 0. [player1 total score, player2 total score]

  const [winner, setWinner] = useState(null); // this is the state of the winner player, initially set to null, so the win screen initially is not rendered, but if 'winner' get a value - it goes the win screen

  const rollDice = () => {
    // this function is set when press on the 'roll dice' button, it generates 2 random numbers array, one for each die,
    const newDiceValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];

    setDiceValues(newDiceValues);

    // it also sums the two numbers into one sum, and uses the updateCurrentScore function to update the 'current score'
    const sum = newDiceValues[0] + newDiceValues[1];
    updateCurrentScore(sum);
  };

  // this function updates the currentScore state with the sum of both dice
  const updateCurrentScore = (sum) => {
    setCurrentScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[currentPlayer - 1] += sum; // it make an array of updated sums, one sum for each player, and adds the sum to the index of the current player (0 or 1)
      return newScores;
    });
  };

  // this function gets activated when the 'hold' button get clicked, it's job is to update the total score with the accumulated current score, and then reset the current score back to 0
  const hold = () => {
    setTotalScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[currentPlayer - 1] += currentScores[currentPlayer - 1];

      // in addition, it also sets the winner, when if the player passes the target scorer (selectedScore here) - the other player wins
      if (newScores[currentPlayer - 1] > selectedScore) {
        setWinner(currentPlayer === 1 ? 2 : 1);
        // or if the player reaches exactly the target score - he wins
      } else if (newScores[currentPlayer - 1] === selectedScore) {
        setWinner(currentPlayer);
      }
      return newScores;
    });
    setCurrentScores([0, 0]); // Reset current scores
    switchPlayer();
  };

  // this function responsible for switching the player, and triggered when a player press on 'hold'
  const switchPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };

  // this is the winner's screen, rendered if winner set to true.

  if (winner) {
    return (
      <div>
        <h1>Player {winner} Wins!</h1>
        <button onClick={() => window.location.reload()}>New Game</button>
      </div>
    );
  }

  // this is the main game board
  return (
    <div>
      <div className="main-container">
        <div className="divided-container">
          <Player
            playerName="PLAYER 1"
            selectedScore={selectedScore}
            currentScore={currentScores[0]}
            totalScore={totalScores[0]}
            isCurrentPlayer={currentPlayer === 1}
          />
          <Center rollDice={rollDice} diceValues={diceValues} hold={hold} />
          <Player
            playerName="PLAYER 2"
            selectedScore={selectedScore}
            currentScore={currentScores[1]}
            totalScore={totalScores[1]}
            isCurrentPlayer={currentPlayer === 2}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;

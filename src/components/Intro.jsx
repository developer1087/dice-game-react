import React, { useState } from "react";

const Intro = ({ onStartGame }) => {
  // we pass the 'handleStartGame function from the App, here, to the 'start game' button

  const [score, setScore] = useState(""); //this is the value we will get from the 'selected-score' input, the target score for the user to choose.

  const handleScoreChange = (event) => {
    // this functions uses the setScore function to set the target score to what the user put in the input

    setScore(event.target.value);
  };

  const startGame = () => {
    // this function pass 'score' back to the App, and then to Game, using the onStartGame prop, with the click on the 'start game' button

    onStartGame(score);
  };

  return (
    <div>
      <div className="divided-container">
        <div className="inner-container">
          <div className="instructions-area">
            <h1 className="instructions">Game Instructions</h1>
            <ul>
              <li>
                In your turn - roll the dice (at least once) and accumulate the
                result in "current".
              </li>
              <li>
                You can roll again or click "HOLD" to save the point from
                "current" and end the turn.
              </li>
              <li>
                Note! If you get 6-6 - you will lose all points from "current"
                and the turn will go to your opponent.
              </li>
              <li>
                If you managed to reach exactly the target score - you win! If
                you passed it - you lose!
              </li>
            </ul>
          </div>
          <div className="bottom-area">
            <h2>Please select a target score</h2>
            <br />

            <input
              type="number"
              id="selected-score"
              value={score}
              onChange={handleScoreChange}
            />
            <br />
            <button onClick={startGame}>START GAME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

import { useState } from "react";
import Intro from "./components/Intro";
import Game from "./components/Game";

import "./CSS/styles.css";

// in the App component are 2 components - the Intro, which is the initial screen with instructions, a target score input and a start game button.
// The Game component has all the game logic in it, as well as all the game components.
function App() {
  const [isStarted, setIsStarted] = useState(false); //A boolian state to determine if the game has started
  const [selectedScore, setSelectedScore] = useState(null); // A state to hold the selected target score, and to be passed over to the game component

  function handleStartGame(score) {
    // A function to handle the 'start game' button behavior
    setSelectedScore(score); // The 'score' variable, comes from the 'Intro' component, will be set as 'selectedScore', to be the target score of the game.
    setIsStarted(true); // isStarted is set to 'true', so the Game component will be rendered
  }

  return (
    // with conditional rendering, depending on isStarted, either Intro will be displayed of the Game component
    <div>
      {isStarted ? (
        <Game selectedScore={selectedScore} /> // the Game receives the selected score from the Intro
      ) : (
        <Intro onStartGame={handleStartGame} /> // the handleStartGame function in Intro handles the 'start game' button, which means to render the Game, and to pass the 'selectedScore'
      )}
    </div>
  );
}

export default App;

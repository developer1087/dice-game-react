Dice Game

This is a simple little game made with React.

The game:

From the intro screen, the user chooses a "target score", and press "start game" the start the game, and the intro disappear and the game board appears.

The game board comprises of 2 sections, side by side, for 2 players.
In each Player section there are:

1. players name (1 or 2),
2. target score (that was input in the Intro screen),
3. Total score - an accumulation of all "hold" actions so far.
4. current - an accumulation of rolls of the dice - until pressing on "hold".

In the middle there is the center section, includes:

1. the dice - initiated to the number 1,
2. a "roll dice" button,
3. a "hold" button.

Game flow:

The game starts when it's Player 1's turn, indicated by a yellow background.

In his turn, the player can press the "roll dice" button, and get a random number from both dice.
With each rolling of the dice - the "current" gets updated with the sum of 2 dice.
When the player presses "hold" - the sum in "current" goes from current to "Total score", and the "current" gets initiated back to 0, and the turn goes to the 2nd player.

The Player wins on one of 2 senarios - 1. if he get exactly the target score. 2. if the other player passes the target score.

On a player's win - a screen with "player x win" will be displayed, and a "start game" button.

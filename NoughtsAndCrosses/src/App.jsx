import GameBoard from "./components/GameBoard";
import UpdatedGameBoard from "./components/UpdatedGameBoard";
import Player from "./components/Player";
import { useState } from "react";
import Log from "./components/LogMySolution";
import LogMySolution from "./components/LogMySolution";

function deriveActivePlayer(gameTurns) {
let currentPLayer = "X";
if(gameTurns.length > 0 && gameTurns[0].player === "X") {
  currentPLayer = "O";
};
return currentPLayer
};

function App() {

let [gameTurns, setGameTurns] = useState([]); // This will be an array of objects, where each object represents a turn in the game. Each object will contain information about the player who made the move, the position of the move on the game board, and the symbol used for that move.
let activePlayer = deriveActivePlayer(gameTurns); // The active player is derived from the gameTurns array. This is done by looking at the most recent turn (the first element in the gameTurns array) and checking which player made that move. If the most recent move was made by player "X", then the active player will be set to "O". Otherwise, it will be set to "X". This logic ensures that the turns alternate between the two players.


function handleSelectSquare() {
  setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X"); // Toggle the active player between "X" and "O"
  console.log(activePlayer);
}

function handleSelectSquare2(rowIndex, colIndex) {

 setGameTurns((prevTurns) => {
    let updatedTurns = [
      {square: {row: rowIndex, col: colIndex}, player: activePlayer}, ...prevTurns]; //Adding the most recent information about the current turn to the beginning of the prevTurns array.
      return updatedTurns; //This information is then returned and becomes the new state for gameTurns. This will then trigger a re-render of any components that use this array. This includes both the GameBoard component and the Log component
  });
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>
        <UpdatedGameBoard onSelectSquare={handleSelectSquare2} turns={gameTurns}></UpdatedGameBoard>
      </div>
      <LogMySolution turns={gameTurns}></LogMySolution>
    </main>
    )
}

export default App

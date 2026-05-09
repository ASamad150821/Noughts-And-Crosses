import {useState} from 'react';

let initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

/*export default function GameBoard() {
  return (
    <ol id="game-board">
        <li>
            <ol>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
            </ol>
        </li>
        <li>
            <ol>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
            </ol>
        </li>
        <li>
            <ol>
                <li>Hello World</li>
                <li>Hello World</li>
                <li>Hello World</li>
            </ol>
        </li>
    </ol>
  );
} */

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
   
    let [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) { // Function to handle the selection of a square on the game board. In addition, it will display the previous state of the game board.
        setGameBoard((previousGameBoard) => {
            let updatedGamesBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            updatedGamesBoard[rowIndex][colIndex] = activePlayerSymbol; // Example: Set the selected square to the active player's symbol
            return updatedGamesBoard;
        })

        onSelectSquare(); //Function to change the active player, which is passed down from the parent component (App.jsx) as a prop. This function will be called whenever a square is selected, allowing the parent component to update the active player accordingly.
    }
    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null ? true : false}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}
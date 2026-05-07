let initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function UpdatedGameBoard({onSelectSquare, turns}) {

    let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])]; // Create a copy of the initial game board. This is a best practise principle, which is done to avoid mutating the original game board and to ensure that we have a fresh copy to update based on the turns array.

        for(let turn of turns) {
        let {square, player} = turn; // Object destructuring to extract the square and player properties from the turn object. This allows us to access these values directly without having to reference the turn object each time.
        let {row, col} = square; 
        gameBoard[row][col] = player; // Update the game board based on the information from the turns array. This will set the value of the square at the specified row and column to the symbol of the player who made that move.
    }
    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )

}
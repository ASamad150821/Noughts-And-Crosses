export default function LogMySolution({turns}) {
   
    let turnsCopyForBestPractise = [...turns.map(turn => {
        return {...turn}
    })]; // Create a copy of the turns array. This is done to follow best practise principles and to avoid mutating the original turns array.

    // This will create a new array. However, since we are not assigning this new array to a variable, it will not be stored anywhere and will not affect the original array3. It will be printed out.
    
    return (
        <ol id="log">
            {turnsCopyForBestPractise.map((turn, index) => {
             return (   <li key={index}>
                    Player {turn.player === "X" ? 1 : 2} selected square at row {turn.square.row} and column {turn.square.col}
                </li>)
            })}
        </ol>
    )
}

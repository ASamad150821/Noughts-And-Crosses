import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

let [isEditing, setIsEditing] = useState(false);
let [playerName, setPlayerName] = useState(initialName);

function toggleEdit() {
    setIsEditing(true);
}

function saveNewInput() {
    setIsEditing(false);
    onChangeName(symbol, playerName)
    console.log(playerName);
}

function handleChange(event) {
    setPlayerName(event.target.value);
}

let playerNameField = <span className="player-name">{playerName}</span>
let buttontodisplay = <button onClick={() => toggleEdit()}>Edit</button>


if(isEditing) {
    playerNameField = <input type="text" defaultValue={playerName} onChange={(event) => handleChange(event)}></input>
    buttontodisplay = <button onClick={() => saveNewInput()}>Save</button>
}

    return (
        <li className = {isActive ? "active" : ""}>
            <span className="player">
                {playerNameField}
                <span className="player-symbol">{symbol}</span>
            </span>
                {buttontodisplay}
        </li>
    )
}
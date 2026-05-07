import {useState} from "react";

export default function Player({initialName, symbol, isActive}) {

let [isEditing, setIsEditing] = useState(false);
let [playerName, setPlayerName] = useState(initialName);

function toggleEdit() {
    setIsEditing(true);
}

function saveNewInput() {
    setIsEditing(false);
}

function handleChange(event) {
    setPlayerName(event.target.value);
    console.log(event.target.value);
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
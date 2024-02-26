import React, {useState} from 'react';

const Player = ({initialName,symbol,isActive, onChangeName}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName,setPlayerName]=useState(initialName);
    const handleEditClick = () => {
        setIsEditing((editing)=>!editing);
        if(isEditing){
            onChangeName(symbol,playerName)
        }
    };
    const handleNameChange = (e)=>{
        setPlayerName(e.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit'
    if (isEditing){
        editablePlayerName = <input onChange={handleNameChange} type="text" required value={playerName}/>
        // btnCaption ='Save'
    }
        return (
            <li className={isActive? 'active': undefined}>
                <span className="player">
                   {editablePlayerName}
                   <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
            </li>
        )
};

export default Player;
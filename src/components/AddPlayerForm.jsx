import React, {  useRef } from 'react';

const AddPlayerForm = ({addPlayer
}) => {
    const playerInput = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="playerName"
                ref={playerInput}
                placeholder="Enter a player's name"
                />

            <input type="submit" value="Add Player"/>
        </form>
    )
}

export default AddPlayerForm;
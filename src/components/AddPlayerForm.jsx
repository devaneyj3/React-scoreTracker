import React, {  useRef, useContext } from 'react';
import { ScoreboardContext } from './Context/Scoreboard';

const AddPlayerForm = () => {
    const playerInput = useRef();

    const context = useContext(ScoreboardContext)
    const handleSubmit = e => {
        e.preventDefault();
        context.addPlayer(playerInput.current.value);
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
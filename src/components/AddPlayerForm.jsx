import React, { useState } from 'react';

const AddPlayerForm = props => {
    const [ formValues, setFormValues ] = useState({
        playerName: '',
    })
    const changeHandler = e => {
        setFormValues({
            playerName: e.target.value,
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addPlayer(formValues.playerName);
        setFormValues ({ playerName: ''});
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="playerName"
                value={formValues.playerName}
                onChange={changeHandler}
                placeholder="Enter a player's name"
                />

            <input type="submit" value="Add Player"/>
        </form>
    )
}

export default AddPlayerForm;
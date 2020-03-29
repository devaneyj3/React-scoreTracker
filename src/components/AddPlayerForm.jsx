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
    return (
        <form>
            <input 
                type="text"
                name=""
                value={formValues.playerName}
                onChange={changeHandler}
                placeholder="Enter a player's name"
                />

            <input type="submit" value="Add Player"/>
        </form>
    )
}

export default AddPlayerForm;
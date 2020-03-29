import React, { useState } from 'react';
import Header from '../components/Header';
import Player from '../components/Player';
import '../app.css';
import { players } from '../data/players';

const App = props => {
    const [ playersInfo, setPlayers ] = useState(players)

    const removePlayer = (id) => {
        const filteredPlayers = playersInfo.filter(player => player.id !== id);
        setPlayers(filteredPlayers)
    }
    return (
        <div className='scoreboard'>
            <Header title='Scoreboard' totalPlayers={playersInfo.length}/>
            {playersInfo.map(player => {
                return (
                    <>
                        <Player 
                            key={player.id} 
                            name= {player.name} 
                            remove={removePlayer} 
                            id={player.id}
                            />
                    </>
                )
            })}
        </div>
    )
}



export default App;
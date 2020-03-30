import React, { useState  } from 'react';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import '../app.css';
import { players } from '../data/players';

const App = props => {
    const [ playersInfo, setPlayers ] = useState({
        players: players })

    const removePlayer = (id) => {
        const filteredPlayers = playersInfo.players.filter(player => player.id !== id);
        setPlayers( {
            players: filteredPlayers })
    }
    const handleScoreChange = (index, delta) => {
        const playersList = [...playersInfo.players]
    
        const playerToTarget = {...playersList[index]};

        playerToTarget.score += delta;

        playersList[index] = playerToTarget;
    
        setPlayers({
            players: playersList

        })
    }
    const addPlayer = value => {
        setPlayers({
            players: [...playersInfo.players,
                {
                    id: Date.now(),
                    name: value,
                    score: 0
                }
            ]
        })
    }
    return (
        <div className='scoreboard'>
            <Header players={playersInfo.players}/>
            {playersInfo.players.map((player, index) => {
                return (
                    <>
                        <Player 
                            key={player.id} 
                            index={index}
                            name= {player.name} 
                            remove={removePlayer} 
                            id={player.id}
                            score={player.score}
                            handleScoreChange={handleScoreChange}
                            />
                    </>
                )
            })}
            <AddPlayerForm addPlayer={addPlayer}/>
        </div>
    )
}



export default App;
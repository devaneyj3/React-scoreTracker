import React, { useState, useEffect  } from 'react';
import Header from '../components/Header';
import PlayersList from '../components/PlayersList';
import AddPlayerForm from '../components/AddPlayerForm';
import '../app.css';
import { players } from '../data/players';
import {ScoreboardContext} from '../components/Context/Scoreboard';

const App = () => {
    const [ playersInfo, setPlayers ] = useState({
        players: players,
    })
    const [ highScore, setHighScore ] = useState(0);

    useEffect(() => {
        const getHighScore = () => {
            const score = playersInfo.players.map(p => p.score)
            const highScore = Math.max(...score)
            if(highScore) {
                return highScore;
            }
            
            return null;
            
        }
        const highScore = getHighScore();
        setHighScore( highScore )
    }, [playersInfo])
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
            <ScoreboardContext.Provider value={ {playersInfo, handleScoreChange, highScore, removePlayer, addPlayer} }>
            <Header/>
            <PlayersList />
            <AddPlayerForm />
            </ScoreboardContext.Provider>
        </div>
    )
}



export default App;
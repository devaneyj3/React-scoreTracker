import React, { useEffect, useState } from 'react';
import {players} from '../../data/players';

export const ScoreboardContext = React.createContext();

const Provider = props => {
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
        <ScoreboardContext.Provider value={ {playersInfo, handleScoreChange, highScore, removePlayer, addPlayer} }>
            {props.children}
        </ScoreboardContext.Provider>
    )

}

export default Provider;

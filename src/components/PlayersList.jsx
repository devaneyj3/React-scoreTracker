import React, { useContext  } from 'react';
import Player from '../components/Player';
import {ScoreboardContext} from '../components/Context/Scoreboard';

const PlayerList = () => {
    const context = useContext(ScoreboardContext);

    const{ players } = context.playersInfo;
    console.log(players);
    return (
        <>
        {players.map((player, index) => {
            return (
                <>
                <Player 
                    key={player.id} 
                    index={index}
                    name= {player.name} 
                    isHighScore ={ context.highScore === player.score}
                    id={player.id}
                    />
                </>
            )
        })}
        </>
    )

}

export default PlayerList;

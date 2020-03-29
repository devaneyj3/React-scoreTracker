import React from 'react';
import Header from '../components/Header';
import Player from '../components/Player';
import '../app.css';
import { players } from '../data/players';

const App = props => {
    return (
        <div className='scoreboard'>
            <Header title='Scoreboard' totalPlayers={players.length}/>
            {players.map(player => {
                return (
                    <>
                        <Player key={player.id} name= {player.name} />
                    </>
                )
            })}
        </div>
    )
}



export default App;
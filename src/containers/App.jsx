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
                        <Player name= {player.name} score={ player.score } />
                    </>
                )
            })}
        </div>
    )
}



export default App;
import React from 'react';
import Header from '../components/Header';
import Player from '../components/Player';
import '../app.css';

const App = props => {
    return (
        <div className='scoreboard'>
            <Header/>
            <Player />
        </div>
    )
}



export default App;
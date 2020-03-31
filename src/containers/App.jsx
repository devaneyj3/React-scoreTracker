import React from 'react';
import Header from '../components/Header';
import PlayersList from '../components/PlayersList';
import AddPlayerForm from '../components/AddPlayerForm';
import '../app.css';

const App = () => {
    
    return (
        
        <div className='scoreboard'>
            <Header/>
            <PlayersList />
            <AddPlayerForm />
        </div>
    )
}



export default App;
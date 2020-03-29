import React, { useState } from 'react';

const Counter = props => {
    const [ playerScore, setPlayerScore ] = useState(0);

    const decrementScore = () => {
        setPlayerScore(playerScore - 1);
    }
    const incrementScore = () => {
        setPlayerScore(playerScore + 1);
    }
    return (
        <div className='counter'>
            <button 
                className='counter-action decrement'
                onClick={decrementScore}> - </button>
            <span className="counter-score"> {playerScore} </span>
            <button
                className='counter-action increment'
                onClick={incrementScore}> + </button>
        </div>
    )
}

export default Counter;
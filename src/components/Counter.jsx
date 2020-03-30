import React from 'react';

const Counter = ({index, handleScoreChange, score}) => {
    return (
        <div className='counter'>
            <button 
                className='counter-action decrement'
                onClick={() => handleScoreChange(index, -1)}> - </button>
            <span className="counter-score"> {score} </span>
            <button
                className='counter-action increment'
                onClick={() => handleScoreChange(index, +1)}> + </button>
        </div>
    )
}

export default Counter;
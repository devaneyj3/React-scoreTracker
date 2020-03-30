import React from 'react';
import propTypes from 'prop-types';

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

Counter.prototype = {
    index: propTypes.number,
    score: propTypes.number,
    handleScoreChange: propTypes.func,
}

export default Counter;
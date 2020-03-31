import React, { useContext } from 'react';
import { ScoreboardContext } from './Context/Scoreboard';
import propTypes from 'prop-types';

const Counter = ({index}) => {
    const context = useContext(ScoreboardContext);
    return (
        <div className='counter'>
            <button 
                className='counter-action decrement'
                onClick={() => context.handleScoreChange(index, -1)}> - </button>
            <span className="counter-score"> {context.playersInfo.players[index].score} </span>
            <button
                className='counter-action increment'
                onClick={() => context.handleScoreChange(index, +1)}> + </button>
        </div>
    )
}

Counter.prototype = {
    index: propTypes.number,
    score: propTypes.number,
    handleScoreChange: propTypes.func,
}

export default Counter;
import React from 'react';
import Counter from './Counter';

const Player = props => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => props.remove(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter
                score={props.score}
                handleScoreChange={props.handleScoreChange}
                index={props.index}
                />    
        </div>
    )
}

export default Player;
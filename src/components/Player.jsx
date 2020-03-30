import React from 'react';
import Counter from './Counter';

const Player = ({score, index, name, id, handleScoreChange, remove }) => {
    console.log(name + ' rendered');
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => remove(id)}>✖</button>
                {name}
            </span>
            <Counter
                score={score}
                handleScoreChange={handleScoreChange}
                index={index}
                />    
        </div>
    )
}
const playerComponent = React.memo(Player)
export default playerComponent;
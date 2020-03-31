import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

const Player = ({score, index, name, id, handleScoreChange, remove }) => {
    console.log(name + ' rendered');
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => remove(id)}>✖</button>
            <Icon/>
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

Player.propTypes = {
    score: PropTypes.number.isRequired, 
    index: PropTypes.number, 
    name: PropTypes.string.isRequired, 
    id: PropTypes.number, 
    handleScoreChange: PropTypes.func, 
    remove: PropTypes.func
}
const playerComponent = React.memo(Player)
export default playerComponent;
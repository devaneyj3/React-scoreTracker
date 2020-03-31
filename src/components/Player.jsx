import React , { useContext } from 'react';
import { ScoreboardContext } from './Context/Scoreboard';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';


const Player = ({ index, name, id, isHighScore }) => {
    // console.log(name + ' rendered');
    const Context = useContext(ScoreboardContext);
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => Context.removePlayer(id)}>✖</button>
            {isHighScore ? <Icon isHighScore = {isHighScore }/> : null }
            {name}
            </span>
            <Counter
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
import React, { useContext } from 'react';
import { ScoreboardContext } from './Context/Scoreboard';

const Stats = () => {

    const obj = useContext(ScoreboardContext);

    const totalScore = obj.playersInfo.players.reduce((total, player) => {
        return total += player.score;
    }, 0 )
    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td> {obj.playersInfo.players.length}</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{totalScore}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats;
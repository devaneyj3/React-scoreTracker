import React , { useState } from 'react';

const Stopwatch = props => {
    const [ timer, setTimer ] = useState(0);
    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">0</span>
            <button>Start</button> 
            <button>Reset</button>
        </div>
    )
}

export default Stopwatch;
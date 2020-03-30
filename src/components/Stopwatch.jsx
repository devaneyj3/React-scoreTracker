import React , { useState, useEffect } from 'react';

const Stopwatch = props => {
    const [ seconds, setSeconds ] = useState(0);
    const [ isRunning, setIsRunning ] = useState(false);

    useEffect(() => {
        let interval = null;
        if(isRunning) {
            interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds])

    const handleStopwatch = () => {
        setIsRunning(!isRunning);
    }
    const handleReset = () => {
        setSeconds(0);
        setIsRunning(false);
    }
    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{ seconds }</span>
            <button onClick={handleStopwatch}>{isRunning ? 'Stop' :  'Start'}</button> 
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch;
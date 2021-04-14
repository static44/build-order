import React from 'react';
import {useStopwatch} from "react-timer-hook";

const Timer = () => {
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    return (
        <div id="Timer">
            <h2>{minutes}:{seconds}</h2>
        </div>
    );
};

export default Timer;

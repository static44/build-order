import React from 'react';

const TimeDisplay = (props) => {

    const {Time} = props;
    const index = Time.indexOf(":");
    const minutes = Time.substr(0, index);
    const seconds = Time.substr(index + 1);


    return (
        <div className="Time-Display">
            <h3>{minutes}:{seconds}</h3>
        </div>
    );
};

export default TimeDisplay;

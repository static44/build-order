import React from 'react';

const UnitCountDisplay = (props) => {

    const { Unit, Count} = props;

    const UnitName = Unit + ((Count > 1) ? "s" : "");

    return (
        <div id="UnitCountDisplay">
            <h3>
                Build {Count} {UnitName}
            </h3>
        </div>
    );
};

export default UnitCountDisplay;

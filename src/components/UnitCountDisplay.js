import React from 'react';

const UnitCountDisplay = (props) => {

    const { Unit, Count} = props;
    const UnitName = Unit.toString().replace('_', ' ') + ((Count > 1) ? "s" : "");
    let BuildOrder;

    if (Unit === "Start" || Unit === "End" || Unit === "Blank") {
        BuildOrder = ""
    } else {
        BuildOrder = ("Build " + Count + " " + UnitName)
    }

    return (
        <div id="UnitCountDisplay">
            <h3>
                {BuildOrder}
            </h3>
        </div>
    );
};

export default UnitCountDisplay;

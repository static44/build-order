import WorkerImage from "./WorkerImage";
import TimeDisplay from "./TimeDisplay";
import UnitCountDisplay from "./UnitCountDisplay";
import {React} from "react";

const Card = (props) => {
    const {UnitName, Race, Time, UnitCount, WorkerCount, CardID} = props;

    return (
        <div className="Card" id={"Card_" + CardID}>
            <img className="CardImage" src={require(`../images/${UnitName}.jpg`).default}/>
            <div className={"twoflex"}>
                <WorkerImage WorkerCount={WorkerCount}/>
                <TimeDisplay Time={Time}/>
            </div>
            <UnitCountDisplay
                Unit={UnitName}
                Count={UnitCount}/>
        </div>
    );
};

export default Card
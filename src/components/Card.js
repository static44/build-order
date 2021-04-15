import WorkerImage from "./WorkerImage";
import TimeDisplay from "./TimeDisplay";
import UnitCountDisplay from "./UnitCountDisplay";
import {useSpring, Spring, useTrail, Transition, animated} from "react-spring"
import {React} from "react";

const Card = (props) => {
    const {UnitName, Race, Time, UnitCount, WorkerCount, CardID, Animation_Props} = props;

    return (
        <animated.div style={Animation_Props} className="Card" id={"Card_" + CardID}>
            <img className="CardImage" src={require(`../images/${UnitName}.jpg`).default}/>
            <div className={"twoflex"}>
                <WorkerImage WorkerCount={WorkerCount}/>
                <TimeDisplay Time={Time}/>
            </div>
            <UnitCountDisplay
                Unit={UnitName}
                Count={UnitCount}/>
        </animated.div>
    );
};

export default Card
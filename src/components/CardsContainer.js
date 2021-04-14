import {React, useState} from 'react';
import {useSpring, Spring, useTrail, Transition, animated} from "react-spring"
import WorkerImage from "./WorkerImage";
import TimeDisplay from "./TimeDisplay";
import UnitCountDisplay from "./UnitCountDisplay";
import TestBuild from "../Build1.json";
import $ from 'jquery'
import {useStopwatch} from "react-timer-hook";

const Card = (props) => {
    const {UnitName, Race, Time, UnitCount, WorkerCount, CardID} = props;

    return (
        <Spring
            from={{opacity:0, marginTop: -500}}
            to={{opacity:1, marginTop: 0}}
        >
            {props => (
                    <div style={props} className="Card" id={"Card_" + CardID}>
                        <img className="CardImage" src={require(`../images/${UnitName}.jpg`).default}/>
                        <div className={"twoflex"}>
                            <WorkerImage WorkerCount={WorkerCount}/>
                            <TimeDisplay Time={Time}/>
                        </div>
                        <UnitCountDisplay
                            Unit={UnitName}
                            Count={UnitCount}/>
                    </div>)}
        </Spring>
    );
};


const CardsContainer = () => {

    const CARD_ID_NAME = "OldCard";
    const ANIM_SPEED = 500;
    let slideDelay = 1.5;
    let slideDuration = 0.3;
    const Build = [];
    const Display = [];
    const Spring = useSpring({opacity: 1, from: {opacity: 0}})
    const [animate, setAnimate] = useState(false);
    const handleClick = () => setAnimate(!animate);

    for (let buildKey in TestBuild) {
        Build.push(
            {
                UnitName: TestBuild[buildKey].UnitName,
                Race: TestBuild[buildKey].Race,
                Time: TestBuild[buildKey].Time,
                UnitCount: TestBuild[buildKey].UnitCount,
                WorkerCount: TestBuild[buildKey].WorkerCount,
                CardID: buildKey
            }
        )
    }

    for (let buildElement of Build) {
        if (Display.length < 3) {
            Display.push(buildElement)
        } else if (true) {
        }
    }

    return (
        <div id="CardsContainer">
            {Display.map((card, index) => {
                return <Card
                    UnitName={card.UnitName}
                    Race={card.Race}
                    Time={card.Time}
                    UnitCount={card.UnitCount}
                    WorkerCount={card.WorkerCount}
                    CardID={card.CardID}
                />;

            })}
        </div>
    );
};

export default CardsContainer;

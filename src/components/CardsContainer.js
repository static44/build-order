import {React, useRef, useState} from 'react';
import {useSpring, Spring, useTrail, Transition, animated} from "react-spring"
import WorkerImage from "./WorkerImage";
import TimeDisplay from "./TimeDisplay";
import UnitCountDisplay from "./UnitCountDisplay"
import Card from "./Card"
import TestBuild from "../Build1.json";
import $ from 'jquery'
import {useStopwatch} from "react-timer-hook";


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

    const transitionRef = useRef()
    const props = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 1, color: '#ffaaee'})
            await next({opacity: 0, color: 'rgb(14,26,19)'})
        },
        from: {opacity: 0, color: 'green'},
    })

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
            {Build.map((card, index) => {
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

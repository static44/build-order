import {React, useRef, useState, useEffect} from 'react';
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
    const POSITION = {
        x: 3,
        y: -100,
        xChange: 500
    };

    const ANIMATION_1 = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 1})
        },
        from: {opacity: 0},
    });
    const ANIMATION_2 = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 1})
        },
        from: {opacity: 0},
    });
    const ANIMATION_3 = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 1})
        },
        from: {opacity: 0},
    });
    const ANIMATION_PROPS = [];
    ANIMATION_PROPS.push(ANIMATION_1, ANIMATION_2, ANIMATION_3);

    const transitionRef = useRef()



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
        <div className="Card_Spacers">
            {Display.map((card, index) => {
                let test = ANIMATION_PROPS;
                return <Card
                    UnitName={card.UnitName}
                    Race={card.Race}
                    Time={card.Time}
                    UnitCount={card.UnitCount}
                    WorkerCount={card.WorkerCount}
                    CardID={card.CardID}
                    Animation_Props={test[index]}
                />;

            })}
        </div>
    );
};

export default CardsContainer;

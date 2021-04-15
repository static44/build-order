import {React, useRef, useState, useEffect} from 'react';
import {useSpring, Spring, useTrail, Transition, animated} from "react-spring"
import WorkerImage from "./WorkerImage";
import TimeDisplay from "./TimeDisplay";
import UnitCountDisplay from "./UnitCountDisplay"
import Card from "./Card"
import TestBuild from "../Build1.json";
import $ from 'jquery'
import {useStopwatch} from "react-timer-hook";


const CardsContainer = (props) => {

    const { Display } = props;
    const CARD_SPACER_CLASS_NAME = "Card_Spacers";
    let slideDelay = 1.5;
    let slideDuration = 0.3;
    const Spring = useSpring({opacity: 1, from: {opacity: 0}})
    const [animate, setAnimate] = useState(false);
    const handleClick = () => setAnimate(!animate);
    const ANIMATION_SETTINGS = {
        x: 3,
        y: -100,
        xChange: 500,
        duration: 250
    };

    const ANIMATION_1 = useSpring({
        to: async (next, cancel) => {
            await next({
                opacity: .5
            })
        },
        from: {opacity: 0},
        config: {duration: ANIMATION_SETTINGS.duration}
    });
    const ANIMATION_2 = useSpring({
        to: async (next, cancel) => {
            await next({
                opacity: 1,
            })
        },
        from: {opacity: 0},
        config: {duration: ANIMATION_SETTINGS.duration}
    });
    const ANIMATION_3 = useSpring({
        to: async (next, cancel) => {
            await next({opacity: .5})
        },
        from: {opacity: 0},
        config: {duration: ANIMATION_SETTINGS.duration}
    });
    const ANIMATION_PROPS = [];
    ANIMATION_PROPS.push(ANIMATION_1, ANIMATION_2, ANIMATION_3);

    const transitionRef = useRef()

    return (
        <div className={CARD_SPACER_CLASS_NAME}>
            {Display.map((card, index) => {
                return <Card
                    UnitName={card.UnitName}
                    Race={card.Race}
                    Time={card.Time}
                    UnitCount={card.UnitCount}
                    WorkerCount={card.WorkerCount}
                    CardID={card.CardID}
                    Animation_Props={ANIMATION_PROPS[index]}
                />;

            })}
        </div>
    );
};

export default CardsContainer;

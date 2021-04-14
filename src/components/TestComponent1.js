import {React, useRef} from "react";
import {Spring, useSpring, animated, useChain} from 'react-spring';
import CardsContainer from "./CardsContainer";

export default function TestComponent1() {

    const transitionRef = useRef()
    const props = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 1, color: '#ffaaee'})
            await next({opacity: 0, color: 'rgb(14,26,19)'})
        },
        from: {opacity: 0, color: 'green'},
    })


    return (

        <animated.div style={props}>
            <CardsContainer />
        </animated.div>

    );
}

const c1Style = {
    background: "steelblue",
    padding: "1.5rem"
};

const counter = {
    background: "#333",
    textAlign: "center",
    width: "100px",
    borderRadius: "50%",
    margin: "1rem auto"
};

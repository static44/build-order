import './App.css';
import Header from "./components/Header";
import Timer from "./components/Timer";
import CardsContainer from "./components/CardsContainer";
import React, {useState} from "react";
import TestComponent1 from "./components/TestComponent1";
import Card from "./components/Card";
import Card_Spacers from "./components/Card_Spacers";
import TestBuild from "./Build1.json";


function App() {

    const Build = [];

    const [count, setCount] = useState(3);
    const displayAdd = (todo) => {
        // setDisplay([...display, todo]);
        const newDisplay = display.slice(1);
        newDisplay.push(todo);
        setDisplay(newDisplay);
        // Alternative is
        //setDisplay([...newDisplay, display]);
    }
    // const displayRemove = (todo) => {
    //     const newDisplay = display.filter((t) => t !== todo);
    //     setDisplay(newDisplay);
    // }

    const displayRemove = () => {
        const newDisplay = display.slice(1);
        setDisplay(newDisplay);
        console.log(newDisplay);
        console.log("displayRemove")
    }


    for (let buildKey in TestBuild) {
        Build.push(
            {
                UnitName: TestBuild[buildKey].UnitName,
                Race: TestBuild[buildKey].Race,
                Time: TestBuild[buildKey].Time,
                UnitCount: TestBuild[buildKey].UnitCount,
                WorkerCount: TestBuild[buildKey].WorkerCount,
                CardID: buildKey + 1
            }
        )
    }
    //Adds Begin and End Cards
    Build.unshift({
        UnitName: "Start",
        Time: "0:00",
        CardID: 0

    });
    //Adds Begin and End Cards
    Build.push({
        UnitName: "End",
        Time: Build[Build.length - 1].Time,
        CardID: (Build[Build.length - 1].CardID + 1)

    });

    const [display, setDisplay] = useState(Build.slice(0,3));

    //Initial Population of Display
    console.log(display);


    function AddToDisplay(e) {

        if (Build[count] != undefined) {

            if (count < 3) {
                console.log("Count Less than 3")
                setCount(count + 1);

            } else {
                console.log("Count more than 3")
                console.log(count);
                displayRemove();
            }
            displayAdd(Build[count])
        }
        setCount(count + 1);
        console.log(count);
        console.log(display);
    }


    return (
        <div className="App">
            <Header/>
            <button onClick={AddToDisplay}>Test</button>
            <Timer/>
            {/*<TestComponent1/>*/}
            <CardsContainer Display={display}/>
        </div>
    );
}

export default App;

import './App.css';
import Header from "./components/Header";
import Timer from "./components/Timer";
import CardsContainer from "./components/CardsContainer";
import React, {useState} from "react";
import TestBuild from "./Build1.json";


function App() {

    const Build = [];
    const [count, setCount] = useState(3);

    for (let buildKey in TestBuild) {
        Build.push(
            {
                UnitName: TestBuild[buildKey].UnitName,
                Race: TestBuild[buildKey].Race,
                Time: TestBuild[buildKey].Time,
                UnitCount: TestBuild[buildKey].UnitCount,
                WorkerCount: TestBuild[buildKey].WorkerCount,
                CardID: buildKey + 2
            }
        )
    }
    //Adds Begin and End Cards
    Build.unshift({
        UnitName: "Blank",
        Time: "-:--",
        CardID: 0

    }, {
        UnitName: "Start",
        Time: "0:00",
        CardID: 1

    });
    //Adds Begin and End Cards
    Build.push({
            UnitName: "End",
            Time: Build[Build.length - 1].Time,
            CardID: (Build[Build.length - 1].CardID + 1)

        },
        {
            UnitName: "Blank",
            Time: "-:--",
            CardID: 0

        });

    //Display Creation and Functions
    const [display, setDisplay] = useState(Build.slice(0, 3));
    const DisplayAdd = (todo) => {
        const newDisplay = display.slice(1);
        newDisplay.push(todo);
        setDisplay(newDisplay);
    }

    const DisplayRemove = () => {
        const newDisplay = display.slice(1);
        setDisplay(newDisplay);
    }

    const NextBuildDisplay = () => {
        if (Build[count] !== undefined) {

            if (Build[count] <= 3) {
                setCount(count + 1);
            } else {
                DisplayRemove();
            }
            DisplayAdd(Build[count])
            setCount(count + 1);

        }
    }


    return (
        <div className="App">
            <Header/>
            <button onClick={NextBuildDisplay}>Test</button>
            <Timer/>
            {/*<TestComponent1/>*/}
            <CardsContainer Display={display}/>
        </div>
    );
}

export default App;

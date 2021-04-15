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
    const [display, setDisplay] = useState([]);
    const [count, setCount] = useState(0);
    const displayAdd = (todo) => {
        const newDisplay = [...display];
        newDisplay.push(todo);
        setDisplay(newDisplay);
        //Alternative is
        //setDisplay([...newDisplay, display]);
    }
    const displayRemove = () => {
        const newDisplay = [...display];
        newDisplay.shift();
        setDisplay(newDisplay);
    }


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

    //Initial Population of Display
    for (let buildElement of Build) {
        if (count < 3) {
            displayAdd(buildElement);
            setCount(count + 1);
            console.log(buildElement);
        }
    }

    function AddToDisplay(e) {

        displayRemove();
        if (Build[count] != undefined)
        {
            displayAdd(Build[count]);
        }
        setCount(count + 1);
        console.log(count);
        console.log(display);
    }



  return (
    <div className="App">
        <Header/>
        <Timer/>
        {/*<TestComponent1/>*/}
        <Card_Spacers/>
        <CardsContainer Display={display}/>
        <p></p>
        <button onClick={AddToDisplay}>Test</button>
    </div>
  );
}

export default App;

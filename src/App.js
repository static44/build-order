import './App.css';
import Header from "./components/Header";
import Timer from "./components/Timer";
import CardsContainer from "./components/CardsContainer";
import React from "react";
import TestComponent1 from "./components/TestComponent1";
import Card from "./components/Card";
import Card_Spacers from "./components/Card_Spacers";

function App() {
  return (
    <div className="App">
        <Header/>
        <Timer/>
        {/*<TestComponent1/>*/}
        <Card_Spacers/>
        <CardsContainer/>

    </div>
  );
}

export default App;

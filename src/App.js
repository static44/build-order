import './App.css';
import marine from './images/Marine.jpg';
import Header from "./components/Header";
import Timer from "./components/Timer";
import CardsContainer from "./components/CardsContainer";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header/>
        <Timer/>
        <CardsContainer/>
    </div>
  );
}

export default App;

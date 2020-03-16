import React from "react" ;
import "./App.css";

import ChoiceCard from "./components/ChoiseCard" ;

const choices = {
  rock: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",
  paper: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png",
  scissors: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png"
};


function App() {
  return (
    <div className="App">
      <ChoiceCard 
      title="You" 
      winner={false} 
      imgURL={choices.paper}

       />
      <ChoiceCard 
      title="Computer" 
      winner={true} 
      imgURL={choices.rock} 
      />
    </div>
  )
}

export default App







import React, { useState } from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiseCard";

const choices = {
  Rock: {
    name: "Rock",
    img: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png"
  },
  Paper: {
    name: "Paper",
    img: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png"
  },
  Scissors: {
    name: "Scissors",
    img: "https://skidragon.github.io/skidragon.github.io-rock-paper-scissors/media/rock.png"
  }
}

export const getRandomChoice = () => {
  let choiceNames = Object.keys(choices); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex];//this is just a string but we need to convert it to object
  return choices[choiceName]; //access the object
};

export const getRoundOutcome = userChoice => {
  const computerChoice = getRandomChoice().name;

  let result;
  if (userChoice === "Rock") {
    result = computerChoice === "Scissors" ? "Win" : "Computer";//determine winner - computer Scissors? true/false
  } if (userChoice === "Paper") {
    result = computerChoice === "Rock" ? "You" : "Computer";
  }if (userChoice === "Scissors") {
    result = computerChoice === "Paper" ? "You" : "Computer";

  }if (userChoice === computerChoice) result = "tie";
  return [result, computerChoice]; // returns array with 2 values
};

function App() {
  // Define state and useState function to initilize the selectedItem - visi mainigie elementi
  const [playerChoice, setPlayerChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [result, setResult] = useState(""); // by default empty string, but will change to either win, lose, or tie
  const [prompt, setGamePrompt] = useState("Rock-Paper-Scissors!");
  const [gameHistory, setGameHistory] = useState([]);//game history

  let [selectedChoice, setSelectedChoice] = useState("");

  // capture the button the user clicks (argument choice)
  let onPlay = (choice) => {
    // use choice to select the correct key inside choices object
    const newUserChoice = choices[choice];
    // save the result to our state
    const [roundResult, newComputerChoice] = getRoundOutcome(newUserChoice.name) ;

    setPlayerChoice(newUserChoice);
    // newComputerChoice is just a string, we need to change it to object 
    setComputerChoice(choices[newComputerChoice]); // newComputerChoice comes from the getOutcome()    
    setResult(roundResult) // change the state result result using setState 
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-c</div>ol">
            <ChoiceCard
              title="You"
              winner={result}
              name={playerChoice && playerChoice.name}
              imgURL={playerChoice && playerChoice.img} />
            <h1>{prompt}</h1>
            <button onClick={() => onPlay('Rock')}>Rock</button>
            <button onClick={() => onPlay('Paper')}>Paper</button>
            <button onClick={() => onPlay('Scissors')}>Scissors</button>
            <ChoiceCard
              title="Computer"
              winner={result}
              name={computerChoice && computerChoice.name}
              imgURL={computerChoice && computerChoice.img} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default App




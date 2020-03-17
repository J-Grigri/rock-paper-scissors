import React, {useState} from "react"; 
import "./App.css";
import ChoiceCard from "./components/ChoiseCard";

const choices = {
  Rock: {
    name: "Rock" ,
    img: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png" 
  },
  Paper: {
    name: "Paper" ,
    img: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/paper.png" 
  },
  Scissors: {
    name: "Scissors" ,
    img: "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png"
  }
}

export const getRandomChoice = () => {
  let choiceNames = Object.keys(choices); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex]; 
  return choices[choiceName];
};

export const getRoundOutcome = userChoice => {

  const computerChoice = getRandomChoice().name; // hmm this code actually define computer choice in here but we actually has it outside, so ill remove the code outside and keep this computer here, because at the end of this function, it also returns computer choice (this is Loi's way, i personally dont like it lol)

  let result;
// ill change the string a bit for easier checkinggreat
// we wil stand on the user point of view here, if user win we return : "You" else "Computer" or "tie"
  if (userChoice === "Rock"){
    result = computerChoice === "Scissors" ? "You" : "Computer";
  }

  
  if (userChoice === "Paper"){
    result = computerChoice === "Rock" ? "You" : "Computer";
  } 

  if (userChoice === "Scissors"){
    result = computerChoice === "Paper" ? "You" : "Computer";
  }
  
  if (userChoice === computerChoice) result = "tie";
  return [result, computerChoice]; // returns array with 2 values
};

function App() {
  //1. Define state. useState function to initilize the selectedItem
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  //Find both player and computer choices respectively via the two variables we have defined in the body of onPlay
  const [result, setResult] = useState("") // default empty string, then will change to either win, lose, or tie

  //update the variables

  // 57 + 58 : these 2 functions will update state (call it "setState", that's how it is call in the old day). Basically when you setState, the render function will be called again. In this case, all the function in App() will be called a gain. Hence these 2 functions are called repeatedly . Thats why you run into an infinite loop.
  // You need something to trigger these 2 function once! to stop them from running again n again. E.g Put them inside a func. WHen you click to choose an option. you run these.
  //
  const [prompt, setGamePrompt] = useState("Start!");
  let [selectedChoice, setSelectedChoice] = useState({ img:"https://thumbs-prod.si-cdn.com/MrdYgFJavbYb-TH8_fg2ei7CLT8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/a5/70/a570df36-0a3b-4007-8539-830acec5cec2/05_02_2014_rock_paper_scissor.jpg"}) ;
  // what have you done tho?haha to what? alright lem check


  let onPlay = (choice) => {
    // when user clicks the buttons > we capture what they chose (argument choice)
    // use choice to select the correct key inside choices object
    const newUserChoice = choices[choice];

 


    // now we need to save the result to our state
    //something wrong here 
    const [roundResult, newComputerChoice] = getRoundOutcome(newUserChoice.name) // newcomputer comes from the function <<<<
    // this function return an array of 2 value, first is the result, second is the randomComputerChoice
    // line 75 simply retreive 2 values.
    // we will setState THEM below
    // console.log(roundResult)
    // now we save the 2 values to our state
    // for computer , we randomly pick 1 of the 3
    setPlayerChoice(newUserChoice);

    // newComputerChoice is just a string, we need to change it to object (we had that before but i deleted it)
    setComputerChoice(choices[newComputerChoice]); // we got newComputerChoice from the getOutcome()    
    setResult(roundResult) // setState result
    // now let's use result (state) to render results
  }

  // console.log("khoa:",playerChoice, computerChoice, result)  // log to see , why the hell is result undefined
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-c</div>ol">

            <ChoiceCard
              title="You"
              winner={result}
              name={playerChoice && playerChoice.name}
              imgURL={playerChoice && playerChoice.img}/>
            <h1>{prompt}</h1>

            <button onClick = {() => onPlay('Rock')}>Rock</button>
            <button onClick = {() => onPlay('Paper')}>Paper</button>
            <button onClick = {() => onPlay('Scissors')}>Scissors</button>
            
            <ChoiceCard
              title="Computer"
              winner={result}
              name = {computerChoice && computerChoice.name}
              imgURL={computerChoice && computerChoice.img}/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App 




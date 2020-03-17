import React from 'react' ;
import "../App.css";
import { getRoundOutcome } from '../App';


export default function ChoiseCard(props) {
    console.log(props)
    const getOutcome = (title, winner) => {
    // this function will return 2 values, first is the string we want to show , 2nd is the class name
        if (winner === "tie") {
            return ["Tie","tie"]//1st is variable, 2nd is CSS class
        } else if (title === winner) {
            return ["Win", "winner"] 
        } else return ["Lose","loser"]
    };
    // lets try a tie
    // will have more logic here to check who wins who loses
    console.log(getOutcome(props.title, props.winner)) // forgot to pass arguments
    return (
        <div className={`choice-card ${getOutcome(props.title, props.winner)[1]}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title} />
            <h3>{getOutcome(props.title,props.winner)[0]}</h3> 
        </div>
    )
}

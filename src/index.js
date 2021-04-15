//What this program  does
//Can select a qoute randomly
//can enable users vote for a quote
//can display the item with the highest number of votes
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  //generate random number and set the state with it
  const generateRanNum = () => {
    let ranNum = Math.floor(Math.random() * props.anecdotes.length);
    //console.log(ranNum);

    setSelected(ranNum);
  };

  //handle vote
  const handleVotes = () => {
    setVotes({ ...votes, [selected]: (votes[selected] += 1) });
  };

  //get anecdote/quote with highest vote number
  const handleMaxVotes = () => {
    const VoteValuesArray = Object.values(votes);
    const voteMaxValues = Math.max(...VoteValuesArray);
    //get the key of this property with maximum value
    for (const key in votes) {
      if (Object.hasOwnProperty.call(votes, key)) {
        const element = votes[key];
        if (element === voteMaxValues) {
          return [key, voteMaxValues];
        }
      }
    }
  };

  //index of the quote/anaecedote with highest vote
  const anecdoteIndex = handleMaxVotes()[0];
  //highest vote value
  const maxVoteValue = handleMaxVotes()[1];

  return (
    <div>
      <p> {props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={generateRanNum}>next anacdote</button>
      <p>Anecdotes With Most Votes:</p>
      <p> {props.anecdotes[Number(anecdoteIndex)]}</p>
      <p> has {maxVoteValue} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

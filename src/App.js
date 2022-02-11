import { useState } from "react";

// Build a React App that lets us play tic-tac-toe
const winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default function App() {
  const [buttons, setButtons] = useState(Array(9).fill("-"));
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState("");

  //create 9 square game board
  //when you click on sqaure, change turn (state)
  //set winner in state

  function handleClick(index) {
    if (buttons[index] !== "-") {
      return;
    }
    const newButtons = [...buttons];
    newButtons[index] = turn;
    setButtons(newButtons);
    setTurn(turn === "x" ? "o" : "x");
    getWinner(newButtons);
  }

  function getWinner(board) {
    for (let x = 0; x < winningStates.length; x++) {
      const [pos1, pos2, pos3] = winningStates[x];
      if (
        board[pos1] !== "-" &&
        board[pos1] === board[pos2] &&
        board[pos2] === board[pos3]
      ) {
        setWinner(board[pos1]);
        break;
      }
    }
  }
  //map over buttons array to clean up jsx
  //reset button when someone wins
  //use react testing library, before/after - jest

  return (
    <div className="App">
      <h1>Tic-tac-toe</h1>
      <div>
        <button onClick={() => handleClick(0)}>{buttons[0]}</button>
        <button onClick={() => handleClick(1)}>{buttons[1]}</button>
        <button onClick={() => handleClick(2)}>{buttons[2]}</button>
        <br />
        <button onClick={() => handleClick(3)}>{buttons[3]}</button>
        <button onClick={() => handleClick(4)}>{buttons[4]}</button>
        <button onClick={() => handleClick(5)}>{buttons[5]}</button>
        <br />
        <button onClick={() => handleClick(6)}>{buttons[6]}</button>
        <button onClick={() => handleClick(7)}>{buttons[7]}</button>
        <button onClick={() => handleClick(8)}>{buttons[8]}</button>
      </div>
      winner: {winner}
    </div>
  );
}

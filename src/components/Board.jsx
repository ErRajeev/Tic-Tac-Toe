import React, { useState } from "react";
import Square from "./Square";
import "./Boad.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isxTern, setxTern] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const ele of winnerLogic) {
      const [a, b, c] = ele;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
  };

  const isWinner = checkWinner();

  const clickHandle = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isxTern ? "X" : "O";
    setState(copyState);
    setxTern(!isxTern);
  };

  const reset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      {isWinner ? (
        <>
          <div className="winner">
            <h1>{`"${isWinner}" won the Game`}</h1>
            <button onClick={reset}>Play Again</button>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <Square onClick={() => clickHandle(0)} value={state[0]} />
              <Square onClick={() => clickHandle(1)} value={state[1]} />
              <Square onClick={() => clickHandle(2)} value={state[2]} />
            </div>
            <div className="row">
              <Square onClick={() => clickHandle(3)} value={state[3]} />
              <Square onClick={() => clickHandle(4)} value={state[4]} />
              <Square onClick={() => clickHandle(5)} value={state[5]} />
            </div>
            <div className="row">
              <Square onClick={() => clickHandle(6)} value={state[6]} />
              <Square onClick={() => clickHandle(7)} value={state[7]} />
              <Square onClick={() => clickHandle(8)} value={state[8]} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Board;

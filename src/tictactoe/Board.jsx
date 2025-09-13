import React, { useState } from "react";
import Row from "./Row";
import Score from "./Score";

function Board() {
  const [end, setEnd] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [squares, setSquares] = useState(
    Array(3)
      .fill()
      .map(() => Array(3).fill())
  );

  let status = "";

  if (end) {
    status = "Game ended";
  } else {
    status = "Next player";
  }

  const handleClick = (indR, indC, value) => {
    setSquares((per) => {
      const newSquares = [...per];
      newSquares[indR] = [...per[indR]];
      newSquares[indR][indC] = currentPlayer;

      return newSquares;
    });

    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  };

  return (
    <>
      <Score title={status} />
      <div className="game-board">
        {squares.map((row, index) => {
          return (
            <Row
              key={index}
              row={row}
              indexRow={index}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default Board;

import React, { useEffect, useState } from "react";
import Row from "./Row";
import Score from "./Score";
import Restart from "./Restart";

function Board() {
  const [end, setEnd] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [status, setStatus] = useState("");
  const [squares, setSquares] = useState(
    Array(3)
      .fill()
      .map(() => Array(3).fill())
  );
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    // function
    const finalWin = winnerFinal(squares);
    setEnd(finalWin);
    if (finalWin) {
      setStatus("Game ended");
    } else {
      setStatus("Next player");
    }
  }, [squares]);

  const handleClick = (indR, indC, value) => {
    if (value || end) return;
    setSquares((per) => {
      const newSquares = [...per];
      newSquares[indR] = [...per[indR]];
      newSquares[indR][indC] = currentPlayer;

      return newSquares;
    });

    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  };

  const winnerFinal = (squares) => {
    const newSquards = [...squares].flat();
    // newSquards [x, O, "", O, X, O, ......]
    for (let i = 0; i < winningCombos.length; i++) {
      const [one, two, three] = winningCombos[i];
      if (
        newSquards[one] &&
        newSquards[one] === newSquards[two] &&
        newSquards[one] === newSquards[three]
      ) {
        return true;
      }
    }

    return false;
  };

  const handleRestart = () => {
    setSquares(
      Array(3)
        .fill()
        .map(() => Array(3).fill())
    );
    setEnd(false);
    setCurrentPlayer("X");
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

      <Restart restart={handleRestart} />
    </>
  );
}

export default Board;

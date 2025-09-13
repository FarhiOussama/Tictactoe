import React from "react";

function Square({ square, indexSquare, indexRow, handleClick }) {
  const style1 = { color: "green" };
  const style2 = { color: "red" };

  return (
    <>
      {square === "X" ? (
        <button
          className="square"
          style={style1}
          onClick={() => handleClick(indexRow, indexSquare, square)}
        >
          {square}
        </button>
      ) : (
        <button
          className="square"
          style={style2}
          onClick={() => handleClick(indexRow, indexSquare, square)}
        >
          {square}
        </button>
      )}
    </>
  );
}

export default Square;

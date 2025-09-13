import React from "react";
import Square from "./Square";

function Row({ row, indexRow, handleClick }) {
  return (
    <div className="rowStyle">
      {row.map((square, index) => {
        return (
          <Square
            key={index}
            square={square}
            indexSquare={index}
            indexRow={indexRow}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default Row;

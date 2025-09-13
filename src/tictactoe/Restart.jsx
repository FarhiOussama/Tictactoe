import React from "react";

function Restart({ restart }) {
  return (
    <div className="divRestart">
      <button className="btnRestart" onClick={restart}>
        Restart
      </button>
    </div>
  );
}

export default Restart;

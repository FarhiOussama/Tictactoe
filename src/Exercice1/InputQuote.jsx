import React from "react";

function InputQuote({ handleClick }) {
  return (
    <div className="container-button">
      <input
        className="generate-button"
        type="button"
        value="generate quote"
        onClick={handleClick}
      />
    </div>
  );
}

export default InputQuote;

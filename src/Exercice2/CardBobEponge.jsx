import React from "react";

function CardBobEponge({ infoBob }) {
  return (
    <div className="cardBob">
      <div className="bobImg">
        <img src={infoBob.image} alt={infoBob.name} />
      </div>
    </div>
  );
}

export default CardBobEponge;

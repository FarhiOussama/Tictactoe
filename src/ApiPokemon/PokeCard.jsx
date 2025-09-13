import React from "react";

function PokeCard({ pokemon }) {
  return (
    <div className="cardStyle">
      <div>
        <img src={pokemon.sprites.back_default} alt="" />
      </div>
      <div>{pokemon.name}</div>
    </div>
  );
}

export default PokeCard;

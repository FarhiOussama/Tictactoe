import React from "react";

function PokeCard({ pokemon, onClick }) {
  return (
    <div className="cardStyle" onClick={onClick}>
      <div>
        <img src={pokemon.sprites.back_default} alt="" />
      </div>
      <div>{pokemon.name}</div>
    </div>
  );
}

export default PokeCard;

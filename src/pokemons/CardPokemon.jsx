import React from "react";

function CardPokemon({ pokemon }) {
  const { id, name, type, image } = pokemon;
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  );
}

export default CardPokemon;

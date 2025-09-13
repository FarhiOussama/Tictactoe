import React from "react";
import PokeCard from "./PokeCard";

function PokeDex({ pokemonList }) {
  return (
    <>
      <h2 className="title">List Pokemons</h2>
      <div className="pokemonGaleryStyle">
        {pokemonList.map((pokemon, index) => {
          return <PokeCard key={index} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
}

export default PokeDex;

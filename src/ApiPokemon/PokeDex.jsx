import React from "react";
import PokeCard from "./PokeCard";

function PokeDex({ pokemonList, onSelect }) {
  return (
    <>
      <h2 className="title">List Pokemons</h2>
      <div className="pokemonGaleryStyle">
        {pokemonList.map((pokemon, index) => {
          return (
            <PokeCard
              key={index}
              pokemon={pokemon}
              onClick={() => onSelect(pokemon)}
            />
          );
        })}
      </div>
    </>
  );
}

export default PokeDex;

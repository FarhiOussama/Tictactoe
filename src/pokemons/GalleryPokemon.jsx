import React from "react";
import CardPokemon from "./CardPokemon";

function GalleryPokemon({ listePokemons }) {
  return (
    <div className="pok-gallery">
      {listePokemons.map((pok) => {
        return <CardPokemon key={pok.id} pokemon={pok} />;
      })}
      {/* <CardPokemon key={listePokemons[0].id} pokemon={listePokemons[0]} />
      <CardPokemon key={listePokemons[1].id} pokemon={listePokemons[1]} />
      <CardPokemon key={listePokemons[3].id} pokemon={listePokemons[3]} />
      <CardPokemon key={listePokemons[2].id} pokemon={listePokemons[2]} /> */}
    </div>
  );
}

export default GalleryPokemon;

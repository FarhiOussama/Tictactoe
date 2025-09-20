import { useEffect, useState } from "react";
import PokeDex from "./ApiPokemon/PokeDex";
import "./App.css";
import axios from "axios";
import Pagination from "./ApiPokemon/Pagination";
import PokeInfo from "./ApiPokemon/PokeInfo";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const pokemonFetch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      console.log(res);
      setNextUrl(res.data.next);
      setPreviousUrl(res.data.previous);
      getPokemons(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemons = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (pokemon) => {
        const result = await axios.get(pokemon.url);
        return result.data;
      })
    );
    setPokemonList(pokemonData);
    setLoading(false);
  };

  useEffect(() => {
    pokemonFetch();
  }, [url]);

  useEffect(() => {
    console.log("list pokemon : ", pokemonList);
  }, [pokemonList]);

  const changeUrl = (url) => {
    setUrl(url);
  };

  return (
    <>
      {loading ? (
        <h1>"LOADING..."</h1>
      ) : selectedPokemon ? (
        <PokeInfo
          name={selectedPokemon.name}
          sprite={selectedPokemon.sprites.back_default}
          types={selectedPokemon.types}
          closeInfo={() => setSelectedPokemon(null)}
        />
      ) : (
        <PokeDex pokemonList={pokemonList} onSelect={setSelectedPokemon} />
      )}

      <div className="listBtn">
        {previousUrl && (
          <Pagination text="previous" changeUrl={changeUrl} url={previousUrl} />
        )}
        {nextUrl && (
          <Pagination text="next" changeUrl={changeUrl} url={nextUrl} />
        )}
      </div>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';

export default function Pokemon() {
  useEffect(() => {
    async function getAllPokemons() {
      const resJson = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
      const { results } = await resJson.json();
      const pokemonSpeciesMap = results.map((v) => fetch(v.url));
      const pokemonSpecies = await Promise.all(pokemonSpeciesMap);
      console.log({ pokemonSpecies });
      const resJ = pokemonSpecies.map((v) => v.json());
      const res = await Promise.all(resJ);

      console.log(res);
    }
    getAllPokemons();
  }, []);

  return <div className="App">Pokemons</div>;
}

import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { getPokemon, GetPokemonVars } from './gql/queries/get-pokemon';
import Pokemon from './components/Pokemon';
import { useState, useCallback } from 'react';
import React from 'react';

function App() {

  const initialPokemon = "charizard";

  const [pokemon, setPokemon] = useState(initialPokemon);

  const updateSelectedPokemon = useCallback(
    () => {
      console.log(document.getElementById("pokemon-selector-input"));
      const selectedPokemon = (document.getElementById("pokemon-selector-input") as HTMLInputElement).value;
      setPokemon(selectedPokemon);
    },
    [setPokemon],
  )

  return (
    <div className="App">
      <header className="App-header">
        <input id="pokemon-selector-input" type="text" placeholder="pokemon name" defaultValue={pokemon} />
        <button onClick={updateSelectedPokemon}>Submit</button>
        <Pokemon pokemon={pokemon} />
      </header>
    </div>
  );
}

export default App;

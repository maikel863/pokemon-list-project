import React, { useEffect, useState } from "react";

import Header from "./Header";
import PokemonForm from "./PokemonForm";
import PokemonContainer from "./PokemonContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokemon-json-server.herokuapp.com/pokemons")
      .then((res) => res.json())
      .then(setPokemons);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  function handleDeletePokemon(pokemonToDelete) {
    const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== pokemonToDelete.id);
    setPokemons(updatedPokemons);
  }

  function handleUpdatePokemon(updatedPokemon) {
    const updatedPokemons = pokemons.map((pokemon) =>
    pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon
    );
    setPokemons(updatedPokemons);
  }

  return (
    <> 
      <Header />
      {showForm ? <PokemonForm onAddPokemon={handleAddPokemon} /> :null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Create a Pokemon</button>
      </div>
      <PokemonContainer
        pokemons={pokemons}
        onDeletePokemon={handleDeletePokemon}
        onUpdatePokemon={handleUpdatePokemon}
        />
    </>
  );
}

export default App;
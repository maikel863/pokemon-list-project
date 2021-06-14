import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonContainer({ pokemons, onDeletePokemon, onUpdatePokemon }) {
    const pokemonCards = pokemons.map((pokemon) => (
        <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onDeletePokemon={onDeletePokemon}
            onUpdatePokemon={onUpdatePokemon}
            />
    ));

    return <div id="pokemon-col">{pokemonCards}</div>
}

export default PokemonContainer;
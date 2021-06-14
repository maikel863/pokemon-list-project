import React from "react";

function PokemonCard({ pokemon, onDeletePokemon, onUpdatePokemon}) {
    const { id, name, type, IVs } = pokemon;

function handleUpdateClick() {
    const updateObj = {
        IVs: pokemon.IVs + 1,
        };
    
        fetch(`https://pokemon-json-server.herokuapp.com/pokemons/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
            .then((res) => res.json())
            .then(onUpdatePokemon);
    }    

function handleDeleteClick() {
        fetch(`https://pokemon-json-server.herokuapp.com/pokemons/${id}`, {
        method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => {
            onDeletePokemon(pokemon);
        });
    }

    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>{type}</h3>
            <p>{IVs} IV's</p>
            <button className="IVs-button" onClick={handleUpdateClick}>
                + IVs
            </button>
            <button className="delete-button" onClick={handleDeleteClick}>
                Delete Pokemon
            </button>
        </div>
    );
}

export default PokemonCard;
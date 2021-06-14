import React, { useState } from "react";

function PokemonForm({ onAddPokemon }) {
    const [formData, setFormData] = useState({
        name:"",
        type:"",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newPokemon = {
            ...formData,
            IVs: 0,
        };

        fetch("https://pokemon-json-server.herokuapp.com/pokemons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPokemon),
        })
            .then((res) => res.json())
            .then(onAddPokemon);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="add-pokemon">
                <h3>Add a pokemon</h3>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="name"
                    className="input-txt"
                />
                <input
                    type="text"
                    name="type"
                    onChange={handleChange}
                    value={formData.type}
                    placeholder="type"
                    className="input-txt"
                />
                
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Upload New Pokemon"
                    className="submit"
                />
            </form>
        </div>
    );
}

export default PokemonForm;

// obj - Object Literal?
export const storeData = {
    state : {
        pokemonData: null, // will hold the full Pokémon data fetched from the API.
        savedDate: null
    }, // state is the internal storage of the Store.

    setPokemon(data) {
        this.state.pokemonData = data ;
    },

    getPokemon(){
        return this.state.pokemonData
    }
}



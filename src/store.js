
// obj - Object Literal?
const storeData = {
    state : {
        pokemonData: null, // will hold the full Pokémon data fetched from the API.
    }, // state is the internal storage of the Store.

    setPokemon(data) {
        this.state.pokemonData(data)
    },

    getPokemon(){
        return this.state.pokemonData
    }
}


export default storeData ;
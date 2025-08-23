
// obj - Object Literal?
export const storeData = {
    state : {
        pokemonData: null, // will hold the full Pokémon data fetched from the API.
        lastSearch: null // will hold the name of the last searched Pokémon.
    }, // state is the internal storage of the Store.

    setPokemon(data) {
        this.state.pokemonData = data ; 
    },

    getPokemon(){
        return this.state.pokemonData
    },

    setLastSearch(data){
        this.state.lastSearch = data ;
    },

    getLastSearch(){
        return this.state.lastSearch
    }
}



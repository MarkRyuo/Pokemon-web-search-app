

const SavetheSearch = () => {
    
}



const fetchPokemon = async (pokemonName) => {
    try {
        // fetch the response
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
            method: "GET"
        })
        if(!response.ok){
            throw new Error("Couldt fetch the api data!")
        } else {
            return await response.json()
        }
    } catch (error) {
        console.error(error, "Something went wrong!")
    }
}


export async function SearchthePokemon() {
    // get the input
    const inptPokemon = document.getElementById("inptPokemon").value ;

    // get the response 
    const data = await fetchPokemon(inptPokemon)
    console.log(data)
}
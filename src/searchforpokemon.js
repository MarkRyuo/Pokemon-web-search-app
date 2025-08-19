

const saveSearch = (pokemonName) => {
    // save the name of pokemon
    // save the last search
    localStorage.setItem("pokemonName", pokemonName);
};


const fetchPokemon = async (name) => {
    try {
        // fetch the response
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            method: "GET"
        })
        if(!response.ok){
            throw new Error("Failed to fetch Pokemon data!")
        }
        return await response.json();

    } catch (error) {
        console.error("Error Fetching Pokemon API!", error.message) ;
        return null ;
    }
};


export async function searchThePokemon() {
    // get the input
    const inptPokemon = document.getElementById("inptPokemon").value.toLowerCase().trim();

    // guard clause 
    if(!inptPokemon) {
        alert("Enter a Pokemon!")
        return ;
    }

    // get the response 
    const data = await fetchPokemon(inptPokemon);

    setTimeout(() => {

    }, 3000)
    
    if(data) {
        saveSearch(data.name) ;
        alert(`Pokemon Found! ${data.name}`) ;

    } else {
        alert("Pokemon is not Found!") ;
    }
    
};
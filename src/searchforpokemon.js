

const saveSearch = (pokemonName) => {
    // save the name of pokemon
    // save the last search
    localStorage.setItem("pokemonName", pokemonName);
};

const loadingSearch = () => {
    const loading = document.createElement("h1");
    loading.innerHTML = "Loading..."
}



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
    
    if(data) {
        document.append(loadingSearch)
        setTimeout(() => {
            saveSearch(data.name) ;
            alert(`Pokemon Found! ${data.name}`) ;

        }, 2000)
    } else {
        alert("Pokemon is not Found!") ;
    }
    
};
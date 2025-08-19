

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
    const container = document.getElementById("container") ;
    const h1 = document.createElement("h1");
    
    if(data) {
        container.style.display = "none";

        h1.innerHTML = "LOADING..."
        document.body.append(h1);
        setTimeout(() => {
            saveSearch(data.name) ;
            alert(`Pokemon Found! ${data.name}`) ;
            container.style.display = "block";
            h1.style.display = "none";
        }, 3000)

    } else {
        alert("Pokemon is not Found!") ;
    }
    
};
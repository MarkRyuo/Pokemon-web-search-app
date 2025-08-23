import { router } from "./router.js" ;
import { storeData } from './store.js' ;

const saveSearch = (pokemonName) => {
    // save the name of pokemon
    // save the last search
    localStorage.setItem("pokemonName", pokemonName);
};


const fetchPokemon = async (name) => {
    //
    try {
        // fetch the response
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            method: "GET"
        })
        console.log(response)
        if(!response.ok){
            throw new Error("Failed to fetch Pokemon data!")
        }
        return await response.json();

    } catch (error) {
        console.error("Error Fetching Pokemon API!", error.message) ;
        return null ;
    }
};

const isLoading = (show) => {
    document.getElementById("loading").style.display = show ? "block" : "none"; // Ternary 
}


export async function searchThePokemon() {
    // get the input
    const inptPokemon = document.getElementById("inptPokemon").value.toLowerCase().trim();

    // guard clause 
    if(!inptPokemon) {
        alert("Enter a Pokemon!")
        return ;
    }
    
    
    // starting fetching
    // get the response 
    const data = await fetchPokemon(inptPokemon); // searching 
    console.log(data)
    const spritesData = data.sprites.front_default ;
    
    const container = document.getElementById("container") ;

    if(data) {
        // if data is true, hide the container & show the isLoading func. 
        // if data is true, setTimeout for delay 3s to show the data & show the container & set the isLoading to false.
        isLoading(true)
        container.style.display = "none";
        
        setTimeout(() => {
            saveSearch(data.name) ;
            isLoading(false)
            container.style.display = "block";

            storeData.setPokemon({ name: data.name, image: spritesData })
            storeData.setLastSearch({ name: data.name, image: spritesData })
            router.navigate("/result"); //
        }, 3000)
    } else {
        alert("Pokemon is not Found!") ;
        container.style.display = "block"
    }
    
};

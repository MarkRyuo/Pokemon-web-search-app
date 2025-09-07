import { router } from "./router.js" ;
import { storeData } from './store.js' ;
import { apiRequest } from "./api/apiClient.js";


const fetchPokemon = async (name) => {
    return apiRequest("https://pokeapi.co/api/v2/pokemon", `/${name}`, {
        method: "GET"
    } )
};



// Helpers 

const showLoading = (show) => {
    document.getElementById("loading").style.display = show ? "block" : "none"; // Ternary 
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}; // short 


// get input 
const getInput = () => {
    const inptPokemon = document.getElementById("inptPokemon");
    const value = inptPokemon.value.toLowerCase().trim()

    //Guard Clause 
    if(!value) { 
        alert("Enter a Pokemon!") 
        return null ;
    }

    return value;
}

// show and hide 

const handleUiSearch= (hide) => {
    showLoading(true)
    return container = document.getElementById("container").style.display = hide? "none": "block";
}

// store data

const storedData = (name, image) => {
    storeData.setPokemon({name: name, image: image })
    storeData.setLastSearch({name: name, image: image})
}

// Main 
export async function searchThePokemon() {
    
    try {
        
        const data = await fetchPokemon(getInput()); // searching 
        console.log(data)
        const spritesData = data.sprites.front_default ;

        handleUiSearch(true)

        await delay(3000)

        storedData(data.name, spritesData)
        router.navigate("/result"); //

        
    } catch (error) {
        handleUiSearch(false)
        alert("Pokemon is not Found!") ;
        console.error(error.message)
    }
    
};

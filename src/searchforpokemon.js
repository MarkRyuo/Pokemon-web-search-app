import { router } from "./router.js" ;
import { storeData } from './store.js' ;
import { apiRequest } from "./api/apiClient.js";


const fetchPokemon = async (name) => {
    return apiRequest("https://pokeapi.co/api/v2/pokemon", `/${name}`, {
        Method: "GET"
    } )
};

const showLoading = (show) => {
    document.getElementById("loading").style.display = show ? "block" : "none"; // Ternary 
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
};

const delay02 = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve(ms)   
        }, ms)
    })
}



export async function searchThePokemon() {
    // get the input
    const inptPokemon = document.getElementById("inptPokemon") ;
    const container = document.getElementById("container") ;

    const pokemonName = inptPokemon.value.toLowerCase().trim() ;

    // guard clause 
    if(!pokemonName) {
        alert("Enter a Pokemon!")
        return ;
    }    
    
    // starting fetching
    // get the response 
    
    try {
        
        const data = await fetchPokemon(pokemonName); // searching 
        console.log(data)
        const spritesData = data.sprites.front_default ;

        showLoading(true)
        container.style.display = "none" ;

        await delay02(3000)

        storeData.setPokemon({ name: data.name, image: spritesData })
        storeData.setLastSearch({ name: data.name, image: spritesData })
        router.navigate("/result"); //

        
    } catch (error) {
        container.style.display = "block"
        alert("Pokemon is not Found!") ;
        console.error(error.message)
    }
    
};

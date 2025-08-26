import { router } from "./router.js" ;
import { storeData } from './store.js' ;
import { apiRequest } from "./api/apiClient.js";


const fetchPokemon = async (name) => {
    return apiRequest("https://pokeapi.co/api/v2/pokemon", `/${name}`, {
        Method: "GET"
    } )
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

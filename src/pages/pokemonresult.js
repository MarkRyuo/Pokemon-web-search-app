import { storeData } from "../store.js" ;

export function result() {
    const data = storeData.getPokemon() ;
    document.querySelector("#app").innerHTML = `
            <div class="resultContainer">
                <h1>${data.name}</h1>
        
            </div>
    
    `;
}

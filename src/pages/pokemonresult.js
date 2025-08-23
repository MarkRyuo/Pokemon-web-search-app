import { store } from "../store.js" ;

export function result() {
    const data = store.getPokemon() ;
    document.querySelector("#app").innerHTML = `
            <div class="resultContainer">
                <h1>${data.name}</h1>
        
            </div>
    
    `;
}

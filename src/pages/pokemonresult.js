import { storeData } from "../store.js" ;

export function result() {
    const data = storeData.getPokemon() ;
    const Search = storeData.getLastSearch() ;

    if(!data) {
        document.querySelector("#app").innerHTML = `
            <div class="resultContainer">
                <h1>${Search.name}</h1>
                <img src="${Search.image}" id="img">
            </div>
    
    `;
    } else {
        document.querySelector("#app").innerHTML = `
                <div class="resultContainer">
                    <h1>${data.name}</h1>
                    <img src="${data.image}" id="img">
                </div>
        
        `;
    }

}

import { storeData } from "../store.js" ;

export function result() {
    const data = storeData.getPokemon() ;

    if(!data) {
        document.querySelector("#app").innerHTML = `
            <div class="resultContainer">
                <h1>NOT FOUND!</h1>
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

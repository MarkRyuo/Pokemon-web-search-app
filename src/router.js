import Navigo from "navigo";
import { homepage } from "./main.js";
import { result } from "./pages/pokemonresult.js"

export const router = new Navigo('/') ;

router 
 .on ('/', () => homepage())
 .on ('/result', () => {
    document.querySelector("#app").innerHTML = result() ;
    console.log("Viewing Result!")
 })

 //
 router.resolve();
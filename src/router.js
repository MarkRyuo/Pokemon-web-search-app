//import Navigo
import Navigo from "navigo";
import { homepage } from "./main.js";
import { result } from "./pages/pokemonresult.js"

// used navigo
export const router = new Navigo('/') ; 



// .on is method
router 
 .on ('/', () => homepage())
 .on ('/result', () => result()) 
 .notFound(() => {
    document.querySelector("#app").innerHTML = `<h1>404 Page Not Found!</h1>`
    })

 
 document.addEventListener("DOMContentLoaded", () => {
     router.resolve(); // resolve is methoc 
 })
//import Navigo
import Navigo from "navigo";
import { homepage } from "./main.js";
import { result } from "./pages/pokemonresult.js"

// used navigo
export const router = new Navigo('/') ;

router 
 .on ('/', () => homepage())
 .on ('/result', () => result()) 

 //
 router.resolve();
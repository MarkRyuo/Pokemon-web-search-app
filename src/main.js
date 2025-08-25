import './style.css'
import { searchThePokemon } from './searchforpokemon'
import { router } from './router';


export function homepage () {
  document.querySelector('#app').innerHTML = `
  <div>
    <div id="container">
    <h1>POKEMON</h1>
      <input type="text" name="searchPokemon" placeholder="Search a Pokemon!" id="inptPokemon"> <br>
      <button type="button" id="btnSearch">
        Search
      </button>
    </div>
    <div id="loading" style="display: none">
      <h1>LOADING...</h1>
    </div>
  </div>
`
const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", searchThePokemon);

}





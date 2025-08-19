import './style.css'
import { SearchthePokemon } from './searchforpokemon'


document.querySelector('#app').innerHTML = `
  <div>
    <input type="text" name="searchPokemon" placeholder="Search a Pokemon!" id="inptPokemon">
    <button type="button" id="btnSearch">
      Search
    </button>
  </div>
`

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", SearchthePokemon);




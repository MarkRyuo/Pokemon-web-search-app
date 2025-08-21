import { result } from './pages/pokemonresult.js'


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}



const router = async () => {

    const routes = [
        { path : "/", view : result() },
        {path: "/result", view : () => console.log("Viewing result")}
    ];

    // Test each routes for potencial matches
    const potencialMatches = routes.map(route => {
        return {
            route : route,
            isMatch : location.pathname === route.path 
        }
    });
    console.log(potencialMatches);

    const match = potencialMatches.find(potencialMatch => potencialMatch.isMatch) ;

    if(!match) {
        match = {
            route : routes[0],
            isMatch: true
        }
    }
}

document.addEventListener(DOMContentLoaded, () => {
    router()
}) ;
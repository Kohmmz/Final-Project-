document.addEventListener("DOMContentLoaded", () => { //wait for the dom to be loaded
    //DOM elements//
    const characterdisplayed = document.getElementById("character-displayed");
    const characterguess = document.getElementById("character-guess");
    const stargame = document.getElementById("star-game");
    const correctlyguessedlist = document.getElementById("correctly-guessed-list");
    const AddtoFavourite = document.getElementById("Add to Favourite");

    //fetch data//
    async function getpokimonchar() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");//get the data from the api
            const data = await response.json();//change it to json
            console.log(data.results);//console.log the date
            return data.results; // to call the array
        }

    }


})
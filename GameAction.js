document.addEventListener("DOMContentLoaded", () => { //wait for the dom to be loaded
    //DOM elements//
    const characterdisplayed = document.getElementById("character-displayed");
    const characterguess = document.getElementById("character-guess");
    const stargame = document.getElementById("star-game");
    const correctlyguessedlist = document.getElementById("correctly-guessed-list");
    const submit = document.getElementById("submit")
    const Favourite = document.getElementById("add-to-favourite")
    // function waits for the game button to be clicked to start
    gamestartbutton.addEventListener("click", async () => {

    })
    // the submit button to the fetch url
    function inputguess(submit, characterguess) {

        return characterguess = submit
    }


    //fetch data//
    async function getpokimonchar() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputguess}`); //get the data from the api
            const data = await response.json(); //change it to json
            console.log(data.results); //log the array
            return data.results; // return pokemon arry
        } catch (error) {
            console.error("Error fetching Pokémon data:", error)
        };


    }


})
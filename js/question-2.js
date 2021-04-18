const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3dd86d7fbbce4693b94d68d2e12ff328";

const resultContainer = document.querySelector(".results")

async function getGames(){

    try {
        const response = await fetch(url);

        const results = await response.json();

        const details = results.results;

        resultContainer.innerHTML = "";

        for (let i = 0; i < details.length; i++) {
            console.log(details[i].name); //Just to check the arrays

            if (i === 8) {
                break;
            }
            resultContainer.innerHTML += `<div class = "result"> The game: ${details[i].name} <br> Rating: ${details[i].rating} <br> Number of values: ${details[i].tags.length}</div>`;

        }

    } catch (error) {
        console.log("Not the right URL") // So that a user can check the error
        resultContainer.innerHTML = "An error occured";
    }
}

getGames();
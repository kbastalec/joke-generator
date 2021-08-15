const jokeSetup = document.getElementById('setup');
const jokePunchline = document.getElementById('punchline');
const newJokeButton = document.getElementById('button');

let apiJoke = [];


// Get Joke from API and Put It On page
async function getJoke() {
    const apiUrl = 'https://official-joke-api.appspot.com/jokes/random';
    try {
        const response = await fetch(apiUrl);
        apiJoke = await response.json(); 
        let joke = apiJoke;
            if (jokeSetup.textContent == '' && jokePunchline.textContent == '') {
                    jokeSetup.textContent = joke.setup;
                    jokePunchline.textContent = joke.punchline;
            } else {
                    jokeSetup.textContent = joke.setup;
                    jokePunchline.textContent = joke.punchline;
            }   
    } catch (error) {
        // Catch Error Here
    } 
} 


// Event Listeners
newJokeButton.addEventListener('click', getJoke);


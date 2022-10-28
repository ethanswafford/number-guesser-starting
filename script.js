let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let humanDiff;


function generateTarget() {
    return Math.round(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetGuess) {
    humanDiff = Math.abs(targetGuess - userGuess);
}

console.log(generateTarget());
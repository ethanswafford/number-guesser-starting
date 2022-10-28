let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let humanDiff;
let computerDiff;

function generateTarget() {
    return Math.round(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetGuess) {
    humanDiff = Math.abs(targetGuess - userGuess);
    computerDiff = Math.abs(targetGuess - computerGuess);
    if (humanDiff <= targetGuess) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === "human") {
        humanScore++;
    } else {
        if (winner === "computer") {
            computerScore++;
        }
    }
}

console.log(generateTarget());
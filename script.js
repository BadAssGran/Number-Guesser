let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => Math.floor(Math.random() * 10);

let getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a number between 0 and 9');
    }
    if (getAbsoluteDistance(humanGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
        return true;
    } 
    else {
        return false;
    }
}

function updateScore(winner) {
    winner==='human' ? humanScore += 1 : computerScore += 1;
}

let advanceRound = () => currentRoundNumber += 1;

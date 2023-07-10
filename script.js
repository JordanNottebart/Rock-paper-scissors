const playerSelection = "Paper";
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3);

    if(randomNumber === 0) {
        return "Rock";
    }
    else if(randomNumber === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();

    if (playerSelectionLowerCase === "rock") {
        if (computerSelection === "Rock") {
            return "It's a draw! You both chose Rock!";
        }
        else if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock";
        }
        else {
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelectionLowerCase === "paper") {
        if (computerSelection === "Paper") {
            return "It's a draw! You both chose Paper!";
        }
        else if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper";
        }
        else {
            return "You win! Paper beats Rock";
        }
    }
    else {
        if (computerSelection === "Scissors") {
            return "It's a draw! You both chose Scissors!";
        }
        else if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors";
        }
        else {
            return "You win! Scissors beats Paper";
        }
    }
}
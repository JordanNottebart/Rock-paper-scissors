const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const retryButton = document.getElementById("retryButton");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = playerScoreDisplay.innerText;
let computerScore = computerScoreDisplay.innerText;
let results = document.getElementById("results");
let resultsRound;

game();

function game() {
    rockButton.addEventListener("click", function () {
        resultsRound = playRound("rock");
        updateScore(resultsRound);
    });
    paperButton.addEventListener("click", function () {
        resultsRound = playRound("paper");
        updateScore(resultsRound);
    });
    scissorsButton.addEventListener("click", function () {
        resultsRound = playRound("scissors");
        updateScore(resultsRound);
    });
    retryButton.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;

        playerScoreDisplay.innerText = playerScore;
        computerScoreDisplay.innerText = computerScore;
        results.innerText = "Make a choice! (First to win 5 games)";

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    });
}

function updateScore(resultsRound) {
    // If the player won, add a point to the playerScore
    if (resultsRound === 1) {
        playerScore++;
        playerScoreDisplay.innerText = playerScore;
    }
    // If the computer won, add a point to the computerScore
    else if (resultsRound === -1) {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            results.innerText = "You win!";
        }
        else {
            results.innerText = "You lose!";
        }

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            results.innerText = "It's a draw! You both chose Rock!";
            return 0;
        }
        else if (computerSelection === "Paper") {
            results.innerText = "You lose! Paper beats Rock";
            return -1;
        }
        else {
            results.innerText = "You win! Rock beats Scissors";
            return 1;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
            results.innerText = "It's a draw! You both chose Paper!";
            return 0;
        }
        else if (computerSelection === "Scissors") {
            results.innerText = "You lose! Scissors beats Paper";
            return -1;
        }
        else {
            results.innerText = "You win! Paper beats Rock";
            return 1;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "Scissors") {
            results.innerText = "It's a draw! You both chose Scissors!";
            return 0;
        }
        else if (computerSelection === "Rock") {
            results.innerText = "You lose! Rock beats Scissors";
            return -1;
        }
        else {
            results.innerText = "You win! Scissors beats Paper";
            return 1;
        }
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

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
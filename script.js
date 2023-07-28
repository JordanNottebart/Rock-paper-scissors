let results = document.getElementById("results");
let resultsRound;
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
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
}

function updateScore(resultsRound) {
    let playerScoreDisplay = document.getElementById("playerScore");
    let computerScoreDisplay = document.getElementById("computerScore");
    let playerScore = playerScoreDisplay.innerText;
    let computerScore = computerScoreDisplay.innerText;

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
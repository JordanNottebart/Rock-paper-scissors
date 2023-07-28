game();

function game() {
    let playerSelection = "";
    let computerSelection = "";
    let playerScore = 0;
    let computerScore = 0;
    let results;

    computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    results = (playRound(playerSelection, computerSelection));

    // If there was an error remove that attempt from the game
    if (results === 10) {
        index--;
    }
    // If the player won, add a point to the playerScore
    else if (results === 1) {
        playerScore++;
    }
    // If the computer won, add a point to the computerScore
    else if (results === -1) {
        computerScore++;
    }

    if (playerScore > computerScore) {
        console.log(`You won! Player: ${playerScore} Computer: ${computerScore}`);
    } 
    else if (computerScore > playerScore) {
        console.log(`You lost! Player: ${playerScore} Computer: ${computerScore}`);
    }
    else {
        console.log(`It's a draw! Player: ${playerScore} Computer: ${computerScore}`)
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

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();

    if (playerSelectionLowerCase === "rock") {
        if (computerSelection === "Rock") {
            console.log("It's a draw! You both chose Rock!");
            return 0;
        }
        else if (computerSelection === "Paper") {
            console.log("You lose! Paper beats Rock");
            return -1;
        }
        else {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    }
    else if (playerSelectionLowerCase === "paper") {
        if (computerSelection === "Paper") {
            console.log("It's a draw! You both chose Paper!");
            return 0;
        }
        else if (computerSelection === "Scissors") {
            console.log("You lose! Scissors beats Paper");
            return -1;
        }
        else {
            console.log("You win! Paper beats Rock");
            return 1;
        }
    }
    else if (playerSelectionLowerCase === "scissors") {
        if (computerSelection === "Scissors") {
            console.log("It's a draw! You both chose Scissors!");
            return 0;
        }
        else if (computerSelection === "Rock") {
            console.log("You lose! Rock beats Scissors");
            return -1;
        }
        else {
            console.log("You win! Scissors beats Paper");
            return 1;
        }
    }
    else {
        console.log("Not a valid input");
        return 10;
    }
}
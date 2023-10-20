let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"];
    moves = moves[Math.floor(Math.random() * 3)];
    return moves
}

const computerSelection = getComputerChoice();

function getPlayerChoice() {
    // ask player for input one of moves: rock/paper/scissors ->  prompt
    let playerInput = prompt("Is it rock, paper or scissors?", "paper");
    //answers from should always be lowercase
    playerInput = playerInput.toLowerCase();
    return playerInput;
}

const playerSelection = getPlayerChoice();

function playRound(computerSelection, playerSelection) {
    let result;
    if (computerSelection === playerSelection) {
        return result = "tie";
    } else if (computerSelection === "rock" && playerSelection === "scissors"
        || computerSelection === "paper" && playerSelection === "rock"
        || computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return result = "Computer Win";
    } else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return result = "Player Win";
    } else {

        return result = "Wrong Input";
    }

}


function game() {

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Is it rock, paper or scissors?", "paper");
        const computerSelection = getComputerChoice();

        const roundResult = playRound(computerSelection, playerSelection);
        console.log('Human picks: ' + playerSelection);
        console.log('Computer picks: ' + computerSelection);
        console.log('Round ' + round + ': ' + roundResult);
    }

    if (playerScore > computerScore) {
        console.log('You win the game! Your Score: ' + playerScore + ' Computer Score: ' + computerScore);
    } else if (playerScore < computerScore) {
        console.log('You lose the game! Your Score: ' + playerScore + ' Computer Score: ' + computerScore);
    } else {
        console.log('It\'s a tie! Your Score: ' + playerScore + ' Computer Score: ' + computerScore);
    }

}

game()
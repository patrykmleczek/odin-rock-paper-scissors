// let computer choose random move (rock/paper/scissors) -> getComputerChoice
const computerSelection = getComputerChoice()
function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"];
    let randomMove = Math.floor(Math.random() * moves.length);
    console.log(moves[randomMove]);
    return moves[randomMove];
}
// ask player for input one of moves: rock/paper/scissors ->  prompt
let playerSelection = prompt("Is it rock, paper or scissors?", "paper")
//answers from should always be lowercase
playerSelection = playerSelection.toLowerCase()
console.log(playerSelection)
// play round and compare moves, check who wins 
function playRound(computerSelection, playerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    if (computerSelection === playerSelection) {
        computerScore = 0;
        playerScore = 0;
        console.log("Tie");
        return [computerScore, playerScore];
    } else if (computerSelection === "rock" && playerSelection === "scissors"
        || computerSelection === "paper" && playerSelection === "rock"
        || computerSelection === "scissors" && playerSelection === "paper") {
        computerScore = 1;
        playerScore = 0;
        console.log("score for computer")
        return [computerScore, playerScore];
    } else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissors" && computerSelection === "paper") {
        computerScore = 0;
        playerScore = 1;
        console.log("score for human")
        return [computerScore, playerScore];
    } else {
        // due to lack of constriction to input, other moves will let computer win
        computerScore = 1;
        playerScore = 0;
        console.log("Wrong Move - Computer Wins!")
        return [computerScore, playerScore];
    }
}
playRound(computerSelection, playerSelection);
// return string with text that informs about result
// play 5 rounds, keep score, tell final result, who won the game. 


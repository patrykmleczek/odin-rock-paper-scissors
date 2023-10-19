// let computer choose random move (rock/paper/scissors) -> getComputerChoice
const computerSelection = getComputerChoice()
function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"];
    let randomMove = Math.floor(Math.random() * moves.length);
    console.log(moves[randomMove]);
    return moves[randomMove];

}
// ask player for input one of moves: rock/paper/scissors ->  prompt
let playerSelection = prompt("Is it rock, paper or scissors?", " ")
//answers from should always be lowercase
playerSelection = playerSelection.toLowerCase()
// console.log(playerSelection)
// play round and compare moves, check who wins
// return string with text that informs about result
// play 5 rounds, keep score, tell final result, who won the game. 


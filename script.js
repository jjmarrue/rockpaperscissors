// Rock Paper Scissors mini-game.
// Author: Juan Mata. July 2022.
// A learning project for the Odin Project


// Computer's turn
function computerPlay(){
    const gameChoices = ["ROCK", "PAPER", "SCISSORS"];
    let computerSelection = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[computerSelection];
}
// console.log(computerPlay());

// User's turn
function userPlay(){
    let userChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors' ");
    if (userChoice != null) {
        return userChoice.toUpperCase();
    }
    else {
        userChoice = 'QUIT';
        return userChoice;
    }
}
// console.log(userPlay());
// let computerWins = 0;
// let userWins = 0;

// Play a single round
function playRound(playerSelection, computerSelection){
    let rock = "ROCK";
    let paper = "PAPER";
    let scissors = "SCISSORS";
    if ((playerSelection == rock && computerSelection == scissors) || (playerSelection == scissors && computerSelection == paper) || (playerSelection == paper && computerSelection == rock)){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if((playerSelection == scissors && computerSelection == rock) || (playerSelection == paper && computerSelection == scissors) || (playerSelection == rock && computerSelection == paper)){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else {
        return `A tie! ${playerSelection} and ${computerSelection}.`;
    }
}

console.log(playRound(userPlay(), computerPlay()));
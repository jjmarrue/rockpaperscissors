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

// Play a single round
function playRound(playerSelection, computerSelection){
    let rock = "ROCK";
    let paper = "PAPER";
    let scissors = "SCISSORS";

    // Player wins
    if ((playerSelection == rock && computerSelection == scissors) || (playerSelection == scissors && computerSelection == paper) || (playerSelection == paper && computerSelection == rock)){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    // Computer wins
    else if((playerSelection == scissors && computerSelection == rock) || (playerSelection == paper && computerSelection == scissors) || (playerSelection == rock && computerSelection == paper)){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    // Tie
    else {
        return `A tie! ${playerSelection} and ${computerSelection}.`;
    }
}
// console.log(playRound(userPlay(), computerPlay()));

// Play multiple rounds
function game(){
    let computerWins = 0;
    let userWins = 0;

    if (userPlay() == 'QUIT'){
        return;
    }

    // Play 5 rounds
    for (i = 0; i < 5; i++){      
        // Tally up each round winner
        let roundResult = playRound(userPlay(), computerPlay());
        if (roundResult.includes("You win")){
            userWins += 1;
        }
        else if (roundResult.includes("You lose")){
            computerWins += 1;
        }
        // Print result of each round
        console.log(roundResult);  
    }
   

    // Print final winner
    console.log(determineWinner(userWins, computerWins));
    
}

// Provide game winner
function determineWinner (userWins, computerWins){
    let gameResult = `You: ${userWins}. Computer: ${computerWins}.`;
    if (userWins > computerWins){
        return gameResult + " Congratulations, you win!";
    }
    else if (userWins < computerWins) {
        return gameResult + " Better luck next time!";
    }
    else {
        return gameResult + " It's a tie!";
    }
}

// Play the game
game();

// Rock Paper Scissors mini-game.
// Author: Juan Mata. August 2022.
// A learning project for the Odin Project using HTML5, Flexbox, and Javascript.

let playerScore = 0;
let computerScore = 0;
const playerChoices = document.querySelectorAll('.gesture-btn');
const roundResult = document.querySelector('#round-result');
const playerResult = document.querySelector('#p-score');
const computerResult = document.querySelector('#c-score');
const finalScore = document.querySelector('#final-score');
const restart = document.querySelector('#restart');
const playerGestureRock = document.querySelector('#p-gesture .rock-img');
const playerGesturePaper = document.querySelector('#p-gesture .paper-img');
const playerGestureScissors = document.querySelector('#p-gesture .scissors-img');
const compGestureRock = document.querySelector('#c-gesture .rock-img');
const compGesturePaper = document.querySelector('#c-gesture .paper-img');
const compGestureScissors = document.querySelector('#c-gesture .scissors-img');

function game(){
    playerChoices.forEach(choice => {
        choice.addEventListener('click', playRound);
    });
    //Allow user to restart the game    
    restart.addEventListener('click', restartGame);
}

function playRound(e){
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();
    let roundWinner = determineRoundWinner(playerSelection, computerSelection);
    let gameWinner = trackScore(roundWinner);
    showImages(playerSelection, computerSelection);
    //roundResult.textContent = roundWinner;
    playerResult.textContent = `${playerScore}`;
    computerResult.textContent = `${computerScore}`;
    finalScore.textContent = gameWinner;
  
    // End game by disabling buttons when either participant score is 5. 
    if (playerScore === 5 || computerScore === 5){       
        playerChoices.forEach(choice => {
            choice.disabled = true;
        });
    }
}

// Show or hide the corresponding hand sign
function showImages(playerSelection, computerSelection){
    if (playerSelection === 'Rock'){
        playerGestureRock.hidden = false;
        playerGesturePaper.hidden = true;
        playerGestureScissors.hidden = true;
    } else if (playerSelection === 'Paper'){
        playerGesturePaper.hidden = false;
        playerGestureRock.hidden = true;
        playerGestureScissors.hidden = true;
    } else if (playerSelection === 'Scissors'){
        playerGestureScissors.hidden = false;
        playerGesturePaper.hidden = true;
        playerGestureRock.hidden = true;
    }

    if (computerSelection === 'Rock'){
        compGestureRock.hidden = false;
        compGesturePaper.hidden = true;
        compGestureScissors.hidden = true;
    } else if (computerSelection === 'Paper'){
        compGesturePaper.hidden = false;
        compGestureRock.hidden = true;
        compGestureScissors.hidden = true;
    } else if (computerSelection === 'Scissors'){
        compGestureScissors.hidden = false;
        compGesturePaper.hidden = true;
        compGestureRock.hidden = true;
    }
}

function getComputerChoice(){
    const gameChoices = ["Rock", "Paper", "Scissors"];
    let computerVal = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[computerVal];
}

function determineRoundWinner(playerSelection, computerSelection){
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    let result ='';
    if ((playerSelection == rock && computerSelection == scissors) || (playerSelection == scissors && computerSelection == paper) || (playerSelection == paper && computerSelection == rock)){
        result = `You win. ${playerSelection} beats ${computerSelection}`;
        
    } else if((playerSelection == scissors && computerSelection == rock) || (playerSelection == paper && computerSelection == scissors) || (playerSelection == rock && computerSelection == paper)){
        result = `You lose. ${computerSelection} beats ${playerSelection}`;

    } else {
        result = "It's a Tie.";
    }
    return result;    
}

function trackScore(result) {
    if (result.includes('You win')){
        playerScore++;      
    } else if (result.includes('You lose')){
        computerScore++;
    }
    if (playerScore === 5) {
       return 'You win the game!';
    }
    if (computerScore === 5){
        return 'Oh no! Better luck next time';
    }
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    finalScore.textContent = '';
    playerResult.textContent = `${playerScore}`;
    computerResult.textContent = `${computerScore}`;
    playerGestureScissors.hidden = true;
    playerGesturePaper.hidden = true;
    playerGestureRock.hidden = true;
    compGestureScissors.hidden = true;
    compGesturePaper.hidden = true;
    compGestureRock.hidden = true;
    playerChoices.forEach(choice => {
        choice.disabled = false;
    });  
}

// Play the game
game();

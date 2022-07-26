// Rock Paper Scissors mini-game.
// Author: Juan Mata. July 25 2022.
// A learning project for the Odin Project using HTML5, Flexbox, and Javascript.

let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerGesture = document.querySelector('#player-gesture');
const computerGesture = document.querySelector('#computer-gesture');
const roundResult = document.querySelector('#round-result');
const playerResult = document.querySelector('#player-result');
const computerResult = document.querySelector('#computer-result');
const finalScore = document.querySelector('#final-score');
const restart = document.querySelector('#restart');

function game(){
    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissors.addEventListener('click', playRound);  

    //Allow user to restart the game    
    restart.addEventListener('click', restartGame);
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;

}

function getComputerChoice(){
    const gameChoices = ["Rock", "Paper", "Scissors"];
    let computerVal = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[computerVal];
}

function playRound(e){
    let playerSelection = e.target.value;
    let computerSelection = getComputerChoice();
    let roundWinner = determineRoundWinner(playerSelection, computerSelection);
    let gameWinner = trackScore(roundWinner);
 
    playerGesture.textContent = `You: ${playerSelection}`;
    computerGesture.textContent = `Computer: ${computerSelection}`;
    roundResult.textContent = roundWinner;
    playerResult.textContent = `Player score: ${playerScore}`;
    computerResult.textContent = `Computer score: ${computerScore}`;
    finalScore.textContent = gameWinner;
    
    // End game when score is 5. Disable buttons.
    if (playerScore === 5 || computerScore === 5){
        const para = document.createElement('p');
        const gameOver = document.createTextNode("Game Over");
        para.appendChild(gameOver);
        document.querySelector('#final-score').appendChild(para);
    }
}

function determineRoundWinner(playerSelection, computerSelection){
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    let result ='';
    if ((playerSelection == rock && computerSelection == scissors) || (playerSelection == scissors && computerSelection == paper) || (playerSelection == paper && computerSelection == rock)){
        result = `You win! ${playerSelection} beats ${computerSelection}`;

    } else if((playerSelection == scissors && computerSelection == rock) || (playerSelection == paper && computerSelection == scissors) || (playerSelection == rock && computerSelection == paper)){
        result = `You lose! ${computerSelection} beats ${playerSelection}`;

    } else {
        result = `It's a Tie! You both chose ${computerSelection}`;
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
        return 'You lose the game!';
    }
}

game();

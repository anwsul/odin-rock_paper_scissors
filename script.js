const ROUNDS = 5;
let playerScore = 0;
let computerScore = 0;

let body = document.querySelector("body");
let results = document.querySelectorAll(".result");
let choiceButtons = document.querySelectorAll(".choices button");
let statusLine = document.querySelector("#status-line");
let playAgainButton = document.querySelector("button#play-again");
playAgainButton.style.display = "none";
let continuePlaying = true;


choiceButtons.forEach(choiceButton => {
  choiceButton.onclick = function (e) {
    if (continuePlaying) {
      let playerChoice = e.target.id;
      let computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
      results[0].textContent = playerScore; 
      results[1].textContent = computerScore; 
      checkIfGameEnded(); 
    }
  }
});


playAgainButton.onclick = function () {
  statusLine.textContent = "";
  playerScore = 0;
  computerScore = 0;
  continuePlaying = true;
  results[0].textContent = 0; 
  results[1].textContent = 0; 
  playAgainButton.style.display = "none";
}


function getComputerChoice () {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}


function playRound (playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    statusLine.textContent = `DRAW: ${playerChoice} draws with ${computerChoice}`;
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")) {
      statusLine.textContent = `YOU SCORED: ${playerChoice} beats ${computerChoice}`;
      playerScore += 1;
  } else {
    statusLine.textContent = `COMPUTER SCORED: ${playerChoice} is beaten by ${computerChoice}`;
    computerScore += 1;
  }
}

function checkIfGameEnded() {
  if (playerScore == ROUNDS || computerScore == ROUNDS) {
    continuePlaying = false;
    playAgainButton.style.display= "block";
    statusLine.textContent = playerScore > computerScore ? "CONGRATULATIONS, YOU WON!" : "GAME OVER! YOU LOST!"
  }  
}


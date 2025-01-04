let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 10) % 3;
  return choices[index];
}


function getHumanChoice () {
  return prompt("What is your chioice");
}


function playRound (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    console.log("DRAW");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")) {
    console.log("YOU WIN!");
    humanScore += 1;
  } else {
    console.log("YOU LOSE!");
    computerScore += 1;
  }
}


function playGame () {
  let rounds = 5;

  while (rounds) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    rounds -= 1;
  }

  console.log('game finished, ');
  if (humanScore > computerScore) {
    console.log("you win");
  } else if (computerScore > humanScore) {
    console.log("you lose");
  } else {
    console.log("it is a draw");
  }
}


playGame();

let humanScore = 0;
let computerScore = 0;

console.log("--------------------------")
console.log("ROCK, PAPER, SCISSORS GAME")
console.log("--------------------------")


function getComputerChoice () {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}


function getHumanChoice () {
  let humanChoice;

  do {
    console.log("Choices: rock, paper, or scissors")
    humanChoice = prompt("What is your chioice").toLowerCase();
  } while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"); 

  return humanChoice;
}


function playRound (humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(`DRAW: ${humanChoice} draws with ${computerChoice}`)
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")) {
    console.log(`YOU SCORED: ${humanChoice} beats ${computerChoice}`)
    humanScore += 1;
  } else {
    computerScore += 1;
    console.log(`COMPUTER SCORED: ${humanChoice} is beaten by ${computerChoice}`)
  }

  console.log(`computer: ${computerScore}`);
  console.log(`human: ${humanScore}`);
}


function playGame (rounds) {
  while (rounds) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    rounds -= 1;
  }

  console.log("Game finished!");
  if (humanScore > computerScore) {
    console.log("YOU WIN");
  } else if (computerScore > humanScore) {
    console.log("YOU LOSE");
  } else {
    console.log("IT IS A DRAW");
  }
}


playGame(5);


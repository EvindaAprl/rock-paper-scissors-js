function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    result = "rock";
  } else if (randomNumber === 1) {
    result = "paper";
  } else {
    result = "scissors";
  }
  console.log(`Computer choice: ${result}`);
  return result;
}

function getHumanChoice() {
  const choice = prompt("Enter your choice (rock, paper, or scissors):");
  console.log(`Your choice: ${choice}`);
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`Draw! Both chose ${humanChoice}`);
      return;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("=== FINAL RESULT ===");

  if (humanScore > computerScore) {
    console.log("You wins the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game ends in a draw!");
  }
}

playGame();

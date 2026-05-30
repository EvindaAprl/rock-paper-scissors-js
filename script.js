function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const humanScoreText = document.querySelector(".score-box:nth-child(1) p");
  const computerScoreText = document.querySelector(".score-box:nth-child(2) p");

  function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) return;
    const resultText = document.querySelector(".result-text h2");

    if (humanChoice === computerChoice) {
      console.log(`Draw! Both chose ${humanChoice}`);
      resultText.textContent = `Draw! Both chose ${humanChoice}!`;
      return;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      humanScore++;
      humanScoreText.textContent = humanScore;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
      computerScore++;
      computerScoreText.textContent = computerScore;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }

    console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore === 5) {
      console.log("You win the game!");
      resultText.textContent = "Congratulations! You win the game!";
    } else if (computerScore === 5) {
      console.log("Computer wins the game!");
      resultText.textContent = "Computer wins the game! Better luck next time!";
    }
  }

  const buttons = document.querySelectorAll(".circle-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const humanSelection = event.target.getAttribute("data-choice");
      const computerSelection = getComputerChoice();

      playRound(humanSelection, computerSelection);
    });
  });
}

playGame();

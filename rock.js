let playerScore = 0;
let computerScore = 0;
let max = 3;
let gamesPlayed = 0;
let roundwinner = "";

const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const scoreRound = document.getElementById("scoreRound");
const humanSign = document.getElementById("humanSign");
const computerSign = document.getElementById("computerSign");
const humanText = document.getElementById("humanText");
const computerText = document.getElementById("computerText");

rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () => handleClick("paper"));
scissorsButton.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerChoice) {
  if (roundOver()) {
    setFinalMessage();
    return;
  }
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  updateScore();

  // Update the humanSign and computerSign elements directly
  humanSign.textContent = getSign(playerChoice);
  computerSign.textContent = getSign(computerChoice);

  console.log(
    "Player Choice " + playerChoice + " Computer Choice: " + computerChoice
  );
}

function roundOver() {
  return playerScore === 5 || computerScore === 5;
}
function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore += 1;
    roundwinner = "player";
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    computerScore += 1;
    roundwinner = "computer";
  } else {
    roundwinner = "tie";
  }
}

function updateScore() {
  if (roundwinner === "tie") {
    scoreRound.textContent = "It's a Tie";
  } else if (roundwinner === "player") {
    scoreRound.textContent = "You are the Winner!";
  } else {
    scoreRound.textContent = "You loose this round, Computer won!";
  }
  humanText.textContent = `Player: ${playerScore}`;
  computerText.textContent = `Computer: ${computerScore}`;
}
function getComputerChoice() {
  let num = Math.floor(Math.random() * max);

  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function showChoices(playerChoice, computerChoice) {
  humanSign.textContent = getSign(playerChoice);
  computerSign.textContent = getSign(computerChoice);
}

function setFinalMessage() {
  const finalMessage = playerScore > computerScore ? "You won!" : "You lost...";
  endgameMsg.textContent = finalMessage;
}

function getSign(choice) {
  switch (choice) {
    case "rock":
      return "✊🏾";
    case "paper":
      return "🖐🏾";
    case "scissors":
      return "✌🏾";
  }
}

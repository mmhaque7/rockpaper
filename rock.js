let humanScore = 0;
let computerScore = 0;
let max = 3;
let gamesPlayed = 0;
/**
 * Generates a random number between 0 and max and returns the corresponding
 * rock, paper, or scissors value as a console log.
 *  *
 */
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

/**
 * Asks the user to select a choice and logs it to the console.
 *
 */
function getHumanChoice() {
  let choice = prompt("Please enter a choice.\n(i.e. Rock, Paper, Scissors)");
  return choice.toLowerCase();
}

/**
 * Determines the winner of a single round of Rock Paper Scissors.
 *
 * Takes two parameters, humanChoice and computerChoice, which are strings
 * representing the human and computer's respective selections.
 *
 * If the computer wins, adds 1 to computerScore and logs a message
 * indicating the computer won.  If the human wins, adds 1 to humanScore and
 * logs a message indicating the human won.  If the two selections are
 * equal, logs a message indicating a tie and does not change either score.
 */
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
  } else if (computerChoice == "rock" && humanChoice == "scissors") {
    computerScore += 1;
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    computerScore += 1;
  } else {
    computerChoice += 1;
  }
}

/**
 * Plays 5 rounds of Rock Paper Scissors.  After each round, it updates the
 * score and displays the current score.  After all 5 rounds are played, it
 * displays the final score.
 */
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (humanScore > computerScore) {
      console.log("Human wins this round!");
    } else {
      console.log("Computer wins this round");
    }
    gamesPlayed += 1;

    console.log("Human:" + humanSelection + " computer: " + computerSelection);
  }
}
/**
 * Logs the current score of the game to the console.
 *
 * This function is called at the end of each round of the game.
 * It logs the current score of the game (humanScore vs. computerScore),
 * and whether the user is currently winning, losing, or tied.
 * It also logs the total number of rounds played (gamesPlayed).
 */
function displayGame() {
  console.log("Results");
  console.log("--------------------");
  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > humanScore) {
    console.log("You Lose!");
  } else {
    console.log("It's a Draw!");
  }
  console.log("Your Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
  console.log("Games Played:" + gamesPlayed);

  console.log("--------------------");
}

playGame();
displayGame();

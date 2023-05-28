const OPTIONS = ['ROCK','PAPER','SCISSORS'];

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let playerChoice = window.prompt("Type your choice: Rock/Paper/Scissors");
  while (!OPTIONS.includes(playerChoice.toUpperCase())) {
    playerChoice = window.prompt("Sorry, your choice is not valid. Choose again");
  }
  return playerChoice;
}

function playRound(player, computer) {
  //Plays one round of the game, taking the player selection and the computer selection as arguments
  //Depending on what the combination of these selections is, returns a string that declares the result
  if (player == "ROCK") {
    if (computer == "ROCK") {
      console.log("It's a tie!");
      return 0;
    } else if (computer == "PAPER") {
      console.log("You lose! Paper beats Rock");
      return 1;
    } else {
      console.log("You win! Rock beats Scissors");
      return 2;
    }
  } else if (player == "PAPER") {
    if (computer == "ROCK") {
      console.log("You win! Paper beats Rock");
      return 2;
    } else if (computer == "PAPER") {
      console.log("It's a tie!");
      return 0;
    } else {
      console.log("You lose! Scissors beats Paper");
      return 1;
    }
  } else {
    if (computer == "ROCK") {
      console.log("You lose! Rock beats Scissors");
      return 1;
    } else if (computer == "PAPER") {
      console.log("You win! Scissors beats Paper");
      return 2;
    } else {
      console.log("It's a tie!");
      return 0;
    }
  }
}

function game() {
  let playerScore = 0, computerScore = 0;
  let playerChoice, computerChoice;
  for (let i = 0; i < 5; i++) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    let result = playRound(playerChoice,computerChoice);
    if (result == 1) {
      computerScore++;
    } else if (result == 2) {
      playerScore++;
    }
  }
  console.log("Final Score: " + playerScore + "-" + computerScore);
  if (playerScore > computerScore) {
    console.log("Congratulations! You won!");
  } else if (playerScore < computerScore) {
    console.log("Unfortunately, you lost!");
  } else {
    console.log("The game finished in a tie!");
  }
}

game();
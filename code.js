const OPTIONS = ['ROCK','PAPER','SCISSORS'];

function getComputerChoice() {
  //returns randomly 'Rock', 'Paper' or 'Scissors'
  let choiceNumber = Math.floor(Math.random() * 3);
  return OPTIONS[choiceNumber];
}

function playRound(player, computer) {
  //Plays one round of the game, taking the player selection and the computer selection as arguments
  //Depending on what the combination of these selections is, returns a string that declares the result
  player = player.toUpperCase();
  if (player == "ROCK") {
    if (computer == "ROCK") {
      return "It's a tie!";
    } else if (computer == "PAPER") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  } else if (player == "PAPER") {
    if (computer == "ROCK") {
      return "You win! Paper beats Rock";
    } else if (computer == "PAPER") {
      return "It's a tie!";
    } else {
      return "You lose! Scissors beats Paper";
    }
  } else {
    if (computer == "ROCK") {
      return "You lose! Rock beats Scissors";
    } else if (computer == "PAPER") {
      return "You win! Scissors beats Paper";
    } else {
      return "It's a tie!";
    }
  }
}

let playerSelection = "papeR";
let computerSelection = getComputerChoice();
console.log("Player: " + playerSelection);
console.log("Computer: " + computerSelection);

console.log(playRound(playerSelection,computerSelection));
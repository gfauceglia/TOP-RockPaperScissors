const OPTIONS = ['ROCK','PAPER','SCISSORS'];

function getComputerChoice() {
  return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(player) {
  //Plays one round of the game, taking the player selection argument
  let computerScore = parseInt(document.querySelector('#computer').textContent);
  let playerScore = parseInt(document.querySelector('#human').textContent);
  if (computerScore == 5 || playerScore == 5) {
    return;
  }
  computer = getComputerChoice();
  if (player == "ROCK") {
    if (computer == "ROCK") {
      changeScore(0);
      document.querySelector('#game-info').textContent = "It's a tie!";
    } else if (computer == "PAPER") {
      changeScore(1);
      document.querySelector('#game-info').textContent = "You lose! Paper beats Rock";
    } else {
      changeScore(2);
      document.querySelector('#game-info').textContent = "You win! Rock beats Scissors";
    }
  } else if (player == "PAPER") {
    if (computer == "ROCK") {
      changeScore(2);
      document.querySelector('#game-info').textContent = "You win! Paper beats Rock";
    } else if (computer == "PAPER") {
      changeScore(0);
      document.querySelector('#game-info').textContent = "It's a tie!";
    } else {
      changeScore(1);
      document.querySelector('#game-info').textContent = "You lose! Scissors beats Paper";
    }
  } else {
    if (computer == "ROCK") {
      changeScore(1);
      document.querySelector('#game-info').textContent = "You lose! Rock beats Scissors";
    } else if (computer == "PAPER") {
      changeScore(2);
      document.querySelector('#game-info').textContent = "You win! Scissors beats Paper";
    } else {
      changeScore(0);
      document.querySelector('#game-info').textContent = "It's a tie!";
    }
  }
  return;
}

function resetScores(resetButton) {
  computerScore = 0, playerScore = 0;
  document.querySelector('#computer').textContent = '0';
  document.querySelector('#human').textContent = '0';
}

function changeScore(result) {
  let computerScore = parseInt(document.querySelector('#computer').textContent);
  let playerScore = parseInt(document.querySelector('#human').textContent);
  switch (result) {
    case 1:
      computerScore++;
      document.querySelector('#computer').textContent = computerScore;
      break;
    case 2:
      playerScore++;
      document.querySelector('#human').textContent = playerScore;
      break;
  }

  if (playerScore == 5 || computerScore == 5) {
    let result = document.createElement("div");
    result.className = "result";
    result.innerHTML = `
    <h2>Final Score:  ${playerScore} - ${computerScore}</h2>
    <button id="reset">Reset</button>
    `
    document.getElementById("scores").appendChild(result);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', () => {
      resetScores(resetButton);
      result.parentElement.removeChild(result);
    });
  }
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click',() => playRound(button.dataset.selection));
});
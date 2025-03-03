function rockPaperScissors(HumanChoice, ComputerChoice) {
  let result;
  let validateHumanInput = validateInput(HumanChoice)
  
  if(validateHumanInput === 'False') {
      console.log('Wrong parameter, please select between rock, paper or scissors')
      return 3;
  }
  else {
      if (HumanChoice === ComputerChoice) {
          return 2;
      }
      if (
        (HumanChoice === "rock") && (ComputerChoice === "scissors") ||
        (HumanChoice === "scissors") && (ComputerChoice === "paper") ||
        (HumanChoice === "paper") && (ComputerChoice === "rock")
      ) {
        return 1
      }
      if (
        (HumanChoice === "scissors") && (ComputerChoice === "rock") ||
        (HumanChoice === "paper") && (ComputerChoice === "scissors") ||
        (HumanChoice === "rock") && (ComputerChoice === "paper")
      )
      {
        return 0 
      }
  }
      
}

(HumanChoice === "rock") && (ComputerChoice === "scissors")


if (
  (HumanChoice === "rock") && (ComputerChoice === "scissors") ||
  (HumanChoice === "scissors") && (ComputerChoice === "paper") ||
  (HumanChoice === "paper") && (ComputerChoice === "rock")
) {
  return 1
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++
    roundWinner = 'player'
  }
  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    computerScore++
    roundWinner = 'computer'
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

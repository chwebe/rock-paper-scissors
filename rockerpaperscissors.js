let humanScore = 0
let ComputerScore = 0
let answer = ''

const assignedNumberToAction = {
    0 : 'rock',
    1 : 'paper',
    2 : 'scissors'
}

const { read } = require("fs");
const { cp } = require("node:fs");

const rl = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


function validateInput(userInput) {
    const userInputLower = userInput.toLowerCase()
    return userInputResult = ((userInputLower === "rock") || (userInputLower === 'scissors') || (userInputLower === 'paper') ? userInputLower : 'False');
}

function PlayRound(HumanChoice, ComputerChoice) {
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


function GetComputerChoice (randomNumber) {
    return assignedNumberToAction[randomNumber];
}

let test = GetComputerChoice((() => Math.floor(Math.random() * 3))())


function displayResult (HumanChoice, ComputerChoice, func) {
    const result = func(HumanChoice, ComputerChoice);
    console.log("Your choice : " + HumanChoice + " & ComputerChoice: " + ComputerChoice)
    if (result === 1) {
        console.log('You win ! gg wp')
    }
    else if( result === 0) {
        console.log('You loose ! boooooooooo')
    }
    else if ( result === 2) {
        console.log('tie !!!')
    }    
}

function score (HumanChoice, ComputerChoice, func) {
    const score = func(HumanChoice, ComputerChoice);
    if (score === 1) {
        humanScore += 1
    }
    else if( score === 0) {
        ComputerScore += 1
    }
    console.log("Human : " + humanScore + " Computer : " + ComputerScore)
}

function PlayTheGame(HumanChoice, ComputerChoice) {
    const scoreMax = 5 
    displayResult(HumanChoice, ComputerChoice, PlayRound)
    score(HumanChoice, ComputerChoice, PlayRound)
    
    
}

function askQuestion() {
    rl.question('Lets rock paper scissors ( press enter : rock, paper or scissors to play ( stop to stop the game ): ', answer => {
        if(answer != 'stop') {
            PlayTheGame(answer, GetComputerChoice((() => Math.floor(Math.random() * 3))()))
            if(humanScore === 5) {
                console.log("HUMAN WINS")
                rl.close()
            }
            else if (ComputerScore === 5) {
                console.log("Computer wins boooooooooooooo")
            }
            else {
                askQuestion();
            }
        }
        else {
            console.log('The game is finished.')
            rl.close();
        }
    });
}
askQuestion();






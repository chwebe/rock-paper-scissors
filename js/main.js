import { PlayRound, GetComputerChoice, validateInput } from './rockerpaperscissors.js';

const weaponsButtonClassName = "weapon-button"
const weaponsButton = Array.from(document.getElementsByClassName(weaponsButtonClassName))

function GetCurrentScore (htmlID) {
  return parseInt(document.getElementById(htmlID).innerHTML)
}

let humanScore = parseInt(document.getElementById("humanScore").innerHTML)
let computerScore = parseInt(document.getElementById("computerScore").innerHTML)

function UpdateScore (roundScore) {
   
  if (roundScore === 1) {
    humanScore = humanScore + 1
    document.getElementById("humanScore").innerHTML = humanScore
  }
  else if( roundScore === 0) {
    computerScore = computerScore + 1
    document.getElementById("computerScore").innerHTML = computerScore
  }
  else if ( roundScore === 2) {
    console.log('tie !!!')
  }
}

UpdateScore();


weaponsButton.forEach((weaponButton) => {
    weaponButton.addEventListener("click", () => {
      let round = (PlayRound(weaponButton.id, GetComputerChoice()))
      console.log(round)
      UpdateScore(round)
      
    });
});


//PlayRound(weaponButton.id, GetComputerChoice())

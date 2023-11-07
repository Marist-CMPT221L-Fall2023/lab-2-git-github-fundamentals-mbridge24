const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("playerText");
const resultText = deocument.querySelector("resultText");
const choiceBtns = document.querySelector(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click",() => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `Computer: ${Computer}`;
    resultText.textContent =   checkWinner():
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
            break;
            
    }
}
function checkWinner(){
    if(player == computer) {
        return "DRAW!";
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
    }
}
const arrayOfChoices = ["paper", "rock", "scissor"];
const rock = "rock";
const scissor = "scissor";
const paper = "paper";
console.log("Start game");
game()
console.log("End game");

function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (playerSelection) {
        case rock:
            switch (computerSelection) {
                case rock:
                    result = "You Draw! Rock equals Rock";
                    break;
                case paper:
                    result = "You Lose! Paper beats Rock";
                    break;
                case scissor:
                    result = "You Won! Scissor beats Rock";
                    break;
                default:
                    result = "not valid";
                    break;
            }
            break;
        case "paper":
            switch (cSel) {
                case rock:
                    result = "You Won! Paper beats Rock";
                    break;
                case paper:
                    result = "You Draw! Paper equals Paper";
                    break;
                case scissor:
                    result = "You Lose! Scissor beats Paper";
                    break;
                default:
                    result = "not valid";
                    break;
            }
            break;
        case scissor:
            switch (cSel) {
                case rock:
                    result = "You Lose! Rock beats Scissor";
                    break;
                case paper:
                    result = "You Won! Scissor beats Paper";
                    break;
                case scissor:
                    result = "You Draw! Scissor equals Scissor";
                    break;
                default:
                    result = "not valid";
                    break;
            }
            break;
    
    
        default:
            result = "not valid";
            break;
    }
    return result;
  }

  function game(){

    
    let playerSets = 0;
    let computerSets = 0;
    while (playerSets < 5 && computerSets < 5) {
        console.log("player sets are: "+playerSets+", computer sets are: "+computerSets);
        const whoWon = playRound(getPlayerChoice(), getComputerChoice());
        console.log(whoWon);
        if (whoWon.includes("Won")) {
            playerSets = playerSets+1;
            console.log("player won: "+playerSets+" sets");
        } else if (whoWon.includes("Lose")) {
            computerSets = computerSets+1;
            console.log("computer won: "+computerSets+" sets");
        }else{
            //not valid result, continuing the game if the player enters a bad string
            continue;
        }
        if(playerSets == 5 || computerSets == 5){
            break;
        }
      
            
        
            
        
    }
    if (playerSets == 5) {
        console.log("You are the most lucky man out there");
    } else {
        console.log("You are almost the luckiest men out there, but not today");
    }
    
    
  }
function getPlayerChoice(){
    const playerChoice = prompt("choose your option");
    const pSel = playerChoice.toLowerCase();
    console.log("player choice is: "+pSel)
}

function getComputerChoice(){
   
    const randomIndex = Math.floor(Math.random()*arrayOfChoices.length);
    const computerChoice = arrayOfChoices[randomIndex];
    console.log("computer choice is: "+computerChoice);
    return computerChoice;
}
  


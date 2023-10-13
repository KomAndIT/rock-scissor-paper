const arrayOfChoices = ["paper", "rock", "scissor"];
const rock = "rock";
const scissor = "scissor";
const paper = "paper";
// BUTTONS
const rockBtn = document.querySelector("#rockBtn");
const paperkBtn = document.querySelector("#paperBtn");
const scissorkBtn = document.querySelector("#scissorBtn");
// TEXT TO PAGE
const actualScore = document.querySelector("#actualScore");
const playerChoice = document.querySelector("#playerChoice");
const compChoice = document.querySelector("#compChoice");
const setResult = document.querySelector("#setResult");
const finalresult = document.querySelector("#finalresult");

console.log("Start game");

let playerSets = 0;
let computerSets = 0;
let setsCounter = 0;

console.log("play: "+ playerSets+"comp choice: "+computerSets);

rockBtn.addEventListener('click', ()=>{
    playerChoice.textContent = "player choice is: "+rock;
    game(rock, getComputerChoice());
});

paperkBtn.addEventListener('click', ()=>{
    playerChoice.textContent = "player choice is: "+paper;
    game(paper, getComputerChoice());
});

scissorkBtn.addEventListener('click', ()=>{
    playerChoice.textContent = "player choice is: "+scissor;
    game(scissor, getComputerChoice());
});




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
        case paper:
            switch (computerSelection) {
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
            switch (computerSelection) {
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

  function game(playerSelection, computerSelection){

    
    // let playerSets = 0;
    // let computerSets = 0;
    // while (playerSets < 5 && computerSets < 5) {
        
        //console.log("player sets are: "+playerSets+", computer sets are: "+computerSets);
         const whoWon = playRound(playerSelection, computerSelection);
         
        if (whoWon.includes("Won")) {
            playerSets = playerSets+1;
            //console.log("player won: "+playerSets+" sets");
        } else if (whoWon.includes("Lose")) {
            computerSets = computerSets+1;
            //console.log("computer won: "+computerSets+" sets");
        }
        setResult.textContent = whoWon;
        actualScore.textContent = "player sets are: "+playerSets+
        ", computer sets are: "+computerSets+ "total sets are: "+ ++setsCounter;
        // else{
            // not valid result, continuing the game if the player enters a bad string
            // continue;
        // }
        // if(playerSets == 5 || computerSets == 5){
        //     break;
        // }    
    // }
    if (playerSets == 5) {
        finalresult.textContent = "You are the most lucky man out there";
        playerSets = 0;
        computerSets = 0;
        setsCounter = 0;
        finalresult.textContent ='';
        //console.log("You are the most lucky man out there");
    } else if (computerSets == 5){
        finalresult.textContent = "You are almost the luckiest men out there, but not today";
        playerSets = 0;
        computerSets = 0;
        setsCounter = 0;
        finalresult.textContent = '';
        //console.log("You are almost the luckiest men out there, but not today");
    }
    
    
  }
/* function getPlayerChoice(){
    const playerChoice = prompt("choose your option");
    const pSel = playerChoice.toLowerCase();
    playerChoice.textContent = "player choice is: "+pSel;
    //console.log("player choice is: "+pSel)
} */

 function getComputerChoice(){
   
     const randomIndex = Math.floor(Math.random()*arrayOfChoices.length);
     const computerChoice = arrayOfChoices[randomIndex];
     compChoice.textContent = "computer choice is: "+computerChoice;
     //console.log("computer choice is: "+computerChoice);
     return computerChoice;
 }
  


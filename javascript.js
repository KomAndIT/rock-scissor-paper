const ARRAY_OF_CHOICES = ["paper", "rock", "scissor"];
const ROCK = "rock";
const SCISSOR = "scissor";
const PAPER = "paper";
const PLAYER_CHOICE = "Player choice is: ";

// BUTTONS
const rockBtn = document.querySelector("#rockBtn");
const paperkBtn = document.querySelector("#paperBtn");
const scissorkBtn = document.querySelector("#scissorBtn");
const cleanScoreBtn = document.querySelector("#cleanScoreBtn");
// TEXT TO PAGE
const playerChoice = document.querySelector("#playerChoice");
const compChoice = document.querySelector("#compChoice");
const actualScore = document.querySelector("#actualScore");
const setResult = document.querySelector("#setResult");
const finalresult = document.querySelector("#finalresult");

console.log("Start game");

let playerSets = 0;
let computerSets = 0;
let setsCounter = 0;

rockBtn.addEventListener('click', ()=>{
    playerChoice.textContent = PLAYER_CHOICE+ROCK;
    game(ROCK, getComputerChoice());
});

paperkBtn.addEventListener('click', ()=>{
    playerChoice.textContent = PLAYER_CHOICE+PAPER;
    game(PAPER, getComputerChoice());
});

scissorkBtn.addEventListener('click', ()=>{
    playerChoice.textContent = PLAYER_CHOICE+SCISSOR;
    game(SCISSOR, getComputerChoice());
});

cleanScoreBtn.addEventListener('click', ()=>{
    finalresult.textContent ='';
    playerSets = 0;
    computerSets = 0;
    setsCounter = 0;
     
    playerChoice.textContent = 'Player choice'; 
    compChoice.textContent = 'Computer Choice?'; 
    actualScore.textContent = 'Player Choice';
    setResult.textContent = 'Last Set Result'; 
    finalresult.textContent = 'Final Result'; 
});


function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (playerSelection) {
        case ROCK:
            switch (computerSelection) {
                case ROCK:
                    result = "You Draw! Rock equals Rock";
                    break;
                case PAPER:
                    result = "You Lose! Paper beats Rock";
                    break;
                case SCISSOR:
                    result = "You Won! Scissor beats Rock";
                    break;
            }
            break;
        case PAPER:
            switch (computerSelection) {
                case ROCK:
                    result = "You Won! Paper beats Rock";
                    break;
                case PAPER:
                    result = "You Draw! Paper equals Paper";
                    break;
                case SCISSOR:
                    result = "You Lose! Scissor beats Paper";
                    break;
            }
            break;
        case SCISSOR:
            switch (computerSelection) {
                case ROCK:
                    result = "You Lose! Rock beats Scissor";
                    break;
                case PAPER:
                    result = "You Won! Scissor beats Paper";
                    break;
                case SCISSOR:
                    result = "You Draw! Scissor equals Scissor";
                    break;
            }
            break;
    }
    return result;
  }

  function game(playerSelection, computerSelection){
    if (playerSets == 5 || computerSets == 5) {
        finalresult.textContent ='';
        playerSets = 0;
        computerSets = 0;
        setsCounter = 0;
    }
    const whoWon = "Last set result is: "+playRound(playerSelection, computerSelection);
        
    if (whoWon.includes("Won")) {
        playerSets = playerSets+1;
    } else if (whoWon.includes("Lose")) {
        computerSets = computerSets+1;
    }
    setResult.textContent = whoWon;
    actualScore.textContent = "Player won sets are: "+playerSets+", Computer won sets are: "+computerSets+ ", Total played sets are: "+ ++setsCounter;

    if (playerSets == 5) {
        finalresult.textContent = "You are the most lucky man out there";
    } else if (computerSets == 5){
        finalresult.textContent = "You are almost the luckiest men out there, but not today";
    }

  }

 function getComputerChoice(){
     const randomIndex = Math.floor(Math.random()*ARRAY_OF_CHOICES.length);
     const computerChoice = ARRAY_OF_CHOICES[randomIndex];
     compChoice.textContent = "Computer choice is: "+computerChoice;
     return computerChoice;
 }
  


let plScore = document.querySelector(".your-score");
let coScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");
const div = document.querySelector(".buttons");
let playerCard = 0;
let computerCard = 0;
let playerSelection;

let coSelection = ["rock", "paper", "scissor"] ;

const divF = e => {
    e.target.nodeName === 'BUTTON';
    let playerSelection = e.target.id;
    let computerSelection = coSelection[Math.floor(Math.random() * 3)];
    if(playerSelection === "rock" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "paper" ||
    playerSelection === "scissor" && computerSelection === "scissor" ){
    }else if(playerSelection === "rock" && computerSelection === "scissor" || 
    playerSelection === "scissor" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock"){
    playerCard++;
    }else if(playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "scissor" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissor"){
    computerCard++;
}
if(computerCard == 10) {
alert("You lost! Better luck next time :(");
reset();
} else if (playerCard == 10) {
alert("You won! Congratulations! :)")
reset();
}
    plScore.innerHTML=playerCard;
    coScore.innerHTML=computerCard;
    result.innerHTML=`Your choice ${playerSelection}. Computer choice ${computerSelection}`
    }
div.addEventListener("click", divF);
    

    function reset() { 
        playerCard = 0;
        computerCard = 0;
        plScore.innerHTML = "0";
        coScore.innerHTML = "0";
        result.innerHTML = "";
    }
    
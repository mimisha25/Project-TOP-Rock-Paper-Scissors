let plScore = document.querySelector(".your-score");
let coScore = document.querySelector(".computer-score");
let round = document.querySelector(".round");
const result = document.querySelector(".result");
const div = document.querySelector(".buttons");
let playerCard = 0;
let computerCard = 0;
let roundCard = 0;
let coSelection=["rock", "paper", "scissor"];
let computerSelection =coSelection[Math.floor(Math.random()*coSelection.length)];
div.addEventListener("click", divF);

const divF = e => {
    let playerSelection = e.target.nodeName === 'BUTTON';
    if(e.target.id === "rock" && computerSelection === "rock" ||
             e.target.id === "paper" && computerSelection === "paper" ||
             e.target.id === "scissor" && computerSelection === "scissor" ){
             result.innerHTML="win win";
    }else if(e.target.id === "rock" && computerSelection === "scissor" || 
             e.target.id === "scissor" && computerSelection === "paper" ||
             e.target.id === "paper" && computerSelection === "rock"){
             result.innerHTML="You win";
             playerCard++;
    }else if(e.target.id === "rock" && computerSelection === "paper" || 
             e.target.id === "scissor" && computerSelection === "rock" ||
             e.target.id === "paper" && computerSelection === "scissor"){
             result.innerHTML="You'have lost"
             computerCard++;
}
    plScore.innerHTML=playerCard;
    coScore.innerHTML=computerCard;
}

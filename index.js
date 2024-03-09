const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const selection=["rock", "paper", "scissor"];
const computerSelection =selection[Math.floor(Math.random()*selection.length)];

  
rock.addEventListener("click",function rock(){
    if (computerSelection === "rock"){
        document.querySelector("h1").innerHTML ="You both chose the same option so Win-Win!";
    }else if(computerSelection === "scissor"){
        document.querySelector("h1").innerHTML ="Computer chose Scissor and your choice was Rock so You are winner!";
    }else if(computerSelection === "paper"){
        document.querySelector("h1").innerHTML ="Sorry, you have lost! Computer chose Paper and you choice was Rock";
    }
})

paper.addEventListener("click",function paper(){
    if (computerSelection === "paper"){
        document.querySelector("h1").innerHTML ="You both chose the same option so Win-Win!";
    }else if(computerSelection === "rock"){
        document.querySelector("h1").innerHTML ="Computer chose Rock and your choice was Paper so You are winner!";
    }else if(computerSelection === "scissor"){
        document.querySelector("h1").innerHTML = "Sorry, you have lost! Computer chose Scissor and you choice was Paper";
    }
}) 
 
scissor.addEventListener("click",function scissor(){
    if (computerSelection === "scissor"){
        document.querySelector("h1").innerHTML ="You both chose the same option so Win-Win!";
    }else if(computerSelection === "paper"){
        document.querySelector("h1").innerHTML ="Computer chose Paper and your choice was Scissor so You are winner!";
    }else if(computerSelection === "rock"){
        document.querySelector("h1").innerHTML ="Sorry, you have lost! Computer chose Rock and you choice was Scissor";
    }
})
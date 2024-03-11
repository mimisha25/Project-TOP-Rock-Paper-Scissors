
const plScore = document.querySelector(".your-score");
const coScore = document.querySelector(".computer-score");
const presult = document.querySelector(".playerResult");
const cresult = document.querySelector(".computerResult");
const div = document.querySelector(".buttons");
const coSelection = ["Rock", "Paper", "Scissor"];
let playerCard = 0;
let computerCard = 0;
let playerSelection;



// Make short and put in one function players selections + result of play + scores update + reset
const divF = e => {
    e.target.nodeName === 'BUTTON';
    let playerSelection = e.target.id;
    let computerSelection = coSelection[Math.floor(Math.random() * 3)];
    if (playerSelection === "Rock" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissor" && computerSelection === "Scissor") {
    } else if (playerSelection === "Rock" && computerSelection === "Scissor" ||
        playerSelection === "scissor" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock") {
        playerCard++;
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Scissor" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Scissor") {
        computerCard++;
    }
    if (computerCard == 10) {
        reset();
        customAlert();
    } else if (playerCard == 10) {
        reset();
        customAlert()
    }

    plScore.innerHTML = playerCard;
    coScore.innerHTML = computerCard;
    presult.innerHTML = `${playerSelection}`;
    cresult.innerHTML = `${computerSelection}`;
}
div.addEventListener("click", divF);

// Reset scores.
function reset() {
    playerCard = 0;
    computerCard = 0;
    plScore.innerHTML = "0";
    coScore.innerHTML = "0";
}


//Open alert box. Designed and positioned on the page.
function customAlert() {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="ok()">Play Again</button>';
}

//Ok button in alert box. This button will turn the page to initial version
function ok() {
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
    presult.innerHTML = "";
    cresult.innerHTML = ""
}

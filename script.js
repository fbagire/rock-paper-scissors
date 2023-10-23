
let pWins = 0;
let cWins = 0;
let drawCounts = 0;
let playerSelection;


function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors']
    let randNum = Math.round(Math.random() * 2)
    return computerChoice[randNum]
}


function playGame(computerSelection, playerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return pWins++;

    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        return cWins++

    }
    else {

        drawCounts++;
    }

};

const btnplays = document.getElementById("btnPlays");
const divResult = document.getElementById("divResult");

const para1 = document.createElement("p");
para1.classList.add("inline-paragraph")

const para2 = document.createElement("p");
para2.classList.add("inline-paragraph")

const para3 = document.createElement("p");
para3.classList.add("inline-paragraph")



btnplays.addEventListener('click', function playRound(e) {

    switch (e.target.id) {
        case "rock":
            playerSelection = "rock";
            break;
        case "paper":
            playerSelection = "paper";
            break;
        case "scissors":
            playerSelection = "scissors";
            break;

    }
    let computerSelection = getComputerChoice();


    playGame(computerSelection, playerSelection)

    para1.textContent = "Your wins :" + pWins;
    para2.textContent = "Draws :" + drawCounts;
    para3.textContent = "Computer Wins :" + cWins;


    if (cWins == 5) {
        console.log('Computer won');
        pWins = 0, cWins = 0, drawCounts = 0;
    } else if (pWins == 5) {
        console.log('You won');
        pWins = 0, cWins = 0, drawCounts = 0;
    }

    divResult.appendChild(para1)
    divResult.appendChild(para2)
    divResult.appendChild(para3)





});




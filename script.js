function getComputerChoice() {
    let num = Math.random();
    if (num < 1 / 3) {
        return "rock";
    } else if (num < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let human = prompt("Rock-Paper-Scissors").toLowerCase();
    if ((human == "rock") || (human == "paper") || (human == "scissors")) {
        return human;
    }
    console.log("Invalid,input!");
    return undefined;
}

function playRound(humanChoice, computerChoice, scores) {
    //invalid input
    if (humanChoice == undefined) {

        resultMessage.textContent="Invalid,input!No game played";
        return;

    }


    //draw
    if (humanChoice == computerChoice) {
        resultMessage.textContent="Draw!";
        return;

    }

    //wins
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        resultMessage.textContent=`You win! ${humanChoice} beats ${computerChoice}`;
        scores.humanScore++;
        return;

    }


    resultMessage.textContent=`You lose! ${computerChoice} beats ${humanChoice}`;
    scores.computerScore++;


}


/*
function playGame() {

    // initialisation of scores
    let scores = {
        humanScore: 0,
        computerScore: 0
    };



    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    scores = playRound(humanSelection, computerSelection, scores);



    if (scores.humanScore > scores.computerScore) {
        console.log(`You win! ${scores.humanScore} beats ${scores.computerScore}`);
    } else if (scores.humanScore < scores.computerScore) {
        console.log(`You lose! ${scores.computerScore} beats ${scores.humanScore}`);
    } else {
        console.log("It's a draw!");
    }

}
*/
// initialisation of scores
let scores = {
    humanScore: 0,
    computerScore: 0
};

//button logic
const rockButton = document.querySelector(".Rock");

const paperButton = document.querySelector(".Paper");

const scissorsButton = document.querySelector(".Scissors");


//Display the running score, and announce a winner of the game once one player reaches 5 points.
function updateScoreDisplay(scores) {
    scoreDisplay.textContent = `Human: ${scores.humanScore}, Computer: ${scores.computerScore}`;
    if (scores.humanScore === 5) {
        resultMessage.textContent = "Congratulations! You won the game!";

    } else if (scores.computerScore === 5) {
        resultMessage.textContent = "Game over! The computer won the game.";

    }
}

rockButton.addEventListener("click", () => { 
    playRound("rock", getComputerChoice(), scores);
    updateScoreDisplay(scores);
 });

paperButton.addEventListener("click", () => { 
    playRound("paper", getComputerChoice(), scores);
    updateScoreDisplay(scores);
 });

scissorsButton.addEventListener("click", () => { 
    playRound("scissors", getComputerChoice(), scores);
    updateScoreDisplay(scores);
 });


//get the div for the result-message to say who wins
const resultMessage = document.querySelector(".result-message");
const scoreDisplay = document.querySelector(".score");



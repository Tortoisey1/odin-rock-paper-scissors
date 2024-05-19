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
        console.log("Invalid,input!No game played");
        return scores;
    }


    //draw
    if (humanChoice == computerChoice) {
        console.log("Draw!");
        return scores;
    }

    //wins
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        scores.humanScore++;
        return scores;
    }


    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    scores.computerScore++;
    return scores;

}



function playGame() {

    // initialisation of scores
    let scores = {
        humanScore: 0,
        computerScore: 0
    };


    //Play 5 rounds
    for (let i = 0; i < 5; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        scores = playRound(humanSelection, computerSelection, scores);
    }


    if (scores.humanScore > scores.computerScore) {
        console.log(`You win! ${scores.humanScore} beats ${scores.computerScore}`);
    } else if (scores.humanScore < scores.computerScore) {
        console.log(`You lose! ${scores.computerScore} beats ${scores.humanScore}`);
    } else {
        console.log("It's a draw!");
    }

}
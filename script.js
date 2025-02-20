function getComputerChoice(){
    let x = Math.random()

    if (x < 0.333){
        return "Rock";
    } else if (x > 0.333 && x < 0.666){
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

function getHumamChoice(){

    let choice = parseInt(prompt("Please choose one: 1 - Rock | 2 - Paper | 3 - Scissors"));
    return choice;

}

let humamScore = 0;
let computerScore = 0;

function playRound(humamChoice,computerChoice){

    if (humamChoice === 1 && computerChoice === "Rock"){
        return "It's a Tie!!";
    } else if (humamChoice === 1 && computerChoice === "Paper"){
        computerScore++;
        return "You Lose! Paper beats Rock!";
    } else if (humamChoice === 1 && computerChoice === "Scissors"){
        humamScore++;
        return "You Win! Rock beats Scissors!";
    } else if (humamChoice === 2 && computerChoice === "Rock"){
        humamScore++;
        return "You Win! Paper beats Rock!";
    } else if (humamChoice === 2 && computerChoice === "Paper"){
        return "It's a Tie!!";
    } else if (humamChoice === 2 && computerChoice === "Scissors"){
        computerScore++;
        return "You Lose! Scissors beats Paper!";
    } else if (humamChoice === 3 && computerChoice === "Rock"){
        computerScore++;
        return "You Lose! Rock beats Scissors!";
    } else if (humamChoice === 3 && computerChoice === "Paper"){
        humamScore++;
        return "You Win! Scissors beats Paper";
    } else {
        return "It's a Tie!!";
    }

}

function playGame(){
    for (let i = 0; i < 5; i++)
    {
        const humamChoice = getHumamChoice();
        const computerChoice = getComputerChoice();
        playRound(humamChoice, computerChoice);
    }

    if (humamScore > computerScore){
        return "CONGRATULATIONS!!!";
    }
    else{
        return "Better luck next time :(";
    }
}

console.log(playGame());

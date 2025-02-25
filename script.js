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
let humamScore = 0;
let computerScore = 0;

function playRound(humamChoice,computerChoice){

    if(humamChoice === computerChoice){
        return "It's a Tie!!"; 
    } else if (
        humamChoice === "Rock" && computerChoice === "Scissors" ||
        humamChoice === "Paper" && computerChoice === "Rock" ||
        humamChoice === "Scissors" && computerChoice === "Paper"
    ){
        return `You Win!! ${humamChoice} beats ${computerChoice}`;
    } else {
        return `You Lost!! ${computerChoice} beats ${humamChoice}`;
    }

}


let loaded = document.addEventListener("DOMContentLoaded", (event) =>{

    let btn = document.getElementById('buttons');
let computerChoice = getComputerChoice();

btn.addEventListener('click', (event) => {
    let botao = event.target;
    
    switch(botao.id){
        case "rock":
            console.log(playRound("Rock",computerChoice));
            break;
        case "paper":
            console.log(playRound("Paper",computerChoice));
            break;
        case "scissors":
            console.log(playRound("Scissors",computerChoice));
            break;
    }
});

})






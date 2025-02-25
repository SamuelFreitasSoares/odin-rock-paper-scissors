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
        humamScore++;
        return `You Win!! ${humamChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You Lost!! ${computerChoice} beats ${humamChoice}`;
    }

}


let loaded = document.addEventListener("DOMContentLoaded", () =>{

const container = document.getElementById("display");
const btn = document.getElementById('buttons');
 
    btn.addEventListener('click', (event) => {
        let botao = event.target;
        let computerChoice = getComputerChoice();
        switch(botao.id){
            case "rock":
                const playRock = document.createElement('h4');
                playRock.classList.add("rock-h1");
                playRock.textContent = playRound("Rock",computerChoice);
                container.appendChild(playRock);
                break;
            case "paper":
                const playPaper = document.createElement('h4');
                playPaper.classList.add("paper-h1");
                playPaper.textContent = playRound("Paper",computerChoice);
                container.appendChild(playPaper);            
                break;
            case "scissors":
                const playScissor = document.createElement('h4');
                playScissor.classList.add("scissors-h1");
                playScissor.textContent = playRound("Scissors",computerChoice);
                container.appendChild(playScissor);
                break;
            }
            
        if(humamScore === 5){
            const winMessage = document.createElement('h1');
            winMessage.classList.add('message');
            winMessage.textContent = `You Won!! final score: ${humamScore} vs ${computerScore}`;
            computerScore=0;
            humamScore=0;
            container.appendChild(winMessage);
        } else if (computerScore === 5){
            const lostMessage = document.createElement('h1');
            lostMessage.classList.add("message");
            lostMessage.textContent = `You Lost 😔  final score: ${humamScore} vs ${computerScore})`;
            computerScore=0;
            humamScore=0;
            container.appendChild(lostMessage);
           
        }

        });
    }
)






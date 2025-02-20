function getComputerChoice(){
    let x = Math.random()

    if (x < 0.333){
        return "Rock!";
    } else if (x > 0.333 && x < 0.666){
        return "Paper!";
    } else {
        return "Scissors!";
    }
    
}

function getHumamChoice(){

    let choice = parseInt(prompt("Please choose one: 1 - Rock | 2 - Paper | 3 - Scissors"));
    return choice;

}


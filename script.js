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


function computerPlay() {
    let randNumb =  Math.floor(Math.random() * Math.floor(3));
    if (randNumb == 0) {
        return "ROCK";
    } 
    else if (randNumb == 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return 2;
            case "PAPER":
                return 1;
            case "SCISSORS":
                return 0;    
        }
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return 0;
            case "PAPER":
                return 2;
            case "SCISSORS":
                return 1;  
        }
    }
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return 1;
            case "PAPER":
                return 0;
            case "SCISSORS":
                return 2;       
        }
    }
    else {
        return 3;
        
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let numOfRounds = 1;
    while (numOfRounds != 6) {
        let playerSelection = prompt("This is round " + numOfRounds +". The score is Player: " + playerPoints + " vs. Computer: " + 
        computerPoints + ". Choose rock, paper, or scissors.");
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection,computerSelection);
        switch (roundResult) {
            case 0:
                playerPoints++;
                numOfRounds++;
                alert(playerSelection + " beats " + computerSelection + ". You win!");
                break;
            case 1:
                alert(playerSelection + " loses to " + computerSelection + ". You lose!");
                numOfRounds++;
                computerPoints++;
                break;
            case 2:
                alert(playerSelection + " ties with " + computerSelection + ". It's a tie!");
                numOfRounds++;
                break;
            case 3:
                alert("Please choose a valid action.");
        }
    }
    if (playerPoints > computerPoints) {
        alert("YOU WIN! The score was " + playerPoints + " vs. " + computerPoints);
    }
    else if (playerPoints < computerPoints) {
        alert("COMPUTER WINS! The score was " + playerPoints + " vs. " + computerPoints);
    }
    else {
        alert("TIE! The score was " + playerPoints + " vs. " + computerPoints);
    }
}
game();
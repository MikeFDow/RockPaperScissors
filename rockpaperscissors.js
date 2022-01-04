// gets random integer, but this function was including integer 1, when i wanted (2,3,4)
/*
function getRandomInteger (min, max) {
    min = Math.ceil(1);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min) + min);
}
*/
function computerPlay () {
    let x = getRandomInteger ();
    switch (x) {
        case 2:
            return "rock";
            break;
        case 3:
            return "paper";
            break;
        case 4:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "YOU WIN";
    } else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        return "YOU WIN";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "YOU WIN";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie";
    }

}

const computerSelection = computerPlay();

let playerScore = 0;
let comScore = 0;

function game() {
    if (playerScore < 5 && comScore < 5) {
        let playerSelection = prompt("?").toLowerCase();
        let a = playRound(playerSelection, computerSelection);
        switch (a) {
            case "YOU WIN":
                console.log(++playerScore);
                return `You win! Your score is ${playerScore}`;
                break;
            case "You lose":
                console.log(++comScore);
                return `You lose. Computers score is ${comScore}`;
            break;
            case "Tie":
                return "Tie, try again";
                break;
    
        }
    } else if (playerScore === 5) {
        console.log("game over, you win");
        comScore = 0;
        playerScore = 0;
    } else if (comScore === 5) {
        console.log("game over, you lose");
        playerScore = 0;
        comScore = 0;
   }
}
/*
function endGame() {
    playerScore = 0;
    comScore = 0;
    if (playerScore === 5) {
        console.log("Game over, you win");
    } else if (comScore === 5) {
        console.log("Game over, you lose");
    }
}
*/
 /*
function computerPlay () {
    let x = getRandomInteger (1, 5);
    if (x == 2) {
        comChoice = "Rock";
    } else if (x == 3) {
        comChoice = "Paper";
    } else if (x == 4) {
        comChoice = "Scissors";
    }
    return comChoice;
}
*/
/*
function computerPlay () {
    let x = getRandomInteger ();
    switch (x) {
        case 2:
            console.log("Rock");
            break;
        case 3:
            console.log("Paper");
            break;
        case 4:
            console.log("Scissors")
            break;
    }
}
*/
/*
function computerPlay () {
    let x = getRandomInteger ();
    switch (x) {
        case 2:
            comChoice = "Rock";
            break;
        case 3:
            comChoice = "Paper";
            break;
        case 4:
            comChoice = "Scissors";
            break;
    }
    return comChoice;
}
*/
/*
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "YOU WIN";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper" ) {
        result = "YOU WIN";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "YOU WIN";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "You lose";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "You lose";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "You lose";
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        result = "Tie";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = "Tie";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        result = "Tie";
    }
    return result;
}
*/
function getRandomInteger (min, max) {
    min = Math.ceil(2);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

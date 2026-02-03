console.log("Hello World"); 

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(e) {
    return e.target.textContent;
}

function playRound(humanChoice) {
    const computerSelection = getComputerChoice();
    const humanSelection = humanChoice;
    if (computerSelection === humanSelection) {
        return "Tie";
    } else if (computerSelection === "Rock" && humanSelection === "Scissors") {
        scoreComputer++;
        return "Computer Wins";
    } else if (computerSelection === "Paper" && humanSelection === "Rock") {
        scoreComputer++;
        return "Computer Wins";
    } else if (computerSelection === "Scissors" && humanSelection === "Paper") {
        scoreComputer++;
        return "Computer Wins";    
    } else {
        scoreHuman++;
        return "Player Wins";
    }
}

function updateRound() {
    document.querySelector("#player-score").textContent = "Player Score: " + scoreHuman;
    document.querySelector("#computer-score").textContent = "Computer Score: " + scoreComputer;
    document.querySelector("#round-result").textContent = "Round Result: " + result;
}

function gameWin() {
    document.querySelector("#game-winner").textContent = "Game Winner: " + gameWinner;
    if (!document.querySelector("#reset-button")) {
        const body = document.querySelector("body")
        resetButton = document.createElement("button")
        resetButton.setAttribute("id", "reset-button")
        resetButton.textContent = "Reset"
        body.appendChild(resetButton)
    }
    resetButton.addEventListener("click", () => {
        scoreComputer = 0;
        scoreHuman = 0;
        result = "";
        gameWinner = "";
        document.querySelector("#player-score").textContent = "Player Score: " + scoreHuman;
        document.querySelector("#computer-score").textContent = "Computer Score: " + scoreComputer;
        document.querySelector("#round-result").textContent = "Round Result: " + result;
        document.querySelector("#game-winner").textContent = "Game Winner: " + gameWinner;
        document.querySelector("#buttons").addEventListener("click", handleButtonClick)
    })
}

let scoreComputer = 0;
let scoreHuman = 0;
let result = "";
let gameWinner = "";
document.querySelector("#round-results").addEventListener('update', updateRound)
document.querySelector("#game-winner").addEventListener('winner', gameWin)

function handleButtonClick(e) {
    console.log(e);
    let choice = getHumanChoice(e);
    console.log(choice);
    result = playRound(choice);
    document.querySelector("#round-results").dispatchEvent(new Event('update'));
    if (scoreComputer >=3 || scoreHuman >= 3) {
        if (scoreComputer > scoreHuman) {
        console.log("Computer Wins");
        gameWinner = "Computer";
    } else if (scoreHuman > scoreComputer) {
        console.log("Player Wins"); 
        gameWinner = "Player"; 
    } else {
        console.log("Tie");
        gameWinner = "Tie";
    } 
    document.querySelector("#game-winner").dispatchEvent(new Event('winner'));
    document.querySelector("#buttons").removeEventListener("click", handleButtonClick);
    // document.querySelector("#buttons").style.display = "none";
    }
}

document.querySelector("#buttons").addEventListener("click", handleButtonClick);

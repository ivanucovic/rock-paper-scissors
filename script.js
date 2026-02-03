console.log("Hello World"); 

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return prompt("Enter your choice: Rock, Paper, or Scissors");
}

function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
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
        return "Human Wins";
    }
}

let scoreComputer = 0;
let scoreHuman = 0;

for (i = 0; i < 5; i++) {   
    console.log(playRound());
    console.log("Computer Score: " + scoreComputer);
    console.log("Human Score: " + scoreHuman);
}

if (scoreComputer > scoreHuman) {
    console.log("Computer Wins");
} else if (scoreHuman > scoreComputer) {
    console.log("Human Wins");
} else {
    console.log("Tie");
}


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

let humanScore = 0;
let computerScore = 0;

// Function to randomly select the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber < 0.67) return "paper";
    else return "scissors"; 
}

// Function to play a single round of the game
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }

    updateScore();
}

// Function to update score display and check for a winner
function updateScore() {
    scoreDiv.textContent = `Your Score: ${humanScore} | Computer's Score: ${computerScore}`;

    if (humanScore === 5) {
        alert("Congratulations! You are the overall winner!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Oh no! The computer is the overall winner!");
        resetGame();
    }
}

// Function to reset the game scores
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `Your Score: ${humanScore} | Computer's Score: ${computerScore}`;
    resultDiv.textContent = ""; // Clear the result message
}

// Event listeners for button clicks
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorBtn.addEventListener("click", () => playRound("scissors"));

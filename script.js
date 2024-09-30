// Function to randomly select the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1
    // Return choices based on the random number
    if (randomNumber > 0.33 && randomNumber < 0.75) { // Between 0.33 and 0.74 returns "paper"
        return "paper";
    } else if (randomNumber < 0.33) { // Less than 0.33 returns "rock"
        return "rock";
    } else { // Remaining values (0.75 to 1) return "scissors"
        return "scissors"; 
    }
}

// Function to get the human player's choice
function getHumanChoice() {
    const userInput = prompt("Enter Your Choice").toLowerCase(); // Prompt user and convert input to lowercase
    // Check if input is valid
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") { 
        return userInput; // Return valid input
    } else {
        console.log("Input is not valid! Type between Rock, Paper, and Scissors"); // Error message for invalid input
        return getHumanChoice(); // Prompt the user again if input is invalid
    }
}

// Initialize scores for human and computer
let humanScore = 0;
let computerScore = 0;

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
    // Check for a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || // Rock beats Scissors
        (humanChoice === "paper" && computerChoice === "rock") || // Paper beats Rock
        (humanChoice === "scissors" && computerChoice === "paper") // Scissors beats Paper
    ) {
        // Human wins
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++; // Increment human score
        return "human"; // Return the winner
    } else {
        // Computer wins
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++; // Increment computer score
        return "computer"; // Return the winner
    }
}

// Function to play the game for 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) { // Loop for 5 rounds
        const humanSelection = getHumanChoice(); // Get human choice
        const computerSelection = getComputerChoice(); // Get computer choice       
        playRound(humanSelection, computerSelection); // Play the round
    }

    // Log the final scores
    console.log(`Your Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    // Determine the overall winner
    if (humanScore > computerScore) {
        console.log("You win the game!"); // Human wins
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!"); // Computer wins
    } else {
        console.log("The game is a tie!"); // Tie
    }
}

// Start the game
playGame();

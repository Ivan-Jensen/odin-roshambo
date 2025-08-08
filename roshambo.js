/*
 * roshambo.js
 * Ivan Jensen
 * 08/07/2025
 *
 * This program lets the user play rock paper scissors against the 
 * computer. The game is played in rounds and will prompt the player to
 * pick rock, paper, or scissors (case insensitive) at which point the
 * computer will pick a random option (rock, paper, or scissors) and
 * will tell the player who won the round. The program will run as long
 * as the player wants with the option to quit after each round
 * Additionally, the program will keep track of the total scores of the
 * player and the computer as well as the current round number. The
 * game will only run on the console, but it may be given a GUI in the
 * future. 
 */


/* 
 * getComputerChoice
 * 
 * Has the computer choose options rock, paper, or scissors to play
 * against the player.
 * 
 * Parameters:
 *     None
 * 
 * Returns:
 *     "rock":     If the computer generates the number 0
 *     "paper":    If the computer generates the number 1
 *     "scissors": If the computer generates the number 2
 *
 */

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


/*
 * getHumanChoice
 * 
 * This function prompts the user to make a choice between rock, paper,
 * and scissors for the game. If the user doesn't make a valid choice
 * then the function will keep asking the user to make a valid choice
 * until they make a valid choice.
 * 
 * Parameter(s):
 *     None
 * 
 * Returns:
 *     "rock":     If the user chooses rock
 *     "paper":    If the user chooses paper
 *     "scissors": If the user chooses scissors
 * 
 */

function getHumanChoice() {
    let validChoice = false;

    while (!validChoice) {
        userInput = prompt("Please choose rock, paper, or scissors: ").toLowerCase();

        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            validChoice = true;
        } else {
            console.log("Error! Please type a valid input");
        }
    }

    return userInput;
}



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


/* GLOBAL VARIABLES */
let humanScore = 0;
let computerScore = 0;
let round = 0;
const winMap = new Map();
winMap["rock"] = "scissors";
winMap["paper"] = "rock";
winMap["scissors"] = "paper";

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


function playRound(humanChoice, computerChoice) {
    round += 1;
    console.log(`Round: ${round}`);
    console.log();

    if (winMap.get(humanChoice) === computerChoice) {
        console.log(`You win :) ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    }

    else if (winMap.get(computerChoice) === humanChoice) {
        console.log(`You lose :( ${computerChoice} beats ${humanChoice} !`);
        computerScore += 1;
    }

    // The user and the computer made the same choice
    else {
        console.log(`Draw! ${humanChoice} and ${computerChoice} are the same! :0`);
    }

    console.log();
    console.log("Current score:");
    console.log("______________")
    console.log("User: " + humanScore + '\t' + "Computer: " + computerScore);
    console.log();
}


/* MAIN (aka where the magic happens) */
console.log("Welcome to rock, paper, scissors! This program lets you play rock, paper, scissors (also known as roshambo) against a computer.");
console.log();
playing = true;

while (playing) {
    let userChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(userChoice, computerChoice);
    playAgain = prompt("Would you like to play another round? (y/n) ").toLowerCase();

    if (playAgain === 'y') {
        continue;
    } else if (playAgain === 'n') {
        playing = false;
    } else {
        console.log("That was an invalid input! I don't want to play with you again :>(")
        break;
    }
}

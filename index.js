var word = require("./word");
var inquirer = require("inquirer");
var color = require("colors");


var boardGames = [
    "Mysterium",
    "Takenoko",
    "Love Letter",
    "Dominion",
    "Gizmo",
    "Secret Hitler",
    "Lost Cities",
    "Carcassonne",
    "Race for the Galaxy"
];

var gameState = {
    currentboardGame: null,
    letterGuessed: "",
    remainingIncorrect: 6

};

var initializeGame = function () {
    var random = Math.floor(Math.random() * boardGames.length);
    gameState.currentboardGame = new word(boardGames[random]);
    gameState.remainingIncorrect = 6;
    gameState.letterGuessed = "";

    console.log("New BoardGame");
    console.log(gameState.currentboardGame.getDisplayWord());
    playGame();

}

var playGame = function () {
    console.log("");

    inquirer
        .prompt([
            {
                name: "letter",
                message: " Guess a Letter: ",
                validate: function (value) {
                    if (value.length != 1) {
                        return false;
                    }
                    if (gameState.letterGuessed.indexOf(value) > -1) {
                        return false;
                    }
                    if (value.match(/[a-z]/i) == null) {
                        return false;
                    }
                    return true;
                }
            },

        ])
        .then(function (answers) {
            console.log("");
            var l = answers.letter.toUpperCase();
            gameState.letterGuessed += l;
            if (gameState.currentboardGame.guessLetter(l)) {
                console.log("CORRECT!\n".green);
            } else {
                console.log("INCORRECT!\n".red);
                console.log(--gameState.remainingIncorrect + " Incorrect Guesses Remaining\n");
            }
            console.log(gameState.currentboardGame.getDisplayWord() + "\n");

            if (gameState.remainingIncorrect === 0) {
                console.log("LOOSER! you just lost!\n");
                initializeGame();
            }

            else if (gameState.currentboardGame.wordGuessedCorrectly()) {
                console.log("You Win!!\n");
                initializeGame();
            }
            else {
                playGame();
            }

        });
}

initializeGame();
var Word = require("./word.js");
var inquirer = require("inquirer")

var wordArray = ["cat", "dog", "beaver", "duck"];
var werd = new Word(randomWord)
var r = parseInt(Math.floor(Math.random() * (wordArray.length)))
var randomWord = wordArray[r]
var lives = 8

function pickWord() {
    werd.addLetter(randomWord);
}

function displayWord() {
    var frontDisplay = ""
    for (var j = 0; j < werd.letterArr.length; j++) {
        werd.letterArr[j].underScore()
        frontDisplay += werd.letterArr[j].display
    }
    console.log(frontDisplay)
}


function askToGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                print()

                if (input === "b") {
                    console.log("right!")
                    askToGuess()
                } else {
                    console.log("wrong")
                    lives--
                    askToGuess()
                }
                // console.log(werd.letterArr[b].letter)

            } else {
                console.log("Pick one letter a a time please.")
                askToGuess()
            }
        } else {
            console.log("Game over.")
            inquirer.prompt([{
                type: "confirm",
                name: "playAgain",
                message: "Would you like to play again?"
            }]).then(function (response) {
                if (response.playAgain) {
                    pickWord()
                    print()
                } else {
                    console.log("Ok, see you around!")
                }
            })
        }


    })
}

function print() {
    console.log("\n")
    console.log("******************************************")
    displayWord()
    console.log("\n*****************************************")

    console.log("\n")
    askToGuess();
}
pickWord()
print()
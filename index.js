var Word = require("./word.js");
var inquirer = require("inquirer")

var wordArray = ["cat", "dog", "beaver", "duck"];
var randomWord = ""
function createRandomWord(){
    var r = parseInt(Math.floor(Math.random() * (wordArray.length)))
    randomWord = wordArray[r]
}
createRandomWord()

var finalWerd = new Word(randomWord)

var lives = 4


function displayWord() {
    var displayWerd = finalWerd.createWerdString()
   console.log(displayWerd);
}


function askToGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                finalWerd.guessCheck(input)
                
                if(finalWerd.createWerdString().includes("_")){
                    console.log("You have", lives, "guesses remaining.")
                    print()
                }
                else {
                    print();
                    console.log("Great Job! Here's the next word:");
                    createRandomWord();
                    print();
                    askToGuess()
                }
               
            } else {
                console.log("Pick one letter a a time please.")
                askToGuess()
            }
        } else if( input.length === 0) {
            consoel.log("Please choose a letter.");
            askToGuess()
        }
        
        else {
            console.log("Game over.")
            inquirer.prompt([{
                type: "confirm",
                name: "playAgain",
                message: "Would you like to play again?"
            }]).then(function (response) {
                if (response.playAgain) {
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

print()
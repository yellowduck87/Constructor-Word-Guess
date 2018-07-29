var Word = require("./word.js");
var inquirer = require("inquirer")

var wordArray = ["cat", "dog", "beaver", "duck"];
// var r = parseInt(Math.floor(Math.random() * (wordArray.length)))
// var randomWord = wordArray[r]
// var split = randomWord.split("");

// console.log(split)

function displayWord() {
    var display = []
    var r = parseInt(Math.floor(Math.random() * (wordArray.length)))
    var randomWord = wordArray[r]

    var werd = new Word(randomWord)
    werd.addLetter(randomWord);
    for(var j = 0; j<werd.letterArr.length; j++){
        display.push(werd.letterArr[j].placeHold)
    }
    console.log(display.join(" "))

}
console.log("\n")
displayWord()

function askToGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function (response) {
        var input = response.ask
      if(input === werd.letterArr[j].letter){
          
      }
    })
}
// PlayGame.Word(randomWord)
console.log("\n")
askToGuess();
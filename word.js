var Letter = require("./letter.js")
// var newWord = ["f", "o", "x"]

function Word(wordAdd) {
    this.wordAdd = wordAdd;
    this.letterArr = [];
    this.displayWord = ""
    this.addLetter = function (werd) {
        for(var i = 0; i < werd.length; i++){
            this.letterArr.push(new Letter(werd[i]))          
        }
        console.log(this.displayWord)
    }
}

module.exports = Word;


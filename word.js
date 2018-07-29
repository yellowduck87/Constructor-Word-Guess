var Letter = require("./letter.js")
// var newWord = ["f", "o", "x"]

function Word(wordAdd) {
    this.wordAdd = wordAdd;
    this.letterArr = [];
    this.addLetter = function (werd) {
        for(var i = 0; i < werd.length; i++){
            this.letterArr.push(new Letter(werd[i]))
            // console.log(this.letterArr[i].underscore)
        }
    }

}

module.exports = Word;

// var werd = new Word("f");
// // werd.addLetter();
// var werd = new Word("o");
// // werd.addLetter();
// var werd = new Word("x");
// werd.addLetter();
// console.log(werd.letterArr.letter)
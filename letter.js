//letter js

function Letter(letter) {
    this.letter = letter;
    this.placeHold = "_"
    this.guessed = false;
    this.underScore = function () {
        if (this.guessed === false) {
            // lives--;
            console.log(this.placeHold + " ")
        } else {
        //  if (input === this.letter) {
            // this.guessed = true
            console.log(this.letter + " ")

        }
    }
}
// var addLetter = new Letter("f")
// addLetter.underScore();
module.exports = Letter
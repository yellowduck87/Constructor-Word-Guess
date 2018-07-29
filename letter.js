//letter js

function Letter(letter) {
    this.letter = letter;
    this.placeHold = "_"
    this.display = ""
    this.guessed = false;
    this.underScore = function () {
        if (this.guessed === false) {
            // lives--;
            this.display += this.placeHold + " "
        } else {
        //  if (input === this.letter) {
            // this.guessed = true
            this.display += this.letter + " "

        }
    }
}
// var addLetter = new Letter("f")
// addLetter.underScore();
module.exports = Letter
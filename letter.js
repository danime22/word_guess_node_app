function Letter(letter) {
    this.letter = letter;

    this.alreadyGuessed = false;

    //function that display character
    this.toString = function () {
        if (this.alreadyGuessed) {
            return this.letter;
        } else {
            return "_";
        }
    };
    //function that check the letter if correct
    this.checkLetter = function (guessed) {
        
        if (this.letter === guessed) {
            this.alreadyGuessed = true;
            return true;
        } else {
            return false;
        }
    };
}


module.exports = Letter

// var boo = new Letter("a");
// console.log(boo.checkLetter("q"));
// console.log(boo.getDisplayLetter());
// console.log(boo.checkLetter("a"));
// console.log(boo.getDisplayLetter());


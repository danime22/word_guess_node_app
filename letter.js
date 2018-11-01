function Letter(letter) {
    this.letter = letter.toUpperCase();
    if(letter === " "){
        this.alreadyGuessed = true;
    } else{
        this.alreadyGuessed = false;
    }
   

    this.wasGuessed = function() {
        return this.alreadyGuessed;
    }

    //function that display character
    this.toString = function () {
        if(this.letter == " "){
            return " ";
        }
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


module.exports = Letter;



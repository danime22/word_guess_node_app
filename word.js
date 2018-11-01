var letter = require("./letter");

// constructor function
function Word(w) {
    this.letters = [];

    // loop that turns word into an array of letters
    for (let i = 0; i < w.length; i++) {
        var a = new letter(w.charAt(i));
        this.letters.push(a);
    }

    // return string that made of underscore and  guess letter
    this.getDisplayWord = function () {
        return this.letters.join(" ");
    };

    this.guessLetter = function(letter){
        var hasLetter = false;
       for(let i = 0; i < this.letters.length; i++){
           if(this.letters[i].checkLetter(letter)){
               hasLetter = true;
           }    
       } 
       return hasLetter;
    };
    
    this.wordGuessedCorrectly = function(){
        for(let i = 0; i < this.letters.length; i++){
            if(!this.letters[i].wasGuessed()){
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;




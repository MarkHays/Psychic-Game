// GLOBAL VARIABLES
//----------------------------------------------------------------------------
// Arrays and variables for holdling data
var wordOptions = ["jeremiah", "neena", "darion", "adam", "jerome", "lou", "greg"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];  // J _ _ _ _ _ _ 
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



// FUNCTIONS (Reusable blocks of code that i will call upon when needed)
//----------------------------------------------------------------------------

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("_");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    // Populate blanks and successes with right number of blanks.
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    // Testing / Debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    // check if letter exists in code at all
    const isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
          
        }
    }

}
// Check where in the word the letter exists, then populate out blanksAndSuccesses array.
if (isLetterInWord) {
    console.log(test);
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}

    // letter wasn't found
    else {
        wrongLetters.push(letter);
        numGuesses--
    }

    // Testing and Debugging
    console.log(blanksAndSuccesses);

// MAIN PROCESS
//----------------------------------------------------------------------------

// initiates the code for the first time
startGame();

// Register keyclicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);


    // Testing / Debugging
    console.log(letterGuessed);
}
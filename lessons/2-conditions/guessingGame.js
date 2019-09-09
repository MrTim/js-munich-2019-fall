// Guessing game

// start with 3 lives
let initialLives = 3;

// let's select one value between 0 and 10, we could do that also randomly
let correctValue = 8;

// rules of our game - in a re-usable function
function playAnotherRound(remainingLives) {
  if (remainingLives === 0) {
    // end the game if no more lives are there
    alert("You lost - try again!");
  } else {
    // otherwise we need another guess from the user
    let guessedValue = prompt("Please tell me a number between 0 and 10.");
  
    // if we are larger or smaller we should help the user
    if (guessedValue > correctValue) {
      alert("Too high! Lower please.");
      // also let's try to play another round using the provided information
      playAnotherRound(remainingLives - 1);
    } else if (guessedValue < correctValue) {
      alert("Too low! Higher please.");
      // also let's try to play another round using the provided information
      playAnotherRound(remainingLives - 1);
    } else {
      // here we only need to inform the user and end the game
      alert("You won!");
    }
  }
}

// let's start playing - shall way?
playAnotherRound(initialLives);
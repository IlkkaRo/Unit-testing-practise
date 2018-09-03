'use strict'

// pick a random number in range 0-100, 0 and 100 included
let numberToGuess = Math.floor(Math.random() * (100 + 1) );

// debug message for the developer, comment out or remove in production
console.log("To guess: " + numberToGuess);

// variable to hold the latest guess
// initial value is undefined to be able to tell if any guesses have been made
let guess = undefined;
let bestGuess = undefined;
let bestLow = 0;
let lowerBest= document.getElementById('lower-best');
let bestHigh = 101;
let upperBest = document.getElementById('upper-best');
let guesses = 0;
let hint = document.getElementById('hint');
let lowBar = document.getElementById('lower-bar');
let middleBar = document.getElementById('middle-bar');
let highBar = document.getElementById('upper-bar');
let barChart = document.getElementById('bar-chart');

//
// event handler for form submission
//
function guessMade() {
  // fetch the input value and convert it into a number
  let input = document.getElementById('number').value;
  guess = Number(input);

  console.log("Guess: " + guess);

  // clear the form for a new guess
  document.getElementById('input-form').reset();

if(!(guess >= 0 && guess <= 100)) {
  hint.innerHTML = 'Invalid number, enter between 0-100';
  return false;
}

  guesses++;
  console.log(guesses)

  if (guess > numberToGuess)
    {hint.innerHTML = 'Guess lower!';
  }
  else if (guess < numberToGuess)
    {hint.innerHTML = 'Guess higher!';
  }
  else if (guess == numberToGuess)
    {hint.innerHTML = 'You are a winner, chug a beer or something! It took ' + guesses +' guesses.';
  }

  if (guess < bestHigh && guess >= numberToGuess)
    {bestHigh = guess;
    upperBest.innerHTML = '';
    upperBest.innerHTML = `Your best high is ${bestHigh}`;
  }
  if (guess > bestLow && guess <= numberToGuess)
    {bestLow = guess;
    lowerBest.innerHTML = '';
    lowerBest.innerHTML = `Your best low is ${bestLow}`};


lowBar.style.width = bestLow + '%';
highBar.style.width = 100 - bestHigh + '%';
middleBar.style.width = bestHigh - bestLow + '%';
lowBar.innerHTML = `${bestLow}`;
highBar.innerHTML = `${bestHigh}`;

/*
  let s = "";
  let i = 0
  while (i < numberToGuess + 1) {
    s = s + i + '<br>';
    i++
  }
document.getElementById('numbers').innerHTML = s;
*/
  // submit handler returns false to prevent form submission
  // which would cause a page reload and reset everything
  return false;
}

// set submit handler for the form, that is tell which function
// to call when the user presses submit
document.getElementById('input-form').onsubmit = guessMade;

var secretNumber = Math.floor(Math.random()*100);

var guess = Number(prompt("Please guess a number between 1 and 100"));

if (guess === secretNumber) {
	alert("You guessed my number correctly!");
}
else if (guess < secretNumber) {
	alert("Your guess is lower than the secretNumber. Try again!");
}
else if (guess > secretNumber) {
	alert("Your guess is higher than the secretNumber. Try again!");
}



// alert("Sorry, try again :(");
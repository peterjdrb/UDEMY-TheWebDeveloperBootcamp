var colours = generateRandomColours(6);
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var correctColourPicked = false;
var resultDisplay = document.querySelector("#result")

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setColours () {
	for (i=0; i<squares.length; i++){
		squares[i].style.background = colours[i];

		squares[i].addEventListener( "click", function () {
			var clickedColour = this.style.backgroundColor;

			if (clickedColour === pickedColour) {
				correctColourPicked = true;
				resultDisplay.textContent = "Correct"
				changeColours();
			} else {
				this.style.background = "white";
				resultDisplay.textContent = "Try Again"
			};
		}); 
	}
}

function setWinningSquare () {
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
}

function changeColours () {
	for (i=0; i<squares.length; i++){
		squares[i].style.background = pickedColour;
	}
}

function pickColour () {
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours (numOfColours) {
	var arr = []

	for (i=0; i<numOfColours; i++){
		arr[i] = "rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")"
	}

	return arr;
}

setColours();
setWinningSquare();
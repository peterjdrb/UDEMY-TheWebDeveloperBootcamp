function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setColours () {
	colours = [
		"rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")",
		"rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")",
		"rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")",
		"rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")",
		"rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")",
		"rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")"
	];

	for (i=0; i<squares.length; i++){
		squares[i].style.background = colours[i];
		
		squares[i].addEventListener( "click", function () {
			var clickedColour = this.style.background;

			if (clickedColour === pickedColour) {
				correctColourPicked = true;
			};
		});

	}
}

function setWinningSquare () {
	pickedColour = colours[getRndInteger(0, colours.length - 1)];
	colourDisplay.textContent = pickedColour;
}

var colours = [];
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var pickedColour;
var correctColourPicked = false;

setColours();
setWinningSquare();
var colours = [];
var pickedColour;
var resultDisplay = document.querySelector("#message");
var btnReset = document.getElementById("reset");
var btnEasy = document.getElementById("btnEasy");
var btnHard = document.getElementById("btnHard");
const easy = 4;
const hard = 20;
var numOfSquares = hard;
var bodyColour = document.body.style.backgroundColor;

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function changeColours (squares) {
	for (i=0; i<squares.length; i++){
		squares[i].style.background = pickedColour;
	}
}

function setColours () {
	var squares = document.querySelectorAll(".square");
	for (i=0; i<hard; i++){
		if (i<numOfSquares) {
			squares[i].style.background = colours[i];

			squares[i].addEventListener( "click", function () {
				var clickedColour = this.style.backgroundColor;

				if (clickedColour === pickedColour) {
					resultDisplay.textContent = "Correct";
					changeColours(squares);
					btnReset.textContent = "Play Again?";
				} else {
					this.style.background = bodyColour;
					resultDisplay.textContent = "Try Again";
				}
			}); 
		} else {
			squares[i].style.background = bodyColour;
		}
		
	}
}

function pickColour () {
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function setWinningSquare () {
	pickedColour = pickColour();
	var colourDisplay = document.getElementById("colourDisplay");
	colourDisplay.textContent = pickedColour;
}

function generateRandomColours (numOfColours) {
	var arr = [];

	for (i=0; i<numOfColours; i++){
		arr[i] = "rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")";
	}

	return arr;
}

function setupGameBoard () {
	var squareContainer = document.getElementById("squareContainer");
	squareContainer.innerHTML = "";

	for (i=0; i<hard; i++) {
		squareContainer.innerHTML += "<div class='square'></div>";
	}
}

function resetGame () {
	btnReset.textContent = "New Game";
	resultDisplay.textContent = "";
	colours = generateRandomColours(numOfSquares);
	// setupGameBoard(numOfSquares);
	setWinningSquare();
	setColours();
}

btnReset.addEventListener("click", function () {
	if (btnEasy.classList.contains("selected")) {
		resetGame(numOfSquares);
	} else {
		resetGame(numOfSquares);
	}
});

function difficultySetting () {
	btnEasy.classList.toggle("selected");
	btnHard.classList.toggle("selected");
	resetGame(numOfSquares);
}

btnEasy.addEventListener("click", function(){
	if (!this.classList.contains("selected")) {
		numOfSquares = easy;
		difficultySetting(numOfSquares);
	}
});

btnHard.addEventListener("click", function(){
	if (!this.classList.contains("selected")) {
		numOfSquares = hard;
		difficultySetting(numOfSquares);
	}
});

btnHard.classList.toggle("selected");
setupGameBoard();
resetGame(numOfSquares);
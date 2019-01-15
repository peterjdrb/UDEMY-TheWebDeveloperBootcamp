var colours = [];
var pickedColour;
var resultDisplay = document.querySelector("#result");
var btnReset = document.getElementById("reset");
var btnEasy = document.getElementById("btnEasy");
var btnHard = document.getElementById("btnHard");
const easy = 4;
const hard = 20;
var totalSquares = hard;

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
	for (i=0; i<squares.length; i++){
		squares[i].style.background = colours[i];

		squares[i].addEventListener( "click", function () {
			var clickedColour = this.style.backgroundColor;

			if (clickedColour === pickedColour) {
				resultDisplay.textContent = "Correct";
				changeColours(squares);
				btnReset.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				resultDisplay.textContent = "Try Again";
			}
		}); 
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

function setupGameBoard (squareNum) {
	var squareContainer = document.getElementById("squareContainer");
	squareContainer.innerHTML = "";

	for (i=0; i<totalSquares; i++) {
		squareContainer.innerHTML += "<div class='square'></div>";
	}
}

function resetGame (squareNum) {
	btnReset.textContent = "New Game";
	resultDisplay.textContent = "";
	colours = generateRandomColours(squareNum);
	setupGameBoard(squareNum);
	setWinningSquare();
	setColours();
}

btnReset.addEventListener("click", function () {
	if (btnEasy.classList.contains("selected")) {
		resetGame(totalSquares);
	} else {
		resetGame(totalSquares);
	}
});

function difficultySetting (squareNum) {
	btnEasy.classList.toggle("selected");
	btnHard.classList.toggle("selected");
	resetGame(squareNum);
}

btnEasy.addEventListener("click", function(){
	if (!this.classList.contains("selected")) {
		totalSquares = easy;
		difficultySetting(totalSquares);
	}
})

btnHard.addEventListener("click", function(){
	if (!this.classList.contains("selected")) {
		totalSquares = hard;
		difficultySetting(totalSquares);
	}
});

btnHard.classList.toggle("selected");
resetGame(totalSquares);
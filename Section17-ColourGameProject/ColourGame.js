var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var resultDisplay = document.querySelector("#result");
var btnReset = document.getElementById("reset");
var btnEasy = document.getElementById("btnEasy");
var btnHard = document.getElementById("btnHard");
var totalSquares = 6;
btnHard.classList.toggle("selected");
resetGame(totalSquares);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setColours () {
	squares = document.querySelectorAll(".square");
	for (i=0; i<squares.length; i++){
		squares[i].style.background = colours[i];

		squares[i].addEventListener( "click", function () {
			var clickedColour = this.style.backgroundColor;

			if (clickedColour === pickedColour) {;
				resultDisplay.textContent = "Correct";
				changeColours();
				btnReset.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				resultDisplay.textContent = "Try Again";
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
		arr[i] = "rgb(" + getRndInteger(0,255) + ", " + getRndInteger(0,255) + ", " +getRndInteger(0,255) + ")";
	}

	return arr;
}

function resetGame (squareNum) {
	btnReset.textContent = "New Game";
	resultDisplay.textContent = "";
	colours = generateRandomColours(squareNum);
	setupGameBoard(squareNum);
	setWinningSquare();
	setColours();
}

function setupGameBoard (squareNum) {
	var squareContainer = document.getElementById("squareContainer");
	squareContainer.innerHTML = "";

	for (i=0; i<totalSquares; i++) {
		squareContainer.innerHTML += '<div class="square"></div>';
	}
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
	if (!btnEasy.classList.contains("selected")) {
		totalSquares = 3;
		difficultySetting(totalSquares);
	};
})

btnHard.addEventListener("click", function(){
	if (!btnHard.classList.contains("selected")) {
		totalSquares = 6;
		difficultySetting(totalSquares);
	}
})
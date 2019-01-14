var player1Display = document.getElementById("p1Display");
var player2Display = document.getElementById("p2Display");
var player1Button = document.getElementById("p1");
var player2Button = document.getElementById("p2");
var ResetButton = document.getElementById("reset");
var inputNumber = document.getElementById("numInput");
var playUptoMessage = document.getElementById("message");

var player1Score = 0;
var player2Score = 0;
var GameFinished = false;
var winnerScore = Number(inputNumber.value);

reset.addEventListener("click", function(){
	resetGameState();
});

player1Button.addEventListener("click", function(){
	if (!GameFinished) {
		player1Score++;
		player1Display.textContent = player1Score.toString();
		hasGameFinished();
	}
});

player2Button.addEventListener("click", function(){
	if (!GameFinished) {
		player2Score++;
		player2Display.textContent = player2Score.toString();
		hasGameFinished();
	}
});

inputNumber.addEventListener("change", function(){
	winnerScore = Number(inputNumber.value);
	playUptoMessage.textContent = inputNumber.value
});

function hasGameFinished(){
	if (player1Score === winnerScore) {
		player1Display.classList.toggle("winner");

		GameFinished = true;
	}
	else if (player2Score === winnerScore) {
		player2Display.classList.toggle("winner");
		GameFinished = true;
	}
}

function resetGameState(){
	player1Score = 0;
	player2Score = 0;

	player1Display.textContent = "0";
	player2Display.textContent = "0";

	player1Display.classList.remove("winner");
	player2Display.classList.remove("winner");
	GameFinished = false;
}
// sleep(3000);
var h1 = document.querySelector("h1");
h1.style.color = "cyan";

//MANIPULATE
var body = document.querySelector("body");
var isWhite = true;

setInterval(function() {
	if (isWhite) {
		body.style.background = "yellow";
	} else {
		body.style.background = "white";
	}
	isWhite = !isWhite;
}, 1000);
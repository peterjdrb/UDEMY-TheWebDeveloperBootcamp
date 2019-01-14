var button = document.querySelector("button");
var whiteBackground = true;

button.addEventListener("click", function(){
	if (whiteBackground) {
		document.body.style.background = "purple";
	} else{
		document.body.style.background = "white";
	}

	whiteBackground = !whiteBackground;
})
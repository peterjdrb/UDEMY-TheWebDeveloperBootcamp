$("button").on("click", function(){
	var text = $(this).text();
	alert("The " + text + " button was pressed!");
	$(this).toggleClass("buttonPressedStyle");
});

$("button").on("mouseenter", function(){
	$(this).toggleClass("buttonHover");
});

$("h1").on("click", function(){
	$(this).toggleClass("buttonPressedStyle");
});


$("input").on("keypress", function(event){
	if (event.which===13) {
		alert("Lets try to log in");
	} else {
		console.log(event.key);
	}
});
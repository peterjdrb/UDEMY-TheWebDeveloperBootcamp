$("button").click(function(){
	var text = $(this).text();
	alert("The " + text + " button was pressed!");
	$(this).toggleClass("buttonPressedStyle");
});

$("input").keypress(function(event){
	if (event.which===13) {
		alert("Lets try to log in");
	} else {
		console.log(event);
	}
});
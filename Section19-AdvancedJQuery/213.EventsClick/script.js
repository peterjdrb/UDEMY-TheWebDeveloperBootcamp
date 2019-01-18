$("button").click(function(){
	var text = $(this).text();
	alert("The " + text + " button was pressed!");
	$(this).toggleClass("buttonPressedStyle");
});
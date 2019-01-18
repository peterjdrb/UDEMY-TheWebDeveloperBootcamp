try	{

	setTimeout(function () {
		$("img").attr("src", "https://images.unsplash.com/photo-1547479117-60c805aba44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
		
	}, 2000);

	setInterval(function() {
		$("li:first").toggleClass("JS");
	}, 1000);
	
	$("input").val("JSCode done this");
	var userInput = $("input").val();
	console.log(userInput);

	
}
catch(err){
	console.log(err.message);
}
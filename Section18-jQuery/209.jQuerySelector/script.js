try	{
	// var preference = {
	// color : "red",
	// border: "2px solid blue",
	// fontSize: "20px"
	// };

	$("div").css("background", "purple");
	$("div.highlight").css("width", "200px");
	$("#third").css("border", "5px dashed orange");

	$("div").first().css("color", "pink");

	console.log("JS ran okay");
}
catch(err){
	console.log(err.message);
}
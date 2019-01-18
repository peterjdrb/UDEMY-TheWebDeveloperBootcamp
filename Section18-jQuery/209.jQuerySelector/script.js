try	{

	$("div").css("background", "purple");
	$("div.highlight").css("width", "200px");
	$("#third").css("border", "5px dashed orange");

	$("div").first().css("color", "pink");

	console.log("JS ran okay");
}
catch(err){
	console.log(err.message);
}
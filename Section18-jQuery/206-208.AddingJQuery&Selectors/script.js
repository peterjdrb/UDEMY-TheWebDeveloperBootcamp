try	{
	var preference = {
	color : "red",
	border: "2px solid blue",
	fontSize: "20px"
	};

	$("#smart").css(preference);
	console.log("JS ran okay");
}
catch(err){
	console.log(err.message);
}
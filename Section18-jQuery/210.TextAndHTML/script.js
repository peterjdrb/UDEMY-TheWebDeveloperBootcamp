try	{

	console.log('$("h1").text()');
	console.log($("h1").text());

	console.log('$( "li:last" ).html()');
	console.log($( "li:last" ).html());

	console.log('$( "li:last" ).html( $("h1").text() )');
	console.log($( "li:last" ).html( $("h1").text() ));

	console.log('$( "ul" ).html()');
	console.log($( "ul" ).html());
	$( "ul" ).html( '<a href="https://www.google.co.uk">GOOGLE!!</a>');
	console.log($( "ul" ).html());
	console.log("JS ran okay");
}
catch(err){
	console.log(err.message);
}
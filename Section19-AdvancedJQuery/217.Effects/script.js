setInterval(function() {
	$("h1").fadeOut(500);
	$("h1").fadeIn(500);
}, 2000);

$("button").click( function(){
	$("img").slideToggle(1000);
});
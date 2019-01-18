$("#newItem").keypress(function(event){
	if (event.key === "Enter") {
		$("#itemList").append("<li id='item'>" + $(this).val());
		$(this).val("");
		$("li").last().click(function(){
			console.log("item clicked");
			$(this).toggleClass("done");
		})
	}
})
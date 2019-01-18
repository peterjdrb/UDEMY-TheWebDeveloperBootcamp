$("#newItem").on("keypress", function(event){
	if (event.key === "Enter") {
		$("#itemList").append("<li id='item' class='item'><span>X </span>" + $(this).val());
		$(this).val("");

		var itemList = $("li").last();

		itemList.on("click", function(){
			$(this).toggleClass("done");
		});

		itemList.find("span").on("click", function(event){
			event.stopPropagation();
			$(this).parent().fadeOut(250, function(){
				$(this).remove()
			});
		});
	}
});
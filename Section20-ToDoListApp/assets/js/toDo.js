$("#newItem").on("keypress", function(event){
	if (event.key === "Enter") {
		$("#itemList").append('<li id="item" class="item"><span><i class="fas fa-trash-alt"></i></span>' + $(this).val());
		$(this).val("");

		var itemList = $("li").last();

		itemList.on("click", function(){
			$(this).toggleClass("done");
		});

		itemList.find("span").on("click", function(event){
			event.stopPropagation();
			$(this).parent().fadeOut(100, function(){
				$(this).remove();
			});
		});
	}
});

$("#togglePlus").on("click", function(event) {
	event.stopPropagation();
	$("#newItem").fadeToggle();
});
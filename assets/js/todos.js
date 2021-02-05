//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on bin to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing text from input
		let todoText = $(this).val();
		$(this).val("");
		//create new li to add to ul
		$("ul").append('<li><span><i class="fa fa-trash"></i></span>' + todoText + "</li>");
	};
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
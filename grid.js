$(document).ready(function(){
	var sides=4;
	var grid=sides*sides;
	for(var i=0;i<grid;i++){
		$(".container").append("<div class=box></div>");
	}
	var $box=$(".box");
	$box.mouseenter(function(){
		$(this).css("background-color","blue")
	});
	$('button').click(function(){
		$box.css("background-color","#2F353C");
	});
});
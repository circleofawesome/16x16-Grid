$(document).ready(function(){
	var sides=128;
	var grid=sides*sides;
	var dimension=800/sides;
	for(var i=0;i<grid;i++){
		$(".container").append("<div class=box></div>");
	}
	var $box=$(".box");
	$box.css('height',dimension);
	$box.css('width',dimension);
	$box.mouseenter(function(){
		$(this).css("background-color","blue")
	});
	$('button').click(function(){
		$box.css("background-color","#2F353C");
	});
});
$(document).ready(function(){
	$("body").append("<div class=container></div>");
	var sides=prompt("Please enter the number of boxes you want on each side of your grid");
		while(sides>120){
			sides=prompt("Please enter the number (between 1 and 120) of boxes you want on each side of your grid");
		}
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
	$("#clear").click(function(){
		$box.css("background-color","#2F353C");
	});

	$("#newGrid").click(function(){
		$(".box").remove();
		$(".container").remove();
		$("body").append("<div class=container></div>");
		sides=prompt("Please enter the number of boxes you want on each side of your grid");
		while(sides>120){
			sides=prompt("Please enter the number (between 1 and 120) of boxes you want on each side of your grid");
		}
		grid=sides*sides;
		dimension=800/sides;
		for(var i=0;i<grid;i++){
		$(".container").append("<div class=box></div>");
		}
		$box=$(".box");
		$box.css('height',dimension);
		$box.css('width',dimension);
		$box.mouseenter(function(){
		$(this).css("background-color","blue")
		});
	});

});


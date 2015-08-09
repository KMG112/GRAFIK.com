// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({

	});


// form slider js
$(".range-slider-handle").mousemove(function(){
	$("#current-number-selected-budget").text($('.range-slider input').val())
})
$("#current-number-selected-budget").text($('.range-slider input').val())


$(".tabs .active h2").css("color", "white");

$("#grafik-form").on("click", function(){

	setInterval(function(){
		$(".tabs a[tabindex='0'] h2").css("color", "white");
		$(".tabs a[tabindex='-1'] h2").css("color", "black")}, 10)

});

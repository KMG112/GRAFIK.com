// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// form slider js
$(".range-slider-handle").mousemove(function(){
	$("#current-number-selected-budget").text($('.range-slider input').val())
})
$("#current-number-selected-budget").text($('.range-slider input').val())
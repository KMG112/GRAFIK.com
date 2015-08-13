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


var block5_lis = $("#block5 li");
var block5_labels = $("#block5 label");
$.each(block5_labels, function(i){
	var block5_index = i;
	$(this).on("click", function() {
		block5_lis.removeClass("active");
		$(block5_lis.get(block5_index)).addClass("active");
		$("#info-enter-panel-2").show();
	});
	$(this).on("mouseover", function() {
		block5_lis.removeClass("hover");
		$(block5_lis.get(block5_index)).addClass("hover");
	});
});


function toggle_visibility(el) {
	$("#"+el).show();
}


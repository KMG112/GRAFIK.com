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
		$(".tabs a[tabindex='0'] h1").css("color", "white");
		$(".tabs a[tabindex='-1'] h1").css("color", "black")}, 10)
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
});

var radio1_labels = $(".radio-toolbar label");
var radio2_labels = $(".radio-toolbar-2 label");
var radio3_labels = $(".radio-toolbar-3 label");

function toggle_visibility(el, next) {
	$.each(el, function(){
		$(this).on("click", function() {
			$(next).show();
			$("html, body").animate({ scrollTop: $(document).height()-$(window).height()}, "slow");
		});
	});
}
toggle_visibility(radio1_labels, ".radio-toolbar-2")
toggle_visibility(radio2_labels, "#info-enter")


toggle_visibility(radio3_labels, "#info-enter-panel-2")
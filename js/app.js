// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
	slider:{
    on_change: function(){
    	if($("#slider2 input").val() ==0){
    		$(".dot-labels span").css({"color": "#555555"})
    		$(".dot-holder span").show()
    	    $(".month-label-now").css({"color":"white"});
    	    $("#dot-1").css({"display":"none"});
    	}
    	else if($("#slider2 input").val() ==1){
    		$(".dot-labels span").css({"color": "#555555"})
    		$(".dot-holder span").show()
    	    $(".month-label-6").css({"color":"white"});
    	    $("#dot-2").css({"display":"none"});
    	}
    	else if($("#slider2 input").val() ==2){
    		$(".dot-labels span").css({"color": "#555555"})
    		$(".dot-holder span").show()
    	    $(".month-label-9").css({"color":"white"});
    	    $("#dot-3").css({"display":"none"});
    	}
    	else if($("#slider2 input").val() ==3){
    		$(".dot-labels span").css({"color": "#555555"})
    		$(".dot-holder span").show()
    	    $(".month-label-year").css({"color":"white"});
    	    $("#dot-4").css({"display":"none"});
    	 }  
    	
    }
  }
	});

// $(".tabs .active h2").css("color", "white");

$("#grafik-form").on("click", function(){
	setInterval(function(){
		$(".tabs a[tabindex='0'] h1").css({"color": "white"});
		$(".tabs a[tabindex='-1'] h1").css({"color": "#555555"});
		$(".tabs a[tabindex='0'] span").css({"color": "#ff6600"});
		$(".tabs a[tabindex='-1'] span").css({"color": "#555555"});
	});
});

function toggle_visibility(el, next) {
	el.on("click", function() {
		$(next).show();
		$("html, body").animate({ scrollTop: $(document).height()-$(window).height()}, "easeOutQuint");
		$(window).trigger("resize");
	});
}
toggle_visibility($(".radio-toolbar label"), ".radio-toolbar-2");
toggle_visibility($(".radio-toolbar-2 label"), "#info-enter");
toggle_visibility($(".radio-toolbar-3 label"), "#info-enter-panel-2");


$(document).on("ready", function() {
	$(window).trigger("resize");
});





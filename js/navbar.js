
var active = false;
var spanHolder = document.getElementById("span-holder")
spanHolder.addEventListener('click',function(event){
	event.preventDefault;
	active = !active;
	if(active){
		setTimeout(function(){
			$(".top-bar").css({"background-color": "black"});
			$("#grafik-mantra-pic").css({"background-color": "black"});
			$("#hamburger-holder").css({"background-color": "black"});
		}, 300);
		spanHolder.className = "active";
		$("#info-show-menu div").addClass("magictime swashIn");
		$("#info-show-menu h3").addClass("magictime swashIn");
		$("#contact-info-for-show-menu h3").addClass("magictime swashIn")
		staggerSocialMedia($("#social-media-for-show-menu a"))
		setTimeout(function(){$("#right-menu").css({opacity: 0}).animate({opacity: 1}, 600);}, 600)
		$("#menu").css("display", "inline-block");
		$("#menu").animate({
			'bottom': '0%',
			'height':  $( window ).height(),
		}, 600);
		 staggerMenuItemsAnimation($("#menu-items li"))
	}else{
		spanHolder.className = "inactive";
		setTimeout(function(){
		$(".top-bar").css({"background-color": "white"})
		$("#hamburger-holder").css({"background-color": "white"});
		$("#grafik-mantra-pic").css({"background-color": "white"})
		});
		$("#right-menu").css({opacity: 1}).animate({opacity: 0}, 100);
		$("#menu").animate({
			'bottom': '100%',
			'height':  "0%"
		}, 600);

		setTimeout(function(){$("#menu").css("display", "none");}, 601)
	}
})


function staggerMenuItemsAnimation(items){
 	items.removeClass("animated bounceInDown");
 	$(items).each(function(i) {
 		var _this = $(this);
 		var _delay = (items.length - i )* 100;
 		setTimeout(function(){
 			_this.animate({"opacity" : 1});
 			_this.addClass("animated bounceInDown");
 		}, _delay);
 		
 	});
}

function staggerSocialMedia(items){
	items.removeClass("magictime swashIn");
	$(items).each(function(i) {
	 	var _this = $(this);
		var _delay = i * 100;
		setTimeout(function(){
	 		 _this.addClass("magictime swashIn");
	 		}, _delay);
	});
}
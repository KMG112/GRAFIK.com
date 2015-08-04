var app = angular.module("app", ["ngAnimate"]);

app.controller("NavbarController", function($scope){

	// $scope.class = "active";

	// this.isExpanded = false;
	// this.expandHamburger = function(){
	// 	this.isExpanded = true;
	// };
	// this.collapsHamburger = function(){
	// 	this.isExpanded = false;
	// }
})
var active = false;
var spanHolder = document.getElementById("span-holder")
spanHolder.addEventListener('click',function(event){
	event.preventDefault;
	active = !active;
	if(active){
		spanHolder.className = "active";
	}else{
		spanHolder.className = "inactive";
	}

})

// app.directive("expandMe", function($animate){
// 	return function(scope, element, attrs){
// 		scope.$watch(attrs.expandMe, function(newVal){
// 			if (newVal) {
// 			$animate.addClass(element, "expand");
// 		}else {
//                 $animate.removeClass(element, "expand");
//             }
// 		});
// 	}
// })

// app.animation(".expand", function(){

// 	return {
// 		    addClass: function(element, className){

// 		    		TweenMax.to(element, 1, {transformOrigin: "topLeft"});
				
// 			},
//             removeClass: function(element, className) {
//             TweenMax.to(element, 1, {y:-20});
//         }
// 		}
// })


// var app = angular.module("app", ["ngAnimate"]);

// app.controller("AppCtrl", function() {
//     this.isHidden = false;
//     this.fadeIt = function() {
//         this.isHidden = !this.isHidden;
//     };
// });

// app.directive("hideMe", function($animate) {
//     return function(scope, element, attrs) {
//         scope.$watch(attrs.hideMe, function(newVal) {
//             if (newVal) {
//                 $animate.addClass(element, "fade");
//             } else {
//                 $animate.removeClass(element, "fade");
//             }
//         });
//     };
// });

// app.animation(".fade", function() {
//     return {
//         addClass: function(element, className) {
//             TweenMax.to(element, 1, {opacity: 0});
//         },
//         removeClass: function(element, className) {
//             TweenMax.to(element, 1, {opacity: 1});
//         }
//     };
// });
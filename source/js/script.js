$(document).ready(function() {
	
	/*--=-- fancybox --=--*/

	
	if($("a").is(".modal")){
		$(".modal").fancybox({
			openEffect	: 'elastic',
			closeEffect	: 'elastic',
			padding: [20, 40, 20, 40]
		});
	}
	
	var scrollerOneParams = {
		auto: false,
		controls:false,
		pause: 5000,
		easing: 'easeInOutExpo',
		displaySlideQty: 8,
		speed: 500
	}
	
	var scOneLength = $('.scroller-one li').length;
		
	if(scOneLength>8) {
		var scOne = $(".scroller-one ul").bxSlider(scrollerOneParams);
	} else {
		$(".scb-one").hide();
	}
	
	$(".scb-one .right").click(function() {
		scOne.goToNextSlide();
	});
	
	$(".scb-one .left").click(function() {
		scOne.goToPreviousSlide();
	});
	
	$('#main-banner ul').bxSlider({
		auto: true,
		pager: false,
		controls:false,
		pause: 7000,
		easing: 'easeInOutExpo',
		speed: 300
	});
	
});
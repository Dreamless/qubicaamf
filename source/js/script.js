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
	
	var scTwo = $('.main-banner-inn').bxSlider({
		auto: false,
		pager: false,
		controls:false,
		pause: 7000,
		easing: 'easeInQuad',
		speed: 600
	});
	
	$(".mb-buttons .right").click(function() {
		scTwo.goToNextSlide();
	});
	
	$(".mb-buttons .left").click(function() {
		scTwo.goToPreviousSlide();
	});
	
	var scTwoLength = $("#article-slider li").length;
	
	if(scOneLength>2) {
		var scTwo = $("#article-slider ul").bxSlider({
			auto: false,
			controls:false,
			pause: 5000,
			easing: 'easeInOutExpo',
			speed: 500
		});
	} else {
		$(".scb-two").hide();
	}	
	
	$(".scb-two .right").click(function() {
		scTwo.goToNextSlide();
	});
	
	$(".scb-two .left").click(function() {
		scTwo.goToPreviousSlide();
	});
	
	$("#menu > ul > li").each(function(i) {
		var tHeight = $(this).height() + 1;
		var childSub = $(this).find(".msub-box").length;
		$(this).children(".msub-box").css({"margin-top": -(tHeight * i) + "px"});
		if(childSub == 1) {
			$(this).addClass("mw-sub m-wlvl");
		} else if(childSub == 2) {
			$(this).addClass("mw-sub m-wlvl");
		} else if(childSub > 2) {
			$(this).addClass("mw-sub mlvl-3");
		}
	});
	
	$("#menu .msub-box li").each(function(i) {
		if($(this).children(".msub-box").html()) {
			$(this).addClass("m-arrow");
		}
	});
	
});

/***-=- window load -=-***/

$(window).load(function(){
	$(".msub-scroll").mCustomScrollbar({
		theme: "inset-3-dark",
		scrollButtons:{
			enable:false
		},
		advanced:{
			updateOnContentResize: true
		}
	});
});
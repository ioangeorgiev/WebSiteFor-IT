$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 150) {
			$(".scroll-up, .scroll-up i").fadeIn(200);

		} else {
			$(".scroll-up, .scroll-up i").fadeOut(200);
		}
	});

	$(".scroll-up, .scroll-up i").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 700);
		return false;
	});
});